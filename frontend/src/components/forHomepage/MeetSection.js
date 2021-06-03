import React from "react";
import styled from "styled-components";
import Selects from "../forSelects/Selects";
import MeetSVG from "../../images/travel.svg";

function MeetSection() {
  return (
    <>
      <MeetContainer id="meet">
        <MeetWrapper>
          <SelectWrapper>
            <Headline>MEET YOUR FUTURE FRIENDS</Headline>
            <Heading>
              Search where to meet your local guides
            </Heading>
            <Selects />
          </SelectWrapper>
          <SVG src={MeetSVG} />
        </MeetWrapper>
      </MeetContainer>
    </>
  );
}

const SVG = styled.img`
  height: 400px;

  @media screen and (max-width: 825px) {
    height: 300px;
  }
`;

const MeetContainer = styled.div`
  color: #000000;
  background-color: #051747;

  @media screen and (max-width: 825px) {
    padding: 100px 50px;
  }
`;

const MeetWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  height: 930px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 825px) {
    flex-direction: column;
  }
`;

const SelectWrapper = styled.div`
  margin-right: 20px;

  @media screen and (max-width: 825px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: 80px;
  }
`;

const Headline = styled.p`
  color: #cbb162;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 800px;
  margin-bottom: 30px;
  color: #fefefe;

  @media screen and (max-width: 850px) {
    font-size: 32px;
  }
`;


export default MeetSection;
