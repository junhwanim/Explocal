import React, { useState, useContext } from "react";
import styled from "styled-components";
import Video from "../../videos/video.mp4";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext";

function HomeSection() {
  const { currentUser, setActive } = useContext(DataContext);
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <SectionContainer id="home">
      <SectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </SectionBg>
      <SectionContent>
        <SectionH1>Make local friends and travel with them</SectionH1>
        <SectionP>Sign up for meeting our awesome local guides.</SectionP>
        {!currentUser && (
          <SectionBtnWrapper>
            <Button
              to="signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              onClick={(()=>setActive("signup"))}
            >
              Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </SectionBtnWrapper>
        )}
      </SectionContent>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1020px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const SectionBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const SectionContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const SectionP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const SectionBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3 ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Button = styled(Link)`
  border-radius: 5px;
  background: ${({ primary }) => (primary ? "#cbb162" : "010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:visited {
    color: inherit;
  }

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#c7ab59")};
  }
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export default HomeSection;
