import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--white-two);
    color: #333;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
  }
  
  @font-face  {
    font-family: "SFUIText-Regular";
    src: local("SFUIText-Regular"), url("../fonts/sf-ui-text-2-cufonfonts/SFUIText-Regular.ttf");
    font-weight: normal;
  }

  :root {
    --white-two: #fff;
    --white: #eaeaea;
    --apple-green: #7ed321;
    --baby-purple: #e990f9;
  }
`;
