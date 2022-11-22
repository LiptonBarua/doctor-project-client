import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shereit/Footer/Footer';
import Navbar from '../../Pages/Shereit/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;