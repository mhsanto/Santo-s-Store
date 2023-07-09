import React from "react";
import { styled } from "styled-components";

const DeliveryForm = () => {
  return (
    <FormContainer>
      <h1>Edit Delivery Details</h1>
      <Form>
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Road no." />
        <input type="text" placeholder="Flat suite or floor" />
        <input type="text" placeholder="Business Name" />
        <input type="text" placeholder="Add delivery instructor" />
        <button type="submit">Save and Continue</button>
      </Form>
    </FormContainer>
  );
};
const FormContainer = styled.div`
  h1 {
    border-bottom: 1px solid;
    padding-bottom: 1rem;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1.8rem;
  gap: 0.9rem;
  input {
    width: 40vw;
    padding: 1rem;
    background-color: #cccccc75;
    border: none;
    min-width: 100%;
    &:focus {
      outline: none;
      font-size: 1rem;
    }
  }
  button {
    padding: 1rem 0;
    border: none;
    background-color: var(--primary-color);
    color: white;
    font-size: 1rem;
    border-radius: 5px;
  }
`;
export default DeliveryForm;
