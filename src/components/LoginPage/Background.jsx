import React from "react";
import BG from "../../assets/images/others/bannerbackground.png";
import { styled } from "styled-components";
const Background = () => {
  return (
    <Image>
      <img src={BG} alt="" />
    </Image>
  );
};
const Image = styled.div`
  object-fit: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  /* left: 0; */
  right: 100px;
  z-index: -1;
  img {
    object-fit: cover;
  }
`;
export default Background;
