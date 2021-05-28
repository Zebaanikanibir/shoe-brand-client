import React, { useEffect, useState } from 'react';
import {
   Link
    
  } from "react-router-dom";
import { LightMode } from '../../LightMode';
  import Toggle from '../Toggle';
const Header = () => {

    useEffect(() => {
        fetch("https://assessment.api.vweb.app/login", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_id: "hello",
            access_key: "world",
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, []);










    const [theme, toggleTheme] = LightMode();
    return (
        <div className="dark-mode">
            <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
           
            <Link to="/megastore">MegaStore</Link><br />
            <Link to="/ministore">MiniStore</Link>
            
        </div>
    );
};

export default Header;