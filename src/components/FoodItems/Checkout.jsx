import React, { useEffect } from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../../firebase";
const CheckoutButton = () => {
  const handleCheckout = () => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      currentUser ? navigate("/food/Delivery") : navigate("/login");
    });
  };

  const cartItem = useSelector((state) => state?.cart);
  const navigate = useNavigate();
  return (
    <OrderCheckOut>
      <button
        onClick={handleCheckout}
        cart={cartItem}
        disabled={cartItem.length <= 0}
        className={cartItem.length > 0 ? "primary" : "disabled"}
      >
        Check out your food
      </button>
    </OrderCheckOut>
  );
};
const OrderCheckOut = styled.div`
  text-align: center;
  button {
    text-transform: capitalize;
    border: none;
    padding: 0.8rem 2.8rem;
    color: white;
    font-size: 1rem;
    border-radius: 4px;
  }
  .primary {
    background-color: var(--primary-color);
  }
  .disabled {
    background-color: #c6c6c6;
  }
`;

export default CheckoutButton;
