import React from "react";
import { styled } from "styled-components";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Category>
        <p
          className={selectedCategory === "dinner" ? "selected" : ""}
          onClick={() => setSelectedCategory("dinner")}
        >
          Dinner
        </p>
        <p
          className={selectedCategory === "lunch" ? "selected" : ""}
          onClick={() => setSelectedCategory("lunch")}
        >
          Lunch
        </p>
        <p
          onClick={() => setSelectedCategory("breakfast")}
          className={selectedCategory === "breakfast" ? "selected" : ""}
        >
          BreakFast
        </p>
      </Category>
    </>
  );
};
const Category = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-top: 3rem;
  p {
    cursor: pointer;
    position: relative;
    transition: 250ms ease-out;
    font-weight: 500;
    padding-bottom: 0.2rem;
    border-bottom: 3px solid transparent;
  }
  .selected {
    border-bottom: 3px solid var(--primary-color, red);
  }
`;
export default Categories;
