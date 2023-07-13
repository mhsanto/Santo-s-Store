import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { datas } from "./AboutUSData";
import { Container } from "../../GlobalStyle";
import { styled } from "styled-components";

const Services = () => {
  const [service, setService] = useState([0]);
  const { id } = useParams();
  const { img, content, title } = service[0];
  useEffect(() => {
    const FilterData = datas?.filter((data) => data.id == id);
    setService(FilterData);
  }, [id]);
  console.log(service);
  const navigate = useNavigate();
  return (
    <Container>
      <ServicesSection>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <div className="image">
          <img src={img} alt="" />
          <div className="flex">
            <p>
              Welcome to our restaurant! We take pride in delivering exceptional
              service to our valued customers. Our dedicated team of staff is
              here to ensure your dining experience is enjoyable and memorable.
              As part of our commitment to customer satisfaction, we have a good
              responder section designed to promptly address any queries,
              concerns, or feedback you may have
            </p>
            <h1>{title}</h1>

            <p>{content}</p>
          </div>
        </div>
      </ServicesSection>
    </Container>
  );
};
const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 1.6;
  button {
    padding: 1rem;
    background-color: var(--primary-color, red);
    border: none;
    color: white;
    font-size: 1rem;
    width: 9rem;
    margin: 1rem 0;
  }
  .image {
    img {
      max-width: 100%;
    }
  }
  .flex {
    display: grid;
    gap: 1rem;
    & > :nth-child(2) {
      font-size: 17px;
    }
    & > :nth-child(3) {
      font-size: 1rem;
      opacity: 0.8;
    }
  }
`;
export default Services;
