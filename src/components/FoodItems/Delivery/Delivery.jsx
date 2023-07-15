import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../../GlobalStyle";
import DeliveryItems from "./DeliveryItems";
import { styled } from "styled-components";
import DeliveryForm from "./DeliveryForm";
import DeliveryDetails from "./DeliveryDetails";
import { useState } from "react";
import { address } from "../../../reducers/locationSlice";

const Delivery = () => {
  const [inputValues, setInputValues] = useState({
    location: "",
    road: "",
    floor: "",
    business: "",
    instructor: "",
  });
  const [isDeliveryDetails, setIsDeliveryDetails] = useState(false);

  //from redux-toolkit
  const foodItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleInputValues = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValue) => ({ ...prevValue, [name]: value }));
    dispatch(address(inputValues));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDeliveryDetails(true);
  };
  // console.log(inputValues);
  return (
    <Container>
      <FlexContainer>
        <div>
          <DeliveryForm
            inputValues={inputValues}
            handleInputValues={handleInputValues}
            handleSubmit={handleSubmit}
          />
        </div>
        <FoodItems>
          <div className="items">
            {foodItems.map((foodItem) => (
              <DeliveryItems key={foodItem._id} foodItem={foodItem} />
            ))}
          </div>
          <DeliveryDetails isDeliveryDetails={isDeliveryDetails} />
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
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 400px;
    padding: 2rem 1rem;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    & > * {
      min-height: 20px;
      flex: 1 auto 100%;
    }
  }
`;
export default Delivery;
