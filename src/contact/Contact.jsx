import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module

const Contact = () => {
    return (
        <>
            <h1 className={styles.tagh1}>Contact Us</h1>
            <div className={styles.contact}>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        id='name'
                        name='name'
                        placeholder='Name'
                        required
                    />
                    <label htmlFor="email">E-mail</label>
                    <input type="email"
                        id='email'
                        name='email'
                        placeholder='E-mail'
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea name="msg" id="msg" cols="30" rows="10"/>
                </form>
                <button id={styles.btn_contact} type='submit'>Submit</button>
            </div>
        </>
    )
}
export default Contact;
