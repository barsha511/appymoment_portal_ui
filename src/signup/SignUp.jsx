import React, { useState } from 'react';
import styles_signup from './Signup.module.css'; // Import the CSS module

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { Link } from 'react-router-dom';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        name: "",
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
            name: "",
            email: "",
            username: "",
            password: ""
        });
    };

    return (
        <div className={styles_signup.body_signup}>
            <div className={styles_signup.container_signup}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name-signup"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        value={inputs.name}
                        required
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username-signup"
                        name="username"
                        placeholder="Enter your Username"
                        onChange={handleChange}
                        value={inputs.username}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email-signup"
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={inputs.email}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password-signup"
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        value={inputs.password}
                        required
                    />
                    <button className={styles_signup.btn_signup}type="submit">Sign up</button>
                </form>
                <div className={styles_signup.lineWithText}>
                    <div className={styles_signup.line_signup}></div>
                    <span>OR</span>
                    <div className={styles_signup.line_signup}></div>
                </div>
                <div className={styles_signup.iconContainer}>
                    <FcGoogle className={styles_signup.icon} />
                    <FaFacebook className={styles_signup.icon} />
                </div>
                <p className={styles_signup.p_signup}>Already have an account? <Link  to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
