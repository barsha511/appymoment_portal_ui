import React from "react";
import style from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={style.footer_container}>
            <div className={style.footer_contain}>
                <div className={style.services}>
                    <h5>Services</h5>
                    <ul>
                        <li>Dhanbad</li>
                        <li>Bangalore</li>
                        <li>Kolkata</li>
                        <li>Patna</li>
                    </ul>
                </div>
                <div className={style.footer_icons_container}>
                    <h5 className={style.tagh5_footer}>Follow us on</h5>
                    <div className={style.footer_icons}>
                        <BsInstagram className={style.icon_footer} />
                        <FaFacebook className={style.icon_footer} />
                        <FaTwitter className={style.icon_footer} />
                    </div>
                    <div className={style.address}>
                        <h5>Address</h5>
                        <p>Jashshdiasj<br />24654</p>
                    </div>
                </div>
                <div className={style.footer_contact}>
                    <h5 className={style.tagh5_footer2}>Get in touch</h5>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
