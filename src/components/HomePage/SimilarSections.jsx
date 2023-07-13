import { styled } from "styled-components";
import AboutUsSections from "./AboutUsSections";
import { datas } from "./AboutUSData";

const SimilarSections = () => {
  return (
    <Section>
      {datas.map((data) => (
        <AboutUsSections key={data.id} data={data} />
      ))}
    </Section>
  );
};

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 1.3rem;
`;
export default SimilarSections;
