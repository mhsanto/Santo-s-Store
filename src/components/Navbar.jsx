import { styled } from "styled-components";
import logo from "../assets/Images/others/logo2.png";
import { Container } from "../GlobalStyle";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>

        <AuthenticationSection>
          <AiOutlineShoppingCart size={22} />
          <button className="login">Login</button>
          <button className="signup">Sign up</button>
        </AuthenticationSection>
      </Nav>
    </Container>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 3.75rem;
  align-items: center;
`;
const Logo = styled.div`
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
export default Navbar;
