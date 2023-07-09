import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const DeliveryDetails = () => {
  const foods = useSelector((state) => state.cart);

  const [priceList, setPriceList] = useState({
    subtotal: 0,
    tax: 0,
    deliveryFee: 2,
    total: 0,
  });
  const { subtotal, tax, deliveryFee, total } = priceList;
  useEffect(() => {
    const subTotal = foods.reduce(
      (total, food) => total + food.price * food.quantity,
      0
    );
    const subFixed = parseFloat(subTotal).toFixed(2);
    const taxes = parseFloat((subTotal / 5).toFixed(2));
    const totalValue = parseFloat((subTotal + taxes + deliveryFee).toFixed(2));

    setPriceList({
      ...priceList,
      tax: taxes,
      subtotal: subFixed,
      total: totalValue,
    });
  }, []);

  return (
    <>
      {foods.length > 0 && (
        <FoodsDetails>
          <div className="subtotal">
            <p>subtotal. {foods.length} item</p>
            <p>tax</p>
            <p>delivery fee</p>
            <p style={{ fontWeight: 600 }}>Total</p>
          </div>
          <div className="prices subtotal">
            <p>${subtotal}</p>
            <p>${tax}</p>
            <p>${deliveryFee}</p>
            <p style={{ fontWeight: 600 }}>${total}</p>
          </div>
        </FoodsDetails>
      )}
    </>
  );
};
const FoodsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  .subtotal {
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
export default DeliveryDetails;
