import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ErrorPage = () => {
  return (
    <Error>
      <h2>Sorry The Page You requested not found</h2>
      <Link to="/">
        <h1>GO HOME PAGE</h1>
      </Link>
    </Error>
  );
};
const Error = styled.section`
  display: grid;
  place-content: center;
  height: 50vh;
  text-align: center;
  gap: 1rem;
`;
export default ErrorPage;
