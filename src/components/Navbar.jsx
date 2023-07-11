import { styled } from "styled-components";
import logo from "../assets/Images/others/logo2.png";
import { Container } from "../GlobalStyle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase";

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart);

  const [items, setItems] = useState(null);
  useEffect(() => {
    const total = cartItem.reduce((total, item) => total + item.quantity, 0);
    setItems(total);
  }, [cartItem]);
  const logOut = async () => {
    try {
      await signOut(firebaseAuth);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      !user ? setIsUser(false) : setIsUser(true);
    });
  }, []);
  console.log(firebaseAuth.currentUser);
  return (
    <Nav>
      <Container>
        <Header>
          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </Logo>

          <AuthenticationSection>
            <Cart
              disabled={cartItem.length === 0}
              onClick={() => navigate("/food/delivery")}
            >
              <AiOutlineShoppingCart style={{ cursor: "pointer" }} size={22} />
              <span style={{ fontWeight: 600, color: "var(--primary-color)" }}>
                {items > 0 && items}
              </span>
            </Cart>

            {!isUser ? (
              <button className="signup" onClick={() => navigate("/login")}>
                {" "}
                Sign up
              </button>
            ) : (
              <button
                className="logout"
                onClick={() => {
                  logOut();
                  setIsUser(false);
                }}
              >
                Logout
              </button>
            )}
          </AuthenticationSection>
        </Header>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  position: sticky;
  background-color: #fff;
  width: 100%;
  align-items: center;
  z-index: 55;
  top: 0;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  img {
    width: 7rem;
  }
`;
const AuthenticationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  button {
    font-size: 0.9rem;
    font-weight: 500;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1.4rem;
    border-radius: 50px;
    &:hover {
      opacity: 0.8;
    }
  }

  .signup {
    background-color: var(--primary-color);
    color: white;
  }
  .logout {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
`;
const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
`;

export default Navbar;
