import BannerImage from "../../../public/Banner.jpg";
import BannerImage2 from "../../../public/buyFromHome.jpg";
import BannerImage3 from "../../../public/Banner3.svg";
import React from "react";
import { Carousel } from "react-carousel-minimal";

import { styled } from "styled-components";
const data = [
  {
    image: BannerImage,
  },
  {
    image:
    BannerImage2
  },
  {
    image:
    BannerImage3
  },
  
];

const Banner = () => {
  return (
    <BannerSection>
      <Carousel
        data={data}
        time={3000}
        width="100%"
        height="65vh"
        slideNumber={true}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
      />
  
    </BannerSection>
  );
};

const BannerSection = styled.section`
  position: relative;
  height: 65vh;
 
`;

export default Banner;
