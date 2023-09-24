import { styled } from "styled-components";

const DeliveryForm = ({ inputValues, handleInputValues, handleSubmit }) => {
  return (
    <FormContainer>
      <h1>Edit Delivery Details</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={inputValues.location}
          onChange={handleInputValues}
          placeholder="Location"
          required
        />
        <input
          type="text"
          name="road"
          value={inputValues.road}
          onChange={handleInputValues}
          placeholder="Road no."
          required
        />
        <input
          type="text"
          name="floor"
          value={inputValues.floor}
          onChange={handleInputValues}
          placeholder="Flat suite or floor"
          required
        />
        <input
          type="text"
          name="business"
          value={inputValues.business}
          onChange={handleInputValues}
          placeholder="Business Name"
          required
        />
        <input
          type="text"
          name="instructor"
          value={inputValues.instructor}
          onChange={handleInputValues}
          placeholder="Add delivery instructor"
          required
        />
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
