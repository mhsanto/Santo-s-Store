import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Labels = () => {
  return (
    <LabelContainer>
      <div className="flex">
        <Link to="/footer/terms">Privacy Policy</Link>
        <Link to="/footer/condition">Terms of Use</Link>
        <Link to="/footer/condition">Pricing</Link>
      </div>
    </LabelContainer>
  );
};
const LabelContainer = styled.div`
  align-self: end;
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

export default Labels;
