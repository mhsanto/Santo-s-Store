import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { firebaseAuth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import HandleAuth from "./HandleAuth";
import { HaveAnAccount } from "./HaveAnAccount";
const LoginForm = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (email, password) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const onSubmit = (data) => {
    const { email, password, fullName } = data;
    console.log(data);
    // handleSignIn(email, password);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {haveAccount && (
        <>
          <input
            type="text"
            placeholder="Full Name"
            {...register("fullName")}
          />
          {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
        </>
      )}
      {/* //email field */}
      <input type="email" placeholder="email" {...register("email")} />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      {/* //password password field */}
      <input type="password" placeholder="password" {...register("password")} />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      {/* //Confirm password field */}
      {haveAccount && (
        <>
          <input
            type="password"
            placeholder="confirm password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword?.message}</p>
          )}
        </>
      )}
      <HandleAuth haveAccount={haveAccount} handleSignIn={handleSignIn} />
      <HaveAnAccount
        haveAccount={haveAccount}
        setHaveAccount={setHaveAccount}
      />
    </Form>
  );
};
const Form = styled.form`
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

export default LoginForm;
