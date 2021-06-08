import React, {useContext} from 'react'
import styled from 'styled-components'


function SigninForm() {


    return (
        <SigninFormContainer>
            <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="username"
                required
              />
              <InnerSpan className="floating-label">Username</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <InputDiv>
            <OuterSpan>
              <Input
                className="inputText"
                type="text"
                name="password"
                required
              />
              <InnerSpan className="floating-label">Password</InnerSpan>
            </OuterSpan>
          </InputDiv>
          <FindPassword>Forgot your password?</FindPassword>
          <BtnWrap>
              <Btn>Signin</Btn>
          </BtnWrap>
          <ConvertPage>Don't have an account? <Anchor href="#">Signup</Anchor></ConvertPage>
        </SigninFormContainer>
    )
}

const Anchor = styled.a`
color: #cbb162;
text-decoration: none;
font-size: 1rem;
margin-left: 5px;
color: RGBA(5,23,71,1);

&:visited {
    color: RGBA(5,23,71,1)
}

&:hover {
    cursor: pointer;
    color: #cbb162;
}

`;

const ConvertPage = styled.p`
margin-top: 30px;
font-size: 0.9rem;
color: rgba(0,0,0,0.5);
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
  border:none;
  box-shadow: RGBA(5,23,71,0.5) 0px 0px 3px 0px;
  border-radius: 5px;

  &:focus ~ .floating-label,
  &:not(:focus):valid ~ .floating-label {
    top: -4px;
  }
  &:focus {
    border-bottom: 2px solid #051747;
  }

  @media screen and (max-width:600px){
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

export default SigninForm
