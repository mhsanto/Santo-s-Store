import { useParams } from "react-router-dom";
import foodList from "../../datas";
import { useEffect, useState } from "react";
import { Container } from "../../GlobalStyle";
import { styled } from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { add } from "../../reducers/cartReducer";

const ProductDetails = () => {
  // internal imports
  const { id } = useParams();
  const dispatch = useDispatch();

  // external imports
  const [filteredList, setFilteredList] = useState({});

  const { name, imagePath, price, details } = filteredList;

  const addToCart = (listItem) => {
    dispatch(add(listItem));
  };

  useEffect(() => {
    if (id) {
      const singleFood = foodList.find((food) => food._id === id);
      setFilteredList(singleFood);
    }
  }, []);

  return (
    <Container>
      <FoodContainer>
        <FoodDetail>
          <h1>{name}</h1>
          <p>
            {details}orem ipsum dolor sit, amet consectetur adipisicing elit.
            Harum consequuntur culpa accusamus saepe excepturi minima porro
            officiis eos totam. Voluptatem.
          </p>
          <div style={{ display: "flex", gap: "1.1rem" }}>
            <span>${price}</span>
          </div>
          <div>
            <button onClick={() => addToCart(filteredList)}>
              <AiOutlineShoppingCart size={20} />
              Add
            </button>
          </div>
        </FoodDetail>
        <ImageContainer>
          <img src={`../${imagePath}`} alt={name} />
        </ImageContainer>
      </FoodContainer>
    </Container>
  );
};

const FoodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  place-content: center;
  padding-top: 3rem;
  gap: 1.2rem;
`;
const FoodDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: flex-start;
  padding-top: 2.5rem;
  h1 {
    font-weight: 600;
    font-size: 44px;
  }
  p {
    font-weight: 400;
    opacity: 0.8;
    line-height: 1.9;
    font-size: small;
    max-width: 45ch;
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
  display: flex;
  align-items: center;
  justify-content: ;
  img {
    max-width: 100%;
  }
`;

export default ProductDetails;
