import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaSuitcase} from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { DataContext } from "../components/DataContext";

function Navbar({ toggle }) {
  const { currentUser, setCurrentUser, setActive} = useContext(DataContext);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoIcon style={{ marginRight: "7px", fontSize: "2rem" }} />
              Explocal
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <AlignToRight>
              <NavMenu>
                <NavItem>
                  <NavLinks
                    to="about"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    About us
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="meet"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Meet-Guides
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="contact"
                    smooth={true}
                    duration={1000}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    Contact
                  </NavLinks>
                </NavItem>
              </NavMenu>
              {currentUser ? (
                <CurrentUser>
                  <Greeting>Welcome, {currentUser.name}</Greeting>
                  <NavBtn>
                    <NavBtnClick
                      onClick={() => {
                        localStorage.clear();
                        setCurrentUser("");
                      }}
                    >
                      Sign out
                    </NavBtnClick>
                  </NavBtn>
                </CurrentUser>
              ) : (
                <NavBtn>
                  <NavBtnLink to="/signin" onClick={()=>setActive("signin")}>Sign In</NavBtnLink>
                </NavBtn>
              )}
            </AlignToRight>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

const Greeting = styled.p`
  color: #fff;
`;

const CurrentUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#051747" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const AlignToRight = styled.div`
  display: flex;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 95vw;
`;

const LogoIcon = styled(FaSuitcase)``;

const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #cbb162;
    ${LogoIcon} {
      fill: #cbb162;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 825px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 35px;

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #cbb162;
  }

  &.active {
    border-bottom: 3px solid #cbb162;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.3 ease-in-out;

  &:active {
    transform: scale(0.9);
  }

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const NavBtnClick = styled.button`
  border-radius: 5px;
  background: #cbb162;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`;

const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  background: #cbb162;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export default Navbar;
