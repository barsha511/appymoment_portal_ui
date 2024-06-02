import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img className='imglogo'src="src/assets/puzzle.png" alt="Logo" />
                </Link>
                <ul>
                <li className="dropdown">
                        <span>Wedding</span>
                        <div className="dropdown-content">
                            <Link to="/wedding">Wedding</Link>
                            <Link to="/birthday">Birthday & Anniversary</Link>
                            <Link to="/housewarming">House Warming</Link>
                        </div>
                    </li>
                <li>
                        <Link to="/">child welcome</Link>
                    </li>
                    <li>
                        <Link to="/">Birthday & Anniversary</Link>
                    </li>
                    <li>
                        <Link to="/">Home warming</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                </ul>
                <div className='btn1-navbar'><button id='btn-navbar'>Book your event</button></div>

                <div className="navbar-icon">
                    <CgProfile />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
