import { createGlobalStyle, styled } from "styled-components";
// Supports weights 100-900
import "@fontsource-variable/montserrat";
export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:blue;
}
*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* outline: 1px solid; */
}
html{
scroll-padding-top:1.2rem;
scroll-behavior: smooth;
}
body{
    position:relative;
    font-family: 'Montserrat Variable', sans-serif;
    font-size: 16px;
    overflow-x: hidden;

}
button{
    cursor:pointer;
}
`;
export const Container = styled.div`
  position: relative;
  width: 80vw;
  z-index: 10;
  margin-inline: auto;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
