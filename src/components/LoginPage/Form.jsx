import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { firebaseAuth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
const Form = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const navigate = useNavigate();
  const Signup = (email, password, fullName) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(({ user }) => {
        updateProfile(user, { displayName: fullName });
      })
      .catch((err) => console.error(err.message));
  };
  const Login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  firebaseAuth.currentUser;

  const onSubmit = (data) => {
    const { email, password, fullName } = data;

    if (!haveAccount) {
      Signup(email, password, fullName);
    } else {
      Login(email, password);
    }
  };
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        navigate("/food/checkout");
      }
    });
  }, []);
  return (
    <>
      {haveAccount ? (
        <LoginForm onSubmit={onSubmit} />
      ) : (
        <SignupForm onSubmit={onSubmit} />
      )}
      {haveAccount ? (
        <Paragraph onClick={() => setHaveAccount(false)}>
          Create an account
        </Paragraph>
      ) : (
        <Paragraph onClick={() => setHaveAccount(true)}>
          Already have an account
        </Paragraph>
      )}
    </>
  );
};
const FormField = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  p {
    font-size: 13px;
    max-width: fit-content;
    color: red;
    margin-top: -8px;
    padding: 0 0.5rem;
    font-weight: 500;
  }
  input {
    border-radius: 8px;
    width: 20rem;
    max-width: 100%;
    border: none;
    padding: 1rem;
    background-color: #fff;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 0.875rem;
      text-transform: capitalize;
    }
  }
`;

const Paragraph = styled.p`
  color: var(--primary-color);
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

export default Form;
