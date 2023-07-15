import BannerImage from "../../assets/images/others/bannerbackground.png";
import { styled } from "styled-components";
const Banner = () => {
  return (
    <BannerSection>
      <ImageContainer>
        <img src={BannerImage} alt=" Banner Image" />
      </ImageContainer>
      <Text>
        <h1>Best food waiting for your belly</h1>
        <InputBox className="inputBox">
          <input type="text" placeholder="Search food items" />
          <button className="search">Search</button>
        </InputBox>
      </Text>
    </BannerSection>
  );
};

const BannerSection = styled.section`
  position: relative;
  height: 65vh;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  img {
    position: absolute;
    left: -5vw;
    width: calc(105vw + 4rem);
    height: 65vh;
    aspect-ratio: 16/9;
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
    text-align: center;
    font-size: clamp(1.25rem, calc(0.81rem + 2.21vw), 2.8rem);
    font-weight: 500;
  }
`;
const InputBox = styled.div`
  padding: 0 0 0 0.2rem;
  display: flex;
  background-color: white;
  border-radius: 50px;
  & > * {
    flex-shrink: 1;
  }
  @media (max-width: 340px) {
    flex-wrap: wrap;
    gap: 0.2rem;
    border-radius: 0px;
    background-color: transparent;
  }
  input {
    padding: 0.6rem;
    border-radius: 50px;
    background-color: transparent;
    padding-left: 1rem;
    font-size: 1rem;
    border: none;
    width: clamp(13.75rem, calc(11.96rem + 8.93vw), 20rem);
    @media (max-width: 340px) {
      background-color: white;
      width: 100%;
    }
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: black;
      opacity: 0.6;
    }
  }
  .search {
    padding: 0.75rem 1.7rem;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: var(--primary-color);
    @media (max-width: 480px) {
      padding: 0.75rem 1rem;
    }
    @media (max-width: 340px) {
      width: 100%;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
export default Banner;
