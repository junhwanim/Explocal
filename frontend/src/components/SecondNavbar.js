import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaSuitcase } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

function SecondNavbar() {
    const toggleHome = () => {
        scroll.scrollToTop();
      };

    let path = window.location.pathname

    return (
        <NavbarContainer path={path}>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoIcon style={{ marginRight: "7px", fontSize: "2rem"  }} />
              Explocal
            </NavLogo>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 100vw;
  background-color: ${({path})=>path.includes("/local/")? "transparent" : "#051747" };
`;

const LogoIcon = styled(FaSuitcase)`
`;

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

export default SecondNavbar
