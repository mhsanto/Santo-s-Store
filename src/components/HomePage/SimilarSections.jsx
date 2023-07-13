import ChefImage from "../../assets/images/others/chef.png";
import redshirt from "../../assets/images/others/redshirt.png";
import DeliveryPic from "../../assets/images/others/delivery.png";
import ICON1 from "../../assets/images/icons/icon1.png";
import ICON2 from "../../assets/images/icons/icon2.png";
import ICON3 from "../../assets/images/icons/icon3.png";

import { styled } from "styled-components";

const datas = [
  {
    id: 1,
    img: redshirt,
    icon: ICON1,
    title: "Fast Delivery",
    content:
      "Keep your systems in sync with automated web hooks based notifications each time link is paid and how er dream about our future",
    more: "See more",
  },
  {
    id: 2,
    img: ChefImage,
    icon: ICON2,
    title: "A Good Auto Responder",
    content:
      "K Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo nostrum, enim odio ipsum recusandae commodi pariatur labore error voluptate minus sed inventore  hooks based notifications each time link is paid and how er dream about our future",
    more: "See more",
  },
  {
    id: 3,
    img: DeliveryPic,
    icon: ICON3,
    title: "Home Delivery",
    content:
      "Lorem ipsum dolor sit amet. automated web hooks based notifications each time link is paid and how er dream about our future",
    more: "See more",
  },
];
const SimilarSections = () => {
  return (
    <Section>
      {datas.map((data) => (
        <DataSection key={data.id}>
          <div className="image-class">
            <img src={data.img} alt={data.title} />
          </div>

          <div className="icons">
            <div>
              <img src={data.icon} alt="icons" />
            </div>

            <div className="flex">
              <h4>{data.title}</h4>
              <p>{data.content}</p>
              <span>{data.more}</span>
            </div>
          </div>
        </DataSection>
      ))}
    </Section>
  );
};
const DataSection = styled.div`
  width: 100%;
  transition: 250px ease-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    gap: 1rem;
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
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 1.3rem;
`;
export default SimilarSections;
