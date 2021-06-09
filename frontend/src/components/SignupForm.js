import styled from "styled-components";

function SignupForm() {
  return (
    <SignupFormContainer>
      <InputDiv>
        <OuterSpan>
          <Input className="inputText" type="text" name="name" required />
          <InnerSpan className="floating-label">Name</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <InputDiv>
        <OuterSpan>
          <Input className="inputText" type="text" name="email" required />
          <InnerSpan className="floating-label">Email</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <Row>
        <InputDiv>
          <OuterSpan>
            <SmallInput
              className="inputText"
              type="text"
              name="country"
              required
            />
            <InnerSpan className="floating-label">Country</InnerSpan>
          </OuterSpan>
        </InputDiv>
        <InputDiv>
          <OuterSpan>
            <SmallInput
              className="inputText"
              type="text"
              name="city"
              required
            />
            <InnerSpan className="floating-label">City</InnerSpan>
          </OuterSpan>
        </InputDiv>
      </Row>
      <InputDiv>
        <OuterSpan>
          <Textarea className="inputText" type="text" name="bio" required />
          <InnerSpan className="floating-label">Biography</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <InputDiv>
        <OuterSpan>
          <Input className="inputText" type="text" name="username" required />
          <InnerSpan className="floating-label">Username</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <InputDiv>
        <OuterSpan>
          <Input style={{letterSpacing: "4px"}} className="inputText" type="password" name="password" required />
          <InnerSpan className="floating-label">Password</InnerSpan>
        </OuterSpan>
      </InputDiv>
      <InputDiv>
        <OuterSpan>
          <Input style={{letterSpacing: "4px"}} className="inputText" type="password" name="password2" required />
          <InnerSpan className="floating-label">
            Confirm your password
          </InnerSpan>
        </OuterSpan>
      </InputDiv>
      <BtnWrap>
        <Btn>Signup</Btn>
      </BtnWrap>
    </SignupFormContainer>
  );
}

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
  margin-top: 30px;
`;

const SmallInput = styled.input`
  font-size: 14px;
  width: 170px;
  height: 40px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;

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

const Textarea= styled.textarea`
font-size: 14px;
  width: 350px;
  height: 60px;
  outline: none;
  border: none;
  box-shadow: RGBA(5, 23, 71, 0.5) 0px 0px 3px 0px;
  border-radius: 5px;

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
`;

const SignupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export default SignupForm;
