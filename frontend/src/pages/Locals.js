import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SecondNavbar from "../components/SecondNavbar";
import { DataContext } from "../components/DataContext";
import styled from "styled-components";
import SecondSelects from "../components/forSelects/SecondSelects";
import Footer from "../components/Footer";
import { ImProfile } from "react-icons/im";
import { RiUserLocationFill } from "react-icons/ri";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

function Locals() {
  const { allUsers } = useContext(DataContext);
  const [cityUsers, setCityUsers] = useState([]);
  let { city } = useParams();

  useEffect(() => {
    const array = allUsers.filter((user) => {
      if (user.city.toLowerCase() === city.toLowerCase()) {
        return user;
      }
    });
    setCityUsers(array);
  }, [city, allUsers]);

  return (
    <>
      <ScrollToTop />
      <SecondNavbar />
      <LocalsConatiner>
        <SecondSelects />
        <Wrapper>
          <HeadingWrapper>
            <H1>
              Meet our local guides in <Span>{city}</Span>
            </H1>
          </HeadingWrapper>
          <LocalsWrapper>
            {cityUsers.map((user) => {
              return (
                <Local to={`/local/${user._id}`} key={user._id}>
                  <ImgWrapper>
                    <UserImg src={user.avatarSrc} />
                  </ImgWrapper>
                  <TextWrapper>
                    <Name>{user.name}</Name>
                    <LocationIcon size={20} />
                    <City>Living near or in {user.city}</City>
                    <ProfileIcon size={20} />
                    <Bio>{user.bio.split(" ").slice(0, 4).join(" ")}...</Bio>
                    <Detail>View {user.name}'s profile</Detail>
                  </TextWrapper>
                </Local>
              );
            })}
          </LocalsWrapper>
        </Wrapper>
      </LocalsConatiner>
      <Footer />
    </>
  );
}

const ProfileIcon = styled(ImProfile)`
fill: #081f62;
`;

const LocationIcon = styled(RiUserLocationFill)`
fill: #081f62;
`;

const Detail = styled.div`
  position: absolute;
  top: 40%;
  color: #051747;
  font-size: 30px;
  display: none;

  @media screen and (max-width: 600px){
      font-size: 22px;
  }
`;

const Name = styled.p`
  margin-bottom: 40px;
  font-size: 30px;
  font-weight: 600;
  color: #081f62;

  @media screen and (max-width: 825px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`;

const City = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding-right: 40px;

  @media screen and (max-width: 825px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

const Bio = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  padding-right: 40px;

  @media screen and (max-width: 825px) {
    font-size: 16px;
  }
`;

const TextWrapper = styled.div`
  margin-left: 30px;
`;

const UserImg = styled.img`
  width: 200px;
  border-radius: 7px;
  transform: translateX(-30px);
  box-shadow: 0 1px 1px rgba(5, 23, 71, 0.3), 0 2px 2px rgba(5, 23, 71, 0.3),
    0 4px 4px rgba(5, 23, 71, 0.3), 0 8px 8px rgba(5, 23, 71, 0.3),
    0 16px 16px rgba(5, 23, 71, 0.3);

  @media screen and (max-width: 900px) {
    transform: translateX(0);
  }
`;

const ImgWrapper = styled.div``;

const Local = styled(Link)`
  background-color: #cbb162;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  text-decoration: none;
  color: #000000;
  position: relative;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(203, 177, 98, 0.6);
    transform: scale(1.03);
  }

  &:active {
    transform: scale(.98)
  }

  &:hover {
    ${Detail} {
      display: block;
    }
  }

  &:hover {
    ${Name},${City},${Bio} {
      color: rgba(203, 177, 98, 0.4);
    }
  }

  &:hover {
    ${LocationIcon},${ProfileIcon} {
      fill: #cbb162;
      fill-opacity: 0.4;
    }
  }

  &:visited {
    color: #000000;
  }

  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;

const Span = styled.span`
  color: #051747;
  font-size: 35px;
  font-weight: 800;

  @media screen and (max-width: 825px) {
    font-size: 28px;
  }
`;

const H1 = styled.h1`
  color: #535f80;
  font-size: 30px;
  font-weight: 600;

  @media screen and (max-width: 825px) {
    font-size: 25px;
  }
`;

const HeadingWrapper = styled.div`
  margin: 30px 0 60px 0;
`;

const LocalsWrapper = styled.div`
  height: 59vh;
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
  border-radius: 15px;
  margin-top: 30px;
  margin-bottom: 60px;
  overflow-y: scroll;

  @media screen and (max-width: 825px) {
    margin-top: 50px;
  }
`;

const LocalsConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1020px;

  @media screen and (max-width: 825px) {
    margin-top: 30px;
  }
`;

export default Locals;
