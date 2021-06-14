import React, { useContext } from "react";
import styled from "styled-components";
import SecondNavbar from "../components/SecondNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import LoginSVG from "../images/login.svg";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import { DataContext } from "../components/DataContext";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

function Signin() {
  const { active, setActive, setReload, pageTransition, pageVariants } =
    useContext(DataContext);

  const animatedScroll = () => {
    scroll.scrollToTop();
  };

  const switchToSignup = () => {
    setActive("signup");
  };

  const switchToSignin = () => {
    setActive("signin");
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{position: "absolute", width: "100vw"}}
    >
      <ScrollToTop />
      <SecondNavbar />
      <SigninContainer>
        <SigninWrapper>
          <AnimationSignin
            active={active}
            onClick={() => {
              switchToSignin();
              setReload(true);
            }}
          >
            Signin
          </AnimationSignin>
          <AnimationSignup active={active} onClick={switchToSignup}>
            Signup
          </AnimationSignup>
          {active === "signin" && <Heading>Signin</Heading>}
          {active === "signup" && <Heading>Signup</Heading>}
          <Img src={LoginSVG} />
          <InnerWrapper>
            {active === "signin" && <SigninForm />}
            {active === "signup" && <SignupForm />}
            {active === "signin" && (
              <ConvertPage>
                Don't have an account?{" "}
                <Anchor
                  onClick={() => {
                    switchToSignup();
                    animatedScroll();
                  }}
                  href="#"
                >
                  Signup
                </Anchor>
              </ConvertPage>
            )}
            {active === "signup" && (
              <ConvertPage>
                Already have an account?{" "}
                <Anchor
                  onClick={() => {
                    switchToSignin();
                    animatedScroll();
                  }}
                  href="#"
                >
                  Signin
                </Anchor>
              </ConvertPage>
            )}
          </InnerWrapper>
        </SigninWrapper>
      </SigninContainer>
      <Footer />
    </motion.div>
  );
}
const Anchor = styled.a`
  color: #cbb162;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 5px;
  color: RGBA(5, 23, 71, 1);

  &:visited {
    color: RGBA(5, 23, 71, 1);
  }

  &:hover {
    cursor: pointer;
    color: #cbb162;
  }
`;

const ConvertPage = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.5);
  display: none;

  @media screen and (max-width: 825px) {
    display: block;
  } ;
`;

const AnimationSignin = styled.div`
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100px;
  height: 300px;
  font-size: 1.1rem;
  top: 70px;
  left: -100px;
  padding: 20px;
  background-color: RGBA(203, 177, 98, 0.4);
  cursor: pointer;
  color: #051747;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  opacity: ${({ active }) => (active === "signin" ? "0" : "1")};

  &:hover {
    height: ${({ active }) => active === "signup" && "500px"};
    background-color: RGBA(203, 177, 98, 1);
  }

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const AnimationSignup = styled.div`
  color: #051747;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  width: 100px;
  font-size: 1.1rem;
  height: 300px;
  top: 70px;
  right: -100px;
  padding: 20px;
  opacity: ${({ active }) => (active === "signup" ? "0" : "1")};
  background-color: RGBA(203, 177, 98, 0.4);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  &:hover {
    height: ${({ active }) => active === "signin" && "500px"};
    background-color: RGBA(203, 177, 98, 1);
  }

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  margin-top: 20px;
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  margin-top: 20px;
`;

const SigninWrapper = styled.div`
  margin: 50px;
  width: 600px;
  min-height: 710px;
  padding-bottom: 20px;
  box-shadow: rgba(15, 15, 15, 0.3) 2px 0 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  position: relative;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
`;

const SigninContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default Signin;
