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
  const products = useSelector((state) => state.cart);
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
            {products.map((product) => (
              <DeliveryItems key={product._id} product={product} />
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

  @media (max-width: 930px) {
    justify-content: center;
    & > * {
      flex-basis: 100%;
    }
  }
`;
const FoodItems = styled.div`
  .items {
    display: flex;
    flex-direction: column;
    height: 300px;
    min-width: 30vw;
    padding: 2rem 1rem;
    overflow: scroll;
    justify-content: flex-end;
    &::-webkit-scrollbar {
      display: none;
    }
    & > * {
      min-height: 40px;
      flex: 1 auto 100%;
    }
  }
`;
export default Delivery;
