import { styled } from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const AboutUsSections = ({ data: { id, img, icon, title, content, more } }) => {
  const navigate = useNavigate();
  return (
    <DataSection key={id}>
      <div className="image-class">
        <img src={img} alt={title} />
      </div>

      <div className="icons">
        <div>
          <img src={icon} alt="icons" />
        </div>

        <div className="flex">
          <h4>{title}</h4>
          <p>{content.slice(0, 202)}...</p>
          <Button onClick={() => navigate(`/about-us/services/${id}`)}>
            {more}
            <AiOutlineArrowRight size={20} color="white" />
          </Button>
        </div>
      </div>
    </DataSection>
  );
};

const DataSection = styled.div`
  transition: 250px ease-out;
  cursor: ;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    gap: 1rem;
  }
  &:hover img {
    transform: scale(1.2) rotate(2deg);
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .icons {
    display: flex;
    padding: 1rem;
    gap: 0.5rem;
    align-items: start;
    overflow: hidden;
    img {
      width: 2rem;
    }
  }
  h4 {
    font-weight: 500;
    font-size: 1.1875rem;
  }
  p {
    font-size: 13px;
    opacity: 0.8;
  }
  .image-class {
    overflow: hidden;
    img {
      object-fit: cover;
      width: 100%;
      transition: 200ms linear;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  gap: 0.5rem;
  color: blue;
  font-size: 1rem;
  align-self: flex-start;
  align-items: center;
  text-align: center;
  & > * {
    background-color: green;
    border-radius: 50%;
  }
`;
export default AboutUsSections;
