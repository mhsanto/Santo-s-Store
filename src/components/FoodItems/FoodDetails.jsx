import { useParams } from "react-router-dom";
import foodList from "../../../datas.json";
import { useEffect, useState } from "react";
import { Container } from "../../GlobalStyle";
import { styled } from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { add } from "../../reducers/cartReducer";
const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState({});
  const { name, imagePath, price, details } = filteredList;
  useEffect(() => {
    if (id) {
      const singleFood = foodList.find((food) => food._id === id);
      setFilteredList(singleFood);
    }
  }, []);

  const addToCart = (listItem) => {
    dispatch(add(listItem));
  };
  console.log(filteredList);
  return (
    <Container>
      <FoodContainer>
        <FoodDetail>
          <h1>{name}</h1>
          <p>{details}</p>
          <span>${price}</span>
          <div>
            <button onClick={() => addToCart(filteredList)}>
              <AiOutlineShoppingCart size={20} />
              Add
            </button>
          </div>
        </FoodDetail>
        <ImageContainer>
          <img src={imagePath} alt={name} />
        </ImageContainer>
      </FoodContainer>
    </Container>
  );
};

const FoodContainer = styled.div`
  display: flex;
  gap: 4rem;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;
const FoodDetail = styled.div`
  width: 40ch;
  display: flex;
  flex-direction: column;
  padding-bottom: 10rem;
  gap: 1.3rem;

  h1 {
    font-weight: 600;
    font-size: clamp(2.19rem, calc(2.02rem + 0.83vw), 2.75rem);
  }
  p {
    font-weight: 400;
    opacity: 0.8;
    line-height: 1.9;
    font-size: small;
  }
  span {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
  }
  button {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background-color: var(--primary-color);
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const ImageContainer = styled.div`
  max-width: 45ch;
  img {
    max-width: 100%;
  }
`;
export default FoodDetails;
