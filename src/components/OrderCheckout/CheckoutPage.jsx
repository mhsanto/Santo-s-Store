import React from "react";
import { Container } from "../../GlobalStyle";
import DeliveryDetails from "./DeliveryDetails";
import { styled } from "styled-components";
const CheckoutPage = () => {
  return (
    <Container>
      <Main>
        <DeliveryDetails />
      </Main>
    </Container>
  );
};
const Main = styled.main`
  background-color: #e8e6e6;
  padding: 1.5rem;
  border-radius: 10px;
  max-width: 18rem;
`;
export default CheckoutPage;
