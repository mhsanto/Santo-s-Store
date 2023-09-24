import { styled } from "styled-components";
import productsList from "../../datas";
import { Container } from "../../GlobalStyle";
import ProductContainer from "./ProductContainer";
import { useState } from "react";
import Categories from "./Category";
import CheckoutButton from "./CheckoutButton";

const Products
 = () => {
  const [selectedCategory, setSelectedCategory] = useState("headphones");
  const [products, setProducts] = useState(productsList);

  const filterProductByCategory = () => {
    if (selectedCategory) {
      return products.filter((food) => selectedCategory === food.category);
    } else {
      return products;
    }
  };

  return (
    <Container>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FoodStorage>
        {filterProductByCategory().map((prod) => (
          <ProductContainer key={prod._id} product={prod} />
        ))}
      </FoodStorage>
      <CheckoutButton />
    </Container>
  );
};
const FoodStorage = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(290px, 100%), 1fr));
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;

  @media (max-width: 1200px) {
    gap: 2rem;
  }
`;

export default Products
;
