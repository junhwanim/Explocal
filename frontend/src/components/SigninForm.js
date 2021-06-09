import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../components/DataContext";
import { useHistory } from "react-router-dom";

function SigninForm() {
  const { allUsers, setCurrentUser } = useContext(DataContext);
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [authFailed, setAuthFailed] = useState("");
  const history = useHistory();

  const handlerButton = () => {
    for (let i = 0; i < allUsers.length; i++) {
      if (
        allUsers[i].username.toLowerCase() === inputUsername.toLowerCase() &&
        allUsers[i].password === Number(inputPassword)
      ) {
        localStorage.setItem("currentUser", JSON.stringify(allUsers[i]));
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
        history.push("/");
      } else {
        setAuthFailed("Username or Password incorrect");
      }
    }
  };

  return (
    <SigninFormContainer>
      <InputDiv>
        <OuterSpan>
          <Input
            className="inputText"
            type="text"
            name="username"
            required
            onChange={(e) => {
              setInputUsername(e.target.value);
              setAuthFailed("");
            }}
          />
          <InnerSpan className="floating-label">Username</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <InputDiv>
        <OuterSpan>
          <Input
            className="inputText"
            type="password"
            name="password"
            required
            onChange={(e) => {
              setInputPassword(e.target.value);
              setAuthFailed("");
            }}
            style={{letterSpacing: "4px"}}
          />
          <InnerSpan className="floating-label">Password</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <FindPassword>Forgot your password?</FindPassword>
      <ErrorMessage authFailed={authFailed}>{authFailed}</ErrorMessage>
      <BtnWrap>
        <Btn onClick={handlerButton}>Signin</Btn>
      </BtnWrap>
    </SigninFormContainer>
  );
}

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  visibility: ${({ authFailed }) => (authFailed ? "visible" : "hidden")};
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
  margin-top: 50px;
`;

const FindPassword = styled.p`
  margin-top: 10px;
  opacity: 0.5;
`;

const Input = styled.input`
  font-size: 14px;
  width: 350px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
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
  margin-top: 30px;
`;

const SigninFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export default SigninForm;
