import React from "react";
import styled from "styled-components";
import ContactSVG from "../../images/contact.svg";
import { GrLocation, GrPhone } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";

function ContactSection() {
  return (
    <>
      <ContactContainer id="contact">
        <ContactWrapper>
          <SVG src={ContactSVG}></SVG>
          <TextWrapper>
            <Headline>FOR ANY INQUIRIES</Headline>
            <Heading>If you have any questions, Hit Us Up</Heading>
            <Location>
              <LocationIcon />
              Location
            </Location>
            <Text>3632 Overdale Avenue, Montreal, QC, Canada</Text>
            <Phone>
              <PhoneIcon />
              Phone
            </Phone>
            <Text>1-438-880-7777 </Text>
            <Email>
              <EmailIcon />
              Send e-mail
            </Email>
            <AnimationDiv>
              <EmailLink href="mailto:junhwanim@hotmail.com?subject=Inquiry for Explocal">
                junhwanim@hotmail.com
              </EmailLink>
            </AnimationDiv>
          </TextWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}

const ContactContainer = styled.div`
  color: #000000;
  background-color: #e7e9f0;

  @media screen and (max-width: 825px) {
    padding: 100px 50px;
  }
`;

const ContactWrapper = styled.div`
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

  @media screen and (max-width: 825px) {
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

const Location = styled.p`
  display: flex;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
`;

const LocationIcon = styled(GrLocation)`
  margin-right: 10px;
`;

const Phone = styled.p`
  display: flex;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  margin-top: 30px;
`;

const PhoneIcon = styled(GrPhone)`
  margin-right: 10px;
`;

const Email = styled.p`
  display: flex;
  align-items: center;
  font-size: 23px;
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 7px;
`;

const EmailIcon = styled(AiOutlineMail)`
  margin-right: 10px;
`;

const AnimationDiv = styled.div`
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #051747;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const EmailLink = styled.a`
  margin-left: 33px;
  font-size: 18px;
  position: relative;
  text-decoration: none;
  color: rgb(0, 0, 0, 0.7);
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.7);

  &:hover {
    cursor: pointer;
    color: #051747;
  }

  &:after {
    content: "";
    width: 0%;
    height: 3px;
    background-color: #fff;
    background: #ffd89b;
    background: -webkit-linear-gradient(to left, #19547b, #ffd89b);
    background: linear-gradient(to right, #19547b, #ffd89b);

    position: absolute;
    top: 100%;
    bottom: 0%;
    left: 50%;
    border-radius: 10px;
    transition: all 500ms ease;
  }

  &:hover::after {
    left: 0%;
    width: 100%;
  }
`;

const Text = styled.p`
  margin-left: 33px;
  font-size: 18px;
  margin-top: 7px;
  opacity: 0.7;
`;

export default ContactSection;
