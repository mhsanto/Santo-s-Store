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

const Paragraph = styled.p`
  color: var(--primary-color);
  margin-top: 1rem;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
`;

export default Form;
