import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import { schema, schemaTwo } from "./schema";

const LoginForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaTwo),
  });

  return (
    <FormField onSubmit={handleSubmit(onSubmit)}>
      <h2>Login to your account</h2>
      {/* //email field */}
      <input type="email" placeholder="email" {...register("email")} />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      {/* //password password field */}
      <input type="password" placeholder="password" {...register("password")} />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      {/* //Confirm password field */}

      <Button type="submit">Login</Button>
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
    background-color: #cbbfbfa1;
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
export const Button = styled.button`
  padding: 1rem;
  color: white;
  background-color: var(--primary-color, red);
  border: none;
  border-radius: 8px;
  width: 100%;
`;
export default LoginForm;
