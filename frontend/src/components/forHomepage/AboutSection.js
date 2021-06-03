import React from "react";
import styled from "styled-components";
import AboutSVG from "../../images/about.svg";

function AboutSection() {
  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <SVG src={AboutSVG}></SVG>
          <TextWrapper>
            <Headline>TRAVEL WITH OUR LOCALS</Headline>
            <Heading>
              Make new friends and discover new places with them
            </Heading>
            <Text>
              We will introduce our local guides to you who would potentially be
              your best friend and show you unseen places that only locals know.
            </Text>
            <Text>
              Also, our local guides are very interested in learning your
              culture and language so you can teach them while travelling
              together.
            </Text>
          </TextWrapper>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

const AboutContainer = styled.div`
  color: #000000;
  background-color: #e7e9f0;

  @media screen and (max-width: 825px) {
    padding: 100px 50px;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  height: 930px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`;

const SVG = styled.img`
  height: 400px;

  @media screen and (max-width: 825px){
      height: 300px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 20px;

  @media screen and (max-width: 825px) {
    flex-direction: column;
    margin-left: 0;
    margin-top: 80px;
  }
`;

const Headline = styled.p`
  color: #081f62;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800px;
  margin-bottom: 30px;

  @media screen and (max-width: 850px) {
    font-size: 32px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  margin-top: 5px;
`;


export default AboutSection;
