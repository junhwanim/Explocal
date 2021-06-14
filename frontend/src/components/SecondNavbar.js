import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { DataContext } from "../components/DataContext";

function SecondNavbar() {
  const { currentUser, setCurrentUser, setActive } = useContext(DataContext);


  const toggleHome = () => {
    scroll.scrollToTop();
  };

  let path = window.location.pathname;

  return (
    <NavbarContainer path={path}>
      <NavLogo to="/" onClick={toggleHome}>
        <LogoIcon style={{ marginRight: "7px", fontSize: "2rem" }} />
        Explocal
      </NavLogo>
      {currentUser ? (
        <CurrentUser>
          <Greeting to="/user/profile">Welcome, {currentUser.name}</Greeting>
          <NavBtn>
            <NavBtnClick
              onClick={() => {
                localStorage.clear();
                setCurrentUser("");
              }}
              to="/signin"
            >
              Sign out
            </NavBtnClick>
          </NavBtn>
        </CurrentUser>
      ) : (
        path !== "/signin" &&
        <NavBtn>
          <NavBtnLink to="/signin" onClick={() => setActive("signin")}>
            Sign In
          </NavBtnLink>
        </NavBtn>
      )}
    </NavbarContainer>
  );
}

const Greeting = styled(Link)`
  color: #fff;
  margin-bottom: 8px;

  transition: all 0.2s ease-in-out;

  &:hover {
    color: #cbb162;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const CurrentUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #cbb162;
    color: #000000;
  }
`;

const NavBtnClick = styled(Link)`
  border-radius: 5px;
  background: transparent;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #cbb162;
    color: #000000;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.3 ease-in-out;

  &:active {
    transform: scale(0.9);
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 48px 0 48px;
  max-width: 100vw;
  background-color: ${({ path }) =>
    path.includes("/local/") ? "transparent" : "#051747"};
`;

const LogoIcon = styled(FaSuitcase)``;

const NavLogo = styled(Link)`
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

export default SecondNavbar;
