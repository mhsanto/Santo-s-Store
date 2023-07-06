import { styled } from "styled-components";
const FoodContainer = ({ food }) => {
  const { imagePath, name, details, price } = food;
  return (
    <FlexContainer>
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
  padding: 1rem;
  /* border: 3px solid; */
  cursor: pointer;
  transition: 150ms ease-out;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
const Card = styled.div`
  text-align: center;
  & > * {
    padding: 0.4rem 0;
  }
  img {
    max-width: 100%;
    width: 190px;
  }
`;

export default FoodContainer;
