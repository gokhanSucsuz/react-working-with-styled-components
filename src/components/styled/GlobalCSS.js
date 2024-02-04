import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => {
      return theme.colors.textColor;
    }};
    background-color: ${({ theme }) => {
      console.log("Global Style:::");
      console.log(theme);
      return theme.colors.third;
    }}
}

.mt-50{
    margin-top: 50px;
}.mb-50{
    margin-bottom: 50px;
}.mr-50{
    margin-right: 50px;
}.ml-50{
    margin-left: 50px;
}
`;
