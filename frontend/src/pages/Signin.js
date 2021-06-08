import React, {useState} from "react";
import styled from "styled-components";
import SecondNavbar from "../components/SecondNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import LoginSVG from "../images/login.svg";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

function Signin() {
    const [active, setActive]= useState("signin")

    const switchToSignup = () => {
        setActive("signup")
    }

    const switchToSignin = () => {
        setActive("signin")
    }

  return (
    <>
      <ScrollToTop />
      <SecondNavbar />
      <SigninContainer>
        <SigninWrapper>
          <AnimationSignin active={active} onClick={switchToSignin}>Signin</AnimationSignin>
          <AnimationSignup active={active} onClick={switchToSignup}>Signup</AnimationSignup>
          {active === "signin" && <Heading>Signin</Heading>}
          {active === "signup" && <Heading>Signup</Heading>}
          <Img src={LoginSVG} />
          <InnerWrapper>
            {active === "signin" && <SigninForm />}
            {active === "signup" && <SignupForm/>}
          </InnerWrapper>
        </SigninWrapper>
      </SigninContainer>
      <Footer />
    </>
  );
}

const AnimationSignin = styled.div`
  transition: all 0.3s ease-in-out;
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
  opacity: ${({active})=> active === "signin" ? "0" : "1"};

  &:hover {
    height: ${({active})=> active === "signin"? "560px" : "670px"};
    background-color: RGBA(203, 177, 98, 1);
  }
`;

const AnimationSignup = styled.div`
  color: #051747;
  transition: all 0.3s ease-in-out;
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
  opacity: ${({active})=> active === "signup" ? "0" : "1"};
  background-color: RGBA(203, 177, 98, 0.4);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  &:hover {
    height: ${({active})=> active === "signin"? "560px" : "670px"};
    background-color: RGBA(203, 177, 98, 1);
  }
`;

const InnerWrapper = styled.div``;

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
