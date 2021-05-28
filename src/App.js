import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Megastore from './Components/Megastore/Megastore';
import styled, {ThemeProvider} from 'styled-components';
import { LightMode } from './LightMode';
import { GlobalStyle, lightTheme, darkTheme } from './GlobalStyle';
const Container = styled.div`

`


function App() {
  const [theme, toggleTheme] = LightMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;
  
  return (
    
      <ThemeProvider theme={themeMode}>
        <Container className="App">
        <GlobalStyle></GlobalStyle>
      <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/megastore">
          <Megastore />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
      </Container>
      

      </ThemeProvider>



  );
}

export default App;
