import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { styled } from "styled-components";

const Quantity = () => {
  return (
    <FoodQuantity>
      <AiOutlineMinus onClick={handleRemove} size={15} color="red" />
      <span>{foodCount}</span>
      <AiOutlinePlus onClick={handleAdd} size={15} color="red" />
    </FoodQuantity>
  );
};
const FoodQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.33rem;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 0.2rem 1.2rem;
  text-align: center;
  width: 6.7rem;
  max-width: 100%;
  & > * {
    cursor: pointer;
  }
  span {
    font-size: 19px;
  }
`;
export default Quantity;
