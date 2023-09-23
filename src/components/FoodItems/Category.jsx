import React from "react";
import { styled } from "styled-components";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
     <Category>
        <p
          className={selectedCategory === "headphones" ? "selected" : ""}
          onClick={() => setSelectedCategory("headphones")}
        >
          Headphones
        </p>
        <p
          className={selectedCategory === "speakers" ? "selected" : ""}
          onClick={() => setSelectedCategory("speakers")}
        >
          Speakers
        </p>
        <p
          onClick={() => setSelectedCategory("earphones")}
          className={selectedCategory === "earphones" ? "selected" : ""}
        >
          Earphones
        </p>
      </Category>
    </>
  );
};
const Category = styled.div`
  text-transform: capitalize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 3rem;
  max-width: 20rem;
  margin-inline: auto;
  overflow: hidden;
  @media (max-width: 380px) {
    justify-content: center;
    gap: 1rem;
  }
  p {
    border-bottom: 3px solid transparent;
    font-weight: 500;
    position: relative;
    transition: 250ms ease-out;
    padding-bottom: 0.2rem;
    cursor: pointer;
  }
  .selected {
    color: var(--primary-color, red);
    border-bottom: 3px solid var(--primary-color, red);
  }
`;
export default Categories;
