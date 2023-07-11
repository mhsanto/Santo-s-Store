import * as yup from "yup";

export const schema = yup.object().shape({
  fullName: yup.string().required("Please Enter your name"),
  email: yup.string().email().required("Please enter a valid email address"),
  password: yup.string().min(4).max(15).required("You must enter a password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password didn't match")
    .required("Please confirm your password"),
});
