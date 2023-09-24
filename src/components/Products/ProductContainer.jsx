import { useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "styled-components";
// eslint-disable-next-line react/prop-types
const ProductContainer = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { imagePath, name, details, price, _id } = product;
  const navigate = useNavigate();
  return (
    <FlexContainer onClick={() => navigate("/product/" + _id)}>
      <Card>
        <img src={imagePath} alt={name} />
        <p style={{ fontWeight: 500 }}>{name}</p>
        <p style={{ fontWeight: 400, fontSize: ".8rem" }}>
          {details.slice(0, 40)}...
        </p>
        <p style={{ fontWeight: 600 }}>${price}</p>
      </Card>
    </FlexContainer>
  );
};
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  cursor: pointer;
  border-radius: 7px;
  transition: 150ms ease-out;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
  &:hover img {
    transform: scale(1.1);
  }
  @media (max-width: 300px) {
    padding: 0 1rem;
  }
  & > * {
    padding: 0.4rem 0;
  }
  img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: 0.3s ease-in-out;
    aspect-ratio: 12 / 9;
    /* width: 190px; */
  }
`;

export default React.memo(ProductContainer);
