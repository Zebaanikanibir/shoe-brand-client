import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {

    background: ${({theme}) =>theme.body};
    color: ${({theme}) =>theme.text};
}
`;

export const darkTheme ={

    body:"#292929",
    text:'#fff'
};
export const lightTheme ={

    body:"#fff",
    text:'#000'
};