import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { firebaseAuth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { schema } from "./schema";
const Form = ({ children, handleSubmit }) => {
  const onSubmit = async (data) => {
    const { email, password, fullName } = data;
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    navigate("/checkout");
  };

  return;
  <Form onSubmit={handleSubmit(onSubmit)}>{children}</Form>;
};

export default Form;
