import React, { useState } from 'react';
import './login.css'; // Ensure the path is correct
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='body'>
             <div className="login-container">
            
            <h1>Login</h1>
            <form>
            <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password" 
                    required
                />
                
                <button className='btn1' type="submit">Login</button>
            </form>
            <div className="line-with-text">
                <div className="line"></div>
                <span>OR</span>
                <div className="line"></div>
            </div>
            <div className="icon-container">
                <FcGoogle className="icon" />
                <FaFacebook className="icon" />
                
            </div>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
        </div>
       
    );
};

export default Login;
