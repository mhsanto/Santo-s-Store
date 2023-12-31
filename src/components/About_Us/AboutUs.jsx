import React from "react";
import { Container } from "../../GlobalStyle";
import { styled } from "styled-components";
import SimilarSections from "./SimilarSections";
const AboutUs = () => {
  return (
    <Container>
      <AboutUSContainer>
        <HeadLine>
          <h1>You want to know more About us?</h1>
          <p>
          
          </p>
        </HeadLine>
        <SimilarSections />
      </AboutUSContainer>
    </Container>
  );
};
const AboutUSContainer = styled.div`
  padding: 3rem 0;
`;
const HeadLine = styled.div`
  line-height: 1.6;
  padding: 1rem 0;
  h1 {
    font-weight: 500;
    font-size: 1.8rem;
    padding-bottom: 1rem;
  }
  p {
    max-width: 61ch;
    font-weight: 600;
    font-size: 13px;
    opacity: 0.8;
    letter-spacing: -0.5px;
  }
`;
export default AboutUs;
