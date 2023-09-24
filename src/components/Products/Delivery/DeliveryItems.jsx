import React from "react";
import { styled } from "styled-components";
import Quantity from "../Quantity";
import { useSelector } from "react-redux";

const DeliveryItems = ({ product }) => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length > 0 && (
        <FoodDeliveryDetails>
          <ImageSection>
            <img src={`../${product?.imagePath}`} alt={product.name} />
          </ImageSection>
          <div>
            <p style={{ fontSize: "10px" }}>{product.name}</p>
            <h5
              style={{
                color: "var(--primary-color)",
                fontSize: "clamp(0.63rem, calc(0.49rem + 0.65vw), .90rem)",
              }}
            >
              ${product.price}
            </h5>
          </div>
          <Quantity filteredList={product} />
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
