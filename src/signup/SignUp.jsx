import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file for SignUp component

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputs({
            email: "",
            username: "",
            password: ""
        })
    };

    return (
        <div className='body'>
            <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
                value={inputs.name}
                required
            />
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your Username"
                onChange={handleChange}
                value={inputs.username}
                required
            />
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={inputs.email}
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={inputs.password}
                required
            />
            <button type="submit">Sign up</button>
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
        <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
        </div>
    );
};

export default SignUp;
