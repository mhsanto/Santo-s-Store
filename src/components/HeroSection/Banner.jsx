// import BannerImage from "../../assets/images/others/banner.jpg";
import BannerImage from "../../../public/Banner.jpg";
import React from "react";
import { styled } from "styled-components";
const Banner = () => {
  return (
    <BannerSection>
      <ImageContainer>
        <img src={BannerImage} alt=" Banner Image" />
      </ImageContainer>
      <Text>
        {/* <h1>Best food waiting for your belly</h1> */}
       
      </Text>
    </BannerSection>
  );
};

const BannerSection = styled.section`
  position: relative;
  height:65vh;

`;
const ImageContainer = styled.div`
  img {
    position: absolute;
    width: 100%;
    height:65vh;

    /* width: calc(105vw + 4rem); */
    /* height: 65vh; */
    /* aspect-ratio: 9/16; */
    object-fit: cover;
  }
`;
const Text = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2.4rem;
  align-items: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: white;
    text-align: center;
    font-size: clamp(1.25rem, calc(0.81rem + 2.21vw), 2.8rem);
    font-weight: 500;
  }
`;

export default Banner;
