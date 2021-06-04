import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataContext";
import SecondNavbar from "../components/SecondNavbar";
import { ImProfile } from "react-icons/im";
import { RiUserLocationFill } from "react-icons/ri";
import Footer from '../components/Footer'

function LocalDetail() {
  const { allUsers } = useContext(DataContext);
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/user/${id}`)
      .then((res) => res.json())
      .then((json) => setUser(json.data));
  }, []);

  console.log(user);

  return (
    <>
      <SecondNavbar />
      <DetailContainer>
          <RoundsWrapper>
          <Round1></Round1>
          <Round2></Round2>
          <Round3></Round3>
          </RoundsWrapper>
        <Img src={user.avatarSrc} />
        <Hr />
        <TextWrapper>
          <Name>{user.name}</Name>
          <Row>
            <IconWrapper>
              <RiUserLocationFill size={20}/>
            </IconWrapper>
            <City>
              From {user.city} in{" "}
              {user.country === "Philippines"
                ? `The ${user.country}`
                : `${user.country}`}
            </City>
          </Row>
          <Row>
            <IconWrapper>
              <ImProfile  size={20}/>
            </IconWrapper>
            <Bio>{user.bio}</Bio>
          </Row>
        </TextWrapper>
        <Hr />
        <RateWrapper></RateWrapper>
      </DetailContainer>
      <Footer />
    </>
  );
}

const RoundsWrapper = styled.div`
position: relative;

`;

const Round3 = styled.div`
background-color: #cbb162;
width: 150px;
height: 150px;
border-radius: 50%;
position: absolute;
top:0px;
left: 50px;
z-index:-1;
`;

const Round2 = styled.div`
background-color: #cbb162;
width: 150px;
height: 150px;
border-radius: 50%;
position: absolute;
`;

const Round1 = styled.div`
background-color: #cbb162;
width: 150px;
height: 150px;
border-radius: 50%;
position: absolute;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  color: #051747;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
`;

const Bio = styled.p`
  font-size: 1.2rem;
`;

const City = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #051747;
`;

const Img = styled.img`
  margin-top: 40px;
  border-radius: 15px;
  width: 300px;
`;

const Hr = styled.hr`
  width: 10vw;
  border: none;
  border-top: 6px dotted;
  margin: 50px;
  color: #081f62;
  opacity: 0.5;
`;

const RateWrapper = styled.div``;

const TextWrapper = styled.div`
  width: 55vw;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7e9f0;
  flex-direction: column;
  color: #081f62;
  z-index: -99
`;

export default LocalDetail;
