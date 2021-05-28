import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle,darkTheme,lightTheme } from '../GlobalStyle';
import image from '../images/download (2).png';
const Toggle = ({theme ,toggleTheme}) => {
    const themeMode = theme === "dark" ? darkTheme : lightTheme;
    console.log(theme)
    return (
       <ThemeProvider theme={themeMode}>
           <GlobalStyle></GlobalStyle>
            <div  onClick={()=>toggleTheme(theme)}>
            <img style={{width: '40px'}} src={image} alt="" />
        </div>
       </ThemeProvider>
    );
};

export default Toggle;