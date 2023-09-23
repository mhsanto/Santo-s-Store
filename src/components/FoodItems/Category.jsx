import React from "react";
import { styled } from "styled-components";
import { ImHeadphones } from "react-icons/im";
import { BsFillEarFill, BsSpeakerFill } from "react-icons/bs";
const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <Category>
        <p
          className={selectedCategory === "headphones" ? "selected" : ""}
          onClick={() => setSelectedCategory("headphones")}
        >
          <ImHeadphones /> Headphones
        </p>
        <p
          className={selectedCategory === "speakers" ? "selected" : ""}
          onClick={() => setSelectedCategory("speakers")}
        >
          <BsSpeakerFill />
          Speakers
        </p>
        <p
          onClick={() => setSelectedCategory("earphones")}
          className={selectedCategory === "earphones" ? "selected" : ""}
        >
          <BsFillEarFill /> Earphones
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
  max-width: 30rem;
  margin-inline: auto;
  overflow: hidden;
  @media (max-width: 380px) {
    justify-content: center;
    gap: 1rem;
  }
  p {
    display: flex;
    align-items: center;
    gap:2px;
    font-size: 1.3rem;
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
