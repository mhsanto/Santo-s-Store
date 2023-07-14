import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Labels = () => {
  return (
    <LabelContainer>
      <FlexContainer>
        <UnorderList>
          <Link>About Online Food</Link>
          <Link>Read our blog</Link>
          <Link>Sign up to deliver</Link>
          <Link>Add up to deliver</Link>
          <Link>Add your restaurant</Link>
        </UnorderList>
        <UnorderList>
          <Link>Get help</Link>
          <Link>Read FAQs</Link>
          <Link>View all cities</Link>
          <Link>Add up to deliver</Link>
          <Link>Restaurant Near me</Link>
        </UnorderList>
      </FlexContainer>
      <div className="flex">
        <Link to="/footer/terms">Privacy Policy</Link>
        <Link to="/footer/condition">Terms of Use</Link>
        <Link to="/footer/condition">Pricing</Link>
      </div>
    </LabelContainer>
  );
};
const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  @media (max-width: 680px) {
    width: 100%;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.772);
  }
  .flex {
    display: flex;
    padding-top: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    @media (max-width: 300px) {
      justify-content: center;
    }
  }
`;
const UnorderList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const FlexContainer = styled.div`
  display: flex;
  column-gap: 10rem;
  justify-content: space-between;
  @media (max-width: 1000px) {
    gap: 3rem;
  }
  @media (max-width: 580px) {
    gap: 1rem;
  }
`;
export default Labels;
