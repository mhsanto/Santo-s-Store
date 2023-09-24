import { styled } from "styled-components";
import LogoPic from "../../public/logo-no-background.svg";
import { Container } from "../GlobalStyle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { BiSearchAlt } from "react-icons/bi";
import { PiSignOutBold } from "react-icons/pi";
import { TbZoomCancel } from "react-icons/tb";
const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart);
  const [show, setShow] = useState(false);
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

  return (
    <Nav>
      <Container>
        <Header>
          <Logo onClick={() => navigate("/")}>
            <img src={LogoPic} alt="Logo" />
          </Logo>

          <InputBox className="inputBox">
            {!show ? (
              <BiSearchAlt
                size={30}
                cursor="pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <>
                <input type="text" placeholder="Search food items" />{" "}
                <BiSearchAlt size={30} cursor="pointer" />
                <TbZoomCancel
                  size={20}
                  cursor="pointer"
                  onClick={() => setShow(!show)}
                />
              </>
            )}
          </InputBox>

          <AuthenticationSection>
            <Cart
              disabled={cartItem.length === 0}
              onClick={() => navigate("/product/delivery")}
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
                <PiSignOutBold/>
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
  border-bottom: 2px solid rgba(252, 240, 1, 0.556);
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
  padding: .3rem 0;
`;
const Logo = styled.div`
  cursor: pointer;
  img {
    width: 7rem;
    @media (max-width: 300px) {
      width: 5rem;
    }
  }
`;
const AuthenticationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  button {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: transparent;
    border: none;
    transition: background-color .3s;
    cursor: pointer;
    border-radius: 50px;
    &:hover {
      opacity: 0.8;
      background-color: var(--primary-color);
      color: white;
    }
  }

  .signup {
    background-color: var(--primary-color);
    padding: 0.5rem 1.4rem;
    color: white;
    @media (max-width: 300px) {
      font-size: 0.84rem;
      padding: 3px 0.5rem;
    }
  }
  .logout {
    border: 1px solid var(--primary-color);
    padding: 0.5rem 1.4rem;
    color: var(--primary-color);
    @media (max-width: 300px) {
      padding: 0;
      border: none;
      border-bottom: 1px solid;
      border-radius: 0;
    }
  }
`;
const Cart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  text-align: center;
`;
const InputBox = styled.div`
  padding: 0 0 0 0.2rem;
  display: flex;
  align-items: center;
  /* background-color: steelblue; */
  /* color: white; */
  border-radius: 50px;
  & > * {
    flex-shrink: 1;
  }
  @media (max-width: 340px) {
    flex-wrap: wrap;
    gap: 0.2rem;
    border-radius: 0px;
    /* background-color: transparent; */
  }
  input {
    padding: 0.6rem;
    border-radius: 50px;
    background-color: rgba(21, 15, 15, 0.089);
    padding-left: 1rem;
    font-size: 1rem;
    border: none;
    width: clamp(13.75rem, calc(11.96rem + 8.93vw), 20rem);
    @media (max-width: 340px) {
      /* background-color: white; */
      width: 100%;
    }
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: black;
      opacity: 0.6;
    }
  }
  .search {
    padding: 0.75rem 1.7rem;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: var(--primary-color);
    @media (max-width: 480px) {
      padding: 0.75rem 1rem;
    }
    @media (max-width: 340px) {
      width: 100%;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
export default Navbar;
