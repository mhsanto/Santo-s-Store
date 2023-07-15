import { styled } from "styled-components";
import foodData from "../../../datas.json";
import { Container } from "../../GlobalStyle";
import FoodContainer from "./FoodContainer";
import { useState } from "react";
import Categories from "./Category";
import CheckoutButton from "./CheckoutButton";

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

  return (
    <Container>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FoodStorage>
        {filterFoodByCategory().map((food) => (
          <FoodContainer key={food._id} food={food} />
        ))}
      </FoodStorage>
      <CheckoutButton />
    </Container>
  );
};
const FoodStorage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(290px, 100%), 1fr));
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;

  @media (max-width: 1200px) {
    gap: 2rem;
  }
`;

export default Foods;
