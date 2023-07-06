import { styled } from "styled-components";
import foodData from "../../../datas.json";
import { Container } from "../../GlobalStyle";
import FoodContainer from "./FoodContainer";
import { useState } from "react";

const Foods = () => {
  const [selectedCategory, setSelectedCategory] = useState("dinner");
  const [foods, setFoods] = useState(foodData);

  const filterFoodByCategory = () => {
    if (selectedCategory) {
      return foods.filter((food) => selectedCategory === food.category);
    } else {
      return foods;
    }
  };
  console.log(foods);
  return (
    <Container>
      <Category>
        <p
          className={selectedCategory === "dinner" ? "selected" : ""}
          onClick={() => setSelectedCategory("dinner")}
        >
          Dinner
        </p>
        <p
          className={selectedCategory === "lunch" ? "selected" : ""}
          onClick={() => setSelectedCategory("lunch")}
        >
          Lunch
        </p>
        <p
          onClick={() => setSelectedCategory("breakfast")}
          className={selectedCategory === "breakfast" ? "selected" : ""}
        >
          BreakFast
        </p>
      </Category>

      <FoodStorage>
        {filterFoodByCategory().map((food) => (
          <FoodContainer key={food._id} food={food} />
        ))}
      </FoodStorage>
    </Container>
  );
};
const FoodStorage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(3, 360px);
  justify-content: center;
  gap: 4rem;
  padding: 2rem 0;
`;
const Category = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-top: 3rem;
  p {
    cursor: pointer;
    position: relative;
    transition: 250ms ease-out;
    font-weight: 500;
    padding-bottom: 0.2rem;
    border-bottom: 3px solid transparent;
  }
  .selected {
    border-bottom: 3px solid var(--primary-color, red);
  }
`;
export default Foods;
