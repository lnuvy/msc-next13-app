import { createGlobalStyle, css, keyframes } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "NanumSquare", sans-serif;
  }
  
  html,
  body {
    box-sizing: border-box;

    overflow: hidden;
    overscroll-behavior-y: none;
    margin: 0;
  }

`;

export default GlobalStyles;

const fetchingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

/**
 * api fetching 동안 보여지게할 css
 */
export const cssFetchingAnimation = css<{ borderRadius?: string }>`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.grey200};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0"};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      #fafafa,
      rgba(255, 255, 255, 0)
    );
    transform: translateX(-100%);
    animation: ${fetchingAnimation} 2.4s linear 0.5s infinite;
    content: "";
  }
`;
