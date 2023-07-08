import { styled } from "styled-components";
import logo from "../assets/Images/others/logo2.png";
import { Container } from "../GlobalStyle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart);
  return (
    <Nav>
      <Container>
        <Header>
          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="Logo" />
          </Logo>

          <AuthenticationSection>
            <Cart>
              <AiOutlineShoppingCart
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                size={22}
              />
              <span style={{ fontWeight: 600, color: "var(--primary-color)" }}>
                {cartItem.length}
              </span>
            </Cart>
            <button className="login">Login</button>
            <button className="signup">Sign up</button>
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
  position: fixed;
  background-color: #fff;
  width: 100%;
  align-items: center;
  z-index: 55;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
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
  }

  .signup {
    background-color: var(--primary-color);
    padding: 0.5rem 1.4rem;
    border-radius: 50px;
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
`;

export default Navbar;
