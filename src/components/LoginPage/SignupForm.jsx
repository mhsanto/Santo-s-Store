import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { schema } from "./schema";
import { useNavigate } from "react-router-dom";
import { Button } from "./LoginForm";
const SignupForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormField onSubmit={handleSubmit(onSubmit)}>
      <h1>Create a new Account</h1>
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      {errors.fullName?.message && <p>{errors.fullName?.message}</p>}

      {/* //email field */}
      <input type="email" placeholder="email" {...register("email")} />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      {/* //password password field */}
      <input type="password" placeholder="password" {...register("password")} />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      {/* //Confirm password field */}

      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword?.message && (
        <p>{errors.confirmPassword?.message}</p>
      )}
      <Button type="submit">Signup</Button>
    </FormField>
  );
};
const FormField = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    background-color: #cbbfbfa1;

    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 0.875rem;
      text-transform: capitalize;
    }
  }
`;

export default SignupForm;
