import { styled } from "styled-components";

export const HaveAnAccount = ({ haveAccount, setHaveAccount }) => {
  return (
    <>
      {haveAccount ? (
        <ConditionalPara onClick={() => setHaveAccount(false)}>
          Already have an account
        </ConditionalPara>
      ) : (
        <ConditionalPara onClick={() => setHaveAccount(true)}>
          Create Account
        </ConditionalPara>
      )}
    </>
  );
};
const ConditionalPara = styled.p`
  text-align: center;
  margin: 0;
  align-self: center;
  cursor: pointer;
`;
