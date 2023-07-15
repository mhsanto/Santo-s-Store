import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { add, remove } from "../../reducers/cartReducer";
import { useEffect, useState } from "react";
const Quantity = ({ filteredList }) => {
  const foodItems = useSelector((state) => state.cart);

  const [foodCount, setFoodCount] = useState(0);

  const dispatch = useDispatch();
  // console.log(foodItems);
  const addItem = (item) => {
    console.log(item);
    setFoodCount((prevCount) => prevCount + 1);
    dispatch(add(item));
  };
  const removeItem = (item) => {
    console.log(item);
    dispatch(remove(item));
    setFoodCount((prevCount) => item.quantity - 1);
  };
  useEffect(() => {
    if (filteredList.quantity) {
      setFoodCount(filteredList.quantity);
    }
  }, [filteredList.quantity]);
  return (
    <FoodQuantity>
      <AiOutlinePlus onClick={() => addItem(filteredList)} />
      {foodCount}
      <AiOutlineMinus onClick={() => removeItem(filteredList)} />
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
  @media (max-width: 480px) {
    padding: 0.1rem 0.5rem;
    font-size: 13px;
  }
`;
export default Quantity;
