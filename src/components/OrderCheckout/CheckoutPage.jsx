import { useEffect, useState } from "react";
import { Container } from "../../GlobalStyle";
import DeliveryDetails from "./DeliveryDetails";
import { styled } from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
  const location = useSelector((state) => state.location);
  const [name, setName] = useState(firebaseAuth?.currentUser?.displayName);
  const [email, setEmail] = useState(firebaseAuth?.currentUser?.email);
  const [userAddresses, setUserAddresses] = useState(location?.object);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/login");
    });
  });
  return (
    <Container>
      <Main>
        <DeliveryDetails
          name={name}
          email={email}
          userAddresses={userAddresses}
        />
      </Main>
    </Container>
  );
};
const Main = styled.main`
  background-color: #e8e6e6;
  padding: 1.5rem;
  margin: 60px auto;
  border-radius: 10px;
  max-width: 18rem;
`;
export default CheckoutPage;
