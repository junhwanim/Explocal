import styled, { keyframes } from "styled-components";
import { DataContext } from "../components/DataContext";
import React, { useState, useContext } from "react";
import { errorMessages } from "../settings";
import { BsCheckCircle } from "react-icons/bs";

function SignupForm() {
  const { formValue, setFormValue, setReload } = useContext(DataContext);
  const [errMessage, setErrMessage] = useState("");
  const [subStatus, setSubStatus] = useState("idle");
  const [isRegistered, setIsRegistered] = useState(false);


  const handleFormChange = (value, name) => {
    setFormValue({ ...formValue, [name]: value });
    setErrMessage("");
  };

  const createUser = () => {
    fetch("/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .then((json) => {
        const { status, error } = json;
        if (status === "success") {
          setSubStatus("confirmed");
          setIsRegistered(true);
        } else if (error) {
          setSubStatus("error");
          setErrMessage(errorMessages[error]);
        }
      });
  };

  return (
    <SignupFormContainer>
      <SuccessMsg isRegistered={isRegistered}>
        <SuccessIconWrap>
          <BsCheckCircle />
          <p style={{ marginLeft: "10px" }}>Successfully Registered</p>
        </SuccessIconWrap>
        <ContinueToSigninWrap>
          <p style={{ marginLeft: "10px" }}>Signin to continue</p>
        </ContinueToSigninWrap>
      </SuccessMsg>
      <SignupWrap isRegistered={isRegistered}>
        <InputDiv>
          <OuterSpan>
            <Input
              className="inputText"
              type="text"
              name="name"
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
              onChange={(ev) => handleFormChange(ev.target.value, "avatarSrc")}
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
              <option selected disabled></option>
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
                onChange={(ev) => handleFormChange(ev.target.value, "country")}
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
              onChange={(ev) => handleFormChange(ev.target.value, "username")}
            />
            <InnerSpan className="floating-label">Username</InnerSpan>
          </OuterSpan>
        </InputDiv>
        <InputDiv>
          <OuterSpan>
            <Input
              style={{ letterSpacing: "4px" }}
              className="inputText"
              type="password"
              name="password"
              required
              onChange={(ev) => handleFormChange(ev.target.value, "password")}
            />
            <InnerSpan className="floating-label">Password</InnerSpan>
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
              onChange={(ev) => handleFormChange(ev.target.value, "password2")}
            />
            <InnerSpan className="floating-label">
              Confirm your password
            </InnerSpan>
          </OuterSpan>
        </InputDiv>
        {errMessage && (
          <p style={{ color: "red", marginTop: "5px", textAlign: "center" }}>
            {errMessage}
          </p>
        )}
        <BtnWrap>
          <Btn
            onClick={() => {
              createUser();
              setReload(true);
            }}
          >
            Signup
          </Btn>
        </BtnWrap>
      </SignupWrap>
    </SignupFormContainer>
  );
}

const ContinueToSigninWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 50px;
  color: #051747;
`;

const scaleOut = keyframes`
from {
  transform: scale(0);
  transform: rotateX(90deg);
  opacity: 0;
}

to {
  transform: scale(1);
  transform: rotateX(0deg)
  opacity: 1;
}
`;

const SuccessMsg = styled.div`
  margin-top: 60px;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4ba511;
  transition: all 0.3s ease-in-out;
  display: ${({ isRegistered }) => (isRegistered === true ? "block" : "none")};
  animation: ${scaleOut} 1.5s forwards;
`;

const SuccessIconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

const SignupWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  display: ${({ isRegistered }) => (isRegistered === false ? "block" : "none")};
  transform: ${({ isRegistered }) =>
    isRegistered === false ? "scale(1)" : "scale(0)"};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;

  @media screen and (max-width: 600px) {
    width: 280px;
    justify-content: space-between;
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
  margin-top: 30px;
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

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  transition: all 0.3s ease-in-out;
`;

export default SignupForm;
