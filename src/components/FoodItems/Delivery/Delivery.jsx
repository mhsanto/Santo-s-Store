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
        <FoodItems>
          <div className="items">
            {foodItems.map((foodItem) => (
              <DeliveryItems key={foodItem._id} foodItem={foodItem} />
            ))}
          </div>
          <DeliveryDetails />
        </FoodItems>
      </FlexContainer>
    </Container>
  );
};
const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 880px) {
    justify-content: center;
    & > * {
      flex-basis: 100%;
    }
  }
`;
const FoodItems = styled.div`
  .items {
    height: 350px;
    width: max-content;
    padding: 2rem 1rem;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export default Delivery;
