import React from "react";
import { styled } from "styled-components";
import Quantity from "../Quantity";
import { useSelector } from "react-redux";
import DeliveryDetails from "./DeliveryDetails";

const DeliveryItems = ({ foodItem }) => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length > 0 && (
        <FoodDeliveryDetails>
          <ImageSection>
            <img src={foodItem?.imagePath} alt={foodItem.name} />
          </ImageSection>
          <div>
            <p style={{ fontSize: "10px" }}>{foodItem.name}</p>
            <h5
              style={{
                color: "var(--primary-color)",
                fontSize: "clamp(0.63rem, calc(0.49rem + 0.65vw), .90rem)",
              }}
            >
              ${foodItem.price}
            </h5>
          </div>
          <Quantity filteredList={foodItem} />
        </FoodDeliveryDetails>
      )}
    </>
  );
};
const FoodDeliveryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0.35rem;
  border-radius: 20px;
  margin: 0.6rem 0;
  background-color: #e0e0e072;
  align-items: center;
  & > * {
    flex-basis: 100%;
  }
`;
const ImageSection = styled.div`
  width: 1px;
  img {
    max-width: 100%;
  }
`;

export default DeliveryItems;
