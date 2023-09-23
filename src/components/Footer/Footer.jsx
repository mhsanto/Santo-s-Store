import React, { useState } from "react";
import logo from "../../../public/logo-no-background.svg";
import { styled } from "styled-components";
import Labels from "./Labels";
import { Container } from "../../GlobalStyle";
const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <FooterSection>
      <Container>
        <FlexContainer>
          <CopyRight>
            <img src={logo} alt="red Onion Logo" />
            <p>Copyright @{year} Mahmodul Hasan Santo</p>
          </CopyRight>
          <Labels />
        </FlexContainer>
      </Container>
    </FooterSection>
  );
};
const FooterSection = styled.section`
  background-color: #191919;
  padding: 3rem 1rem;
`;
const FlexContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CopyRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  p {
    font-size: clamp(0.75rem, calc(0.44rem + 0.63vw), 1rem);
    color: rgba(255, 255, 255, 0.3);
  }
  img {
    width: 10rem;
    max-width: 100%;
  }
`;

export default Footer;
