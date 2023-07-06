import BannerImage from "../../assets/Images/others/bannerbackground.png";
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
  justify-content: center;
  gap: 2.4rem;
  align-items: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 2.8rem;
    font-weight: 500;
  }
`;
const InputBox = styled.div`
  width: max-content;
  padding: 0 0 0 0.2rem;

  background-color: white;
  border-radius: 50px;

  input {
    padding: 0.6rem;
    border-radius: 50px;
    background-color: transparent;
    padding-left: 0.78rem;
    font-size: 1rem;
    border: none;
    width: 20rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: black;
      padding-left: 0.4rem;
      opacity: 0.6;
    }
  }
  .search {
    padding: 0.75rem 1.7rem;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: var(--primary-color);
  }
`;
export default Banner;
