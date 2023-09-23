import React from "react";
import BG from "../../../public/login.svg";
import { styled } from "styled-components";
const Background = () => {
  return (
    <Image>
      <img src={BG} alt="Login image" />
    </Image>
  );
};
const Image = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: azure;
  position: absolute;
  z-index: -1;
  img {
    position: absolute;
    right:0;
    max-width:100%;
    width: 700px;
    height: auto;
    object-fit: contain;
  }
`;
export default Background;
