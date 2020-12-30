import { createGlobalStyle } from "styled-components";

export const StyleBody = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #DCDFE1;
  }

  #font {
    width: 70%;
    margin: 0 auto;
    font-family: "Palatino", sans-serif;
    color: #272727;
  }
`;
