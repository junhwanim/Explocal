import React, { useContext, useState, useRef } from "react";
import SecondNavbar from "../components/SecondNavbar";
import styled from "styled-components";
import BgImage from "../images/profile.jpg";
import Footer from "../components/Footer";
import { DataContext } from "../components/DataContext";
import { errorMessages } from "../settings";
import { BsCheckCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

function Profile() {
  const { setReload, currentUser, allUsers, setCurrentUser, pageTransition, pageVariants } =
    useContext(DataContext);
  const [errMessage, setErrMessage] = useState("");
  const [passwordErrMessage, setPasswordErrMessage] = useState("");

  let initialState = {
    country: currentUser.country,
    city: currentUser.city,
    email: currentUser.email,
    avatarSrc: currentUser.avatarSrc,
    name: currentUser.name,
    username: currentUser.username,
    bio: currentUser.bio,
    local: currentUser.local,
  };
  let passwordInitialState = {
    currentPassword: "",
    password: "",
    password2: "",
  };
  const [form, setForm] = useState(initialState);
  const [passwordForm, setPasswordForm] = useState(passwordInitialState);
  const [subStatus, setSubStatus] = useState("idle");
  const [passwordStatus, setPasswordStatus] = useState("idle");
  const currentPasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const password2Ref = useRef(null);

  const handleFormChange = (value, name) => {
    setForm({ ...form, [name]: value });
    setErrMessage("");
  };

  const handlePasswordFormChange = (value, name) => {
    setPasswordForm({ ...passwordForm, [name]: value });
    setPasswordErrMessage("");
  };

  const updateUser = () => {
    fetch(`/api/user/account/${currentUser._id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((json) => {
        const { status, error } = json;
        if (status === "success") {
          setSubStatus("confirmed");
          setReload(true);
          localStorage.setItem("currentUser", JSON.stringify(json.data));
          setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
        } else if (error) {
          setSubStatus("error");
          setErrMessage(errorMessages[error]);
        }
      });
  };

  const updatePassword = () => {
    fetch(`/api/user/password/${currentUser._id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordForm),
    })
      .then((response) => response.json())
      .then((json) => {
        const { status, error } = json;
        if (status === "success") {
          setPasswordStatus("confirmed");
          setReload(true);
          localStorage.setItem("currentUser", JSON.stringify(json.data));
          setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
          setPasswordForm(passwordInitialState);
          currentPasswordRef.current.value = "";
          passwordRef.current.value = "";
          password2Ref.current.value = "";
        } else if (error) {
          setPasswordStatus("error");
          setPasswordErrMessage(errorMessages[error]);
        }
      });
  };

  return (
    <>
    <ScrollToTop/>
    <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{position: "absolute", width: "100vw"}}
      >
      <SecondNavbar />
      <ProfileContainer>
        <ProfileLeft>
          <Img src={BgImage} />
        </ProfileLeft>
        <ProfileMain>
          <EditInfo>EDIT INFORMATION</EditInfo>
          <ProfilePic src={currentUser.avatarSrc} />
          <SignupWrap>
            <AccountInfo>ACCOUNT INFORMATION</AccountInfo>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  name="name"
                  defaultValue={currentUser.name}
                  required
                  onChange={(ev) => handleFormChange(ev.target.value, "name")}
                />
                <InnerSpan className="floating-label">Name</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  name="avatarSrc"
                  required
                  defaultValue={currentUser.avatarSrc}
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "avatarSrc")
                  }
                />
                <InnerSpan className="floating-label">Image URL</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Select
                  className="inputText"
                  type="text"
                  name="local"
                  required
                  onChange={(ev) => handleFormChange(ev.target.value, "local")}
                >
                  {currentUser.local === "true" ? (
                    <option selected disabled value="true">
                      Yes
                    </option>
                  ) : (
                    <option selected disabled value="false">
                      No
                    </option>
                  )}
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
                <InnerSpan className="floating-label">
                  Available as a local?
                </InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  name="email"
                  required
                  defaultValue={currentUser.email}
                  onChange={(ev) => handleFormChange(ev.target.value, "email")}
                />
                <InnerSpan className="floating-label">Email</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <Row>
              <SmallInputDivLeft>
                <OuterSpan>
                  <SmallInput
                    className="inputText"
                    type="text"
                    name="country"
                    required
                    defaultValue={currentUser.country}
                    onChange={(ev) =>
                      handleFormChange(ev.target.value, "country")
                    }
                  />
                  <InnerSpan className="floating-label">Country</InnerSpan>
                </OuterSpan>
              </SmallInputDivLeft>
              <SmallInputDivRight>
                <OuterSpan>
                  <SmallInput
                    className="inputText"
                    type="text"
                    name="city"
                    required
                    defaultValue={currentUser.city}
                    onChange={(ev) => handleFormChange(ev.target.value, "city")}
                  />
                  <InnerSpan className="floating-label">City</InnerSpan>
                </OuterSpan>
              </SmallInputDivRight>
            </Row>
            <InputDiv>
              <OuterSpan>
                <Textarea
                  className="inputText"
                  type="text"
                  name="bio"
                  required
                  defaultValue={currentUser.bio}
                  onChange={(ev) => handleFormChange(ev.target.value, "bio")}
                />
                <InnerSpan className="floating-label">Biography</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Input
                  className="inputText"
                  type="text"
                  name="username"
                  required
                  defaultValue={currentUser.username}
                  onChange={(ev) =>
                    handleFormChange(ev.target.value, "username")
                  }
                />
                <InnerSpan className="floating-label">Username</InnerSpan>
              </OuterSpan>
            </InputDiv>
            {subStatus === "confirmed" && (
              <p
                style={{
                  color: "#4ba511",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsCheckCircle style={{ marginRight: "5px" }} /> Changes Updated
              </p>
            )}
            {errMessage && (
              <p
                style={{ color: "red", marginTop: "5px", textAlign: "center" }}
              >
                {errMessage}
              </p>
            )}
            <BtnWrap>
              <Btn
                onClick={() => {
                  updateUser();
                }}
              >
                Save Changes
              </Btn>
            </BtnWrap>
            <ChangePassword>CHANGE PASSWORD</ChangePassword>
            <InputDiv>
              <OuterSpan>
                <Input
                  style={{ letterSpacing: "4px" }}
                  className="inputText"
                  type="password"
                  name="currentPassword"
                  required
                  ref={currentPasswordRef}
                  onChange={(ev) =>
                    handlePasswordFormChange(ev.target.value, "currentPassword")
                  }
                />
                <InnerSpan className="floating-label">
                  Current Password
                </InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Input
                  style={{ letterSpacing: "4px" }}
                  className="inputText"
                  type="password"
                  name="Password"
                  required
                  ref={passwordRef}
                  onChange={(ev) =>
                    handlePasswordFormChange(ev.target.value, "password")
                  }
                />
                <InnerSpan className="floating-label">New Password</InnerSpan>
              </OuterSpan>
            </InputDiv>
            <InputDiv>
              <OuterSpan>
                <Input
                  style={{ letterSpacing: "4px" }}
                  className="inputText"
                  type="password"
                  name="password2"
                  required
                  ref={password2Ref}
                  onChange={(ev) =>
                    handlePasswordFormChange(ev.target.value, "password2")
                  }
                />
                <InnerSpan className="floating-label">
                  Confirm your password
                </InnerSpan>
              </OuterSpan>
            </InputDiv>
            {passwordStatus === "confirmed" && (
              <p
                style={{
                  color: "#4ba511",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsCheckCircle style={{ marginRight: "5px" }} /> Password
                Updated
              </p>
            )}
            {passwordErrMessage && (
              <p
                style={{ color: "red", marginTop: "5px", textAlign: "center" }}
              >
                {passwordErrMessage}
              </p>
            )}
            <BtnWrap>
              <Btn
                onClick={() => {
                  updatePassword();
                }}
              >
                Save Password
              </Btn>
            </BtnWrap>
          </SignupWrap>
        </ProfileMain>
      </ProfileContainer>
      <Footer />
      </motion.div>
    </>
  );
}

const ChangePassword = styled.h3`
  color: #535f80;
  margin-bottom: 10px;
`;

const AccountInfo = styled.h3`
  margin-top: 40px;
  margin-bottom: 10px;
  color: #535f80;
`;

const EditInfo = styled.h2`
  font-size: 1.7rem;
  margin-top: 10px;
  color: #051747;
`;

const ProfilePic = styled.img`
  width: 150px;
  border-radius: 5px;
  margin-top: 10px;
`;

const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Btn = styled.button`
  width: 150px;
  height: 35px;
  font-size: 1.1rem;
  align-self: center;
  border: none;
  background-color: #051747;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #cbb162;
    color: #051747;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const BtnWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

const SmallInput = styled.input`
  font-size: 14px;
  width: 170px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;
  padding: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -1px;
  }
  &:focus {
    border-bottom: 2px solid #051747;
  }

  @media screen and (max-width: 600px) {
    width: 135px;
  }
`;

const Select = styled.select`
  font-size: 14px;
  width: 350px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -1px;
  }
  &:focus {
    border-bottom: 2px solid #051747;
  }

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Textarea = styled.textarea`
  font-size: 14px;
  width: 350px;
  height: 60px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;
  padding: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -1px;
  }
  &:focus {
    border-bottom: 2px solid #051747;
  }

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Input = styled.input`
  font-size: 14px;
  width: 350px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;
  padding: 10px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -1px;
  }
  &:focus {
    border-bottom: 2px solid #051747;
  }

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const InnerSpan = styled.span`
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 25px;
  transition: 0.2s ease all;
  opacity: 0.6;
  font-size: 0.9rem;
`;

const OuterSpan = styled.div``;

const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const SmallInputDivLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 5px;
  width: 350px;

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const SmallInputDivRight = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 5px;

  @media screen and (max-width: 600px) {
    width: 280px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileMain = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 825px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfileLeft = styled.div`
  width: 50vw;
  max-height: 100%;

  @media screen and (max-width: 825px) {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 825px) {
    justify-content: center;
    align-items: center;
  }
`;

export default Profile;
