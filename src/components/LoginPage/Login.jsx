import React from "react";
import Background from "./Background";
import logo from "../../assets/images/others/logo2.png";
import { styled } from "styled-components";
import SignupForm from "./SignupForm";
const Login = () => {
  return (
    <>
      <Background />
      <Section>
        <img src={logo} alt="red onion logo" />
        <SignupForm />
      </Section>
    </>
  );
};
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  img {
    width: 18vw;
    padding-bottom: 5rem;
    max-width: 100%;
  }
`;
export default Login;
