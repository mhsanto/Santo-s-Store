import { useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "styled-components";
// eslint-disable-next-line react/prop-types
const FoodContainer = ({ food }) => {
  // eslint-disable-next-line react/prop-types
  const { imagePath, name, details, price, _id } = food;
  const navigate = useNavigate();
  return (
    <FlexContainer onClick={() => navigate("/food/" + _id)}>
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
  text-align: center;
  padding: 1rem 0;
  @media (max-width: 300px) {
    padding: 0 1rem;
  }
  & > * {
    padding: 0.4rem 0;
  }
  img {
    max-width: 100%;
    width: 190px;
  }
`;

export default FoodContainer;
