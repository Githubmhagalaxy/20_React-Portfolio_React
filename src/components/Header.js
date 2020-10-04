import React from 'react';
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="header-inner">
                <div className="brand-sec">
                    <h1 className="logo"><NavLink to={'/'}>Lernantino</NavLink></h1>
                </div>
                <div className="navigation">
                    <Navigation />
                </div>
            </div>
        </div>
    );
};

export default Header;