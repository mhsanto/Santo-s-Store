import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../../../GlobalStyle";
import DeliveryItems from "./DeliveryItems";

import { styled } from "styled-components";
import DeliveryForm from "./DeliveryForm";
import DeliveryDetails from "./DeliveryDetails";

const Delivery = () => {
  const foodItems = useSelector((state) => state.cart);
  return (
    <Container>
      <FlexContainer>
        <div>
          <DeliveryForm />
        </div>
        <div>
          {foodItems.map((foodItem) => (
            <DeliveryItems key={foodItem._id} foodItem={foodItem} />
          ))}
          <DeliveryDetails />
        </div>
      </FlexContainer>
    </Container>
  );
};
const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
`;
export default Delivery;
