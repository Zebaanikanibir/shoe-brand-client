import React from 'react';
import Header from '../Header/Header';
import Megastore from '../Megastore/Megastore'
import './Home.css';
const Home = () => {
    return (
        <div className="dark-mode">
            <Megastore></Megastore>
        </div>
    );
};

export default Home;