import foods from "../../../datas.json";
import { Container } from "../../GlobalStyle";
import FoodContainer from "./FoodContainer";

const Foods = () => {
  console.log(foods);
  return (
    <Container>
      {foods.map((food) => (
        <FoodContainer key={food._id} food={food} />
      ))}
    </Container>
  );
};

export default Foods;
