import React from "react";
import Background from "./Background";
import logo from "../../../public/logo-no-background.svg";
import { styled } from "styled-components";
import Form from "./Form";
const HandleAuthentication = () => {
  return (
    <>
      <Background />

      <Section>
        <img src={logo} alt="Santo Store logo" />
        <Form />
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
export default HandleAuthentication;
