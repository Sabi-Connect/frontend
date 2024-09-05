import React from 'react';
import Footer from "../footer";
import Navbar from "../navbar/navIndex";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;