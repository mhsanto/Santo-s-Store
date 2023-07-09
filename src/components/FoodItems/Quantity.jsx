import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addFood, removeFood } from "../../reducers/counterSlice";
import { remove } from "../../reducers/cartReducer";

const Quantity = ({ filteredList }) => {
  const foodCounter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addFood());
  };
  const handleRemove = (id) => {
    dispatch(removeFood());
    dispatch(remove(id));
  };

  return (
    <FoodQuantity>
      <AiOutlineMinus
        onClick={() => handleRemove(filteredList._id)}
        size={15}
        color="red"
      />
      {foodCounter}
      <AiOutlinePlus onClick={handleAdd} size={15} color="red" />
    </FoodQuantity>
  );
};
const FoodQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 50px;
  padding: 0.2rem 1.2rem;
  text-align: center;
  width: 6.4rem;
  max-width: 100%;
  & > * {
    cursor: pointer;
  }
`;
export default Quantity;
