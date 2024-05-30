import './Contact.css';
const Contact = ()=>{
    return (
        <>
            <h1>Contact Us</h1>
            <div className='contact'>
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
                <button className='btn7' type='submit'>Submit</button>
            </div>
        </>
    )
}
export default Contact;