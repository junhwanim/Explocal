import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSuitcase,
} from "react-icons/fa";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/" onClick={toggleHome}>
              <LogoIcon style={{ marginRight: "7px", fontSize: "1.5rem" }} />
              Explocal
            </SocialLogo>
            <CopyRight>
              <FaSuitcase style={{ marginRight: "7px" }} />
              Explocal © {new Date().getFullYear()}
            </CopyRight>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/profile.php?id=100004271558231"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/jh_im_______/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/junhwan-im-ab9672184/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: #051747;
`;

const FooterWrapper = styled.footer`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`;

const LogoIcon = styled(FaSuitcase)`
`;

const SocialLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  @media screen and (max-width: 825px) {
    margin-bottom: 16px;
  }

  &:hover {
    color: #cbb162;
    ${LogoIcon} {
      fill: #cbb162;
    }
  }
`;

const CopyRight = styled.small`
  color: #fff;

  @media screen and (max-width: 825px) {
    margin-bottom: 16px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: #d5c081;
  }
`;

export default Footer;
