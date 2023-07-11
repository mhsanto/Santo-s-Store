import React from "react";
import { styled } from "styled-components";

const HandleAuth = ({ haveAccount, handleSignIn }) => {
  return (
    <>
      {haveAccount ? (
        <Button type="submit">Create Account</Button>
      ) : (
        <Button type="submit" onClick={handleSignIn}>
          Sign in
        </Button>
      )}
    </>
  );
};

const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: var(--primary-color, red);
  border: none;
  border-radius: 8px;
  width: 100%;
`;
export default HandleAuth;
