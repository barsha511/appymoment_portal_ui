import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './signup/SignUp.jsx';
import Login from './login/login';
import Navbar from './navbar/Navbar';
import Contact from './contact/Contact.jsx';
import Home from './Home/Home.jsx';
import Footer from './footer/Footer.jsx';
import ImageSlider from './slider/ImageSlider.jsx';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={ <Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
