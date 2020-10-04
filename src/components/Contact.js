import React, {useState} from 'react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleMessageFocusOut = e => {
        console.log('message blur')
        if(e.target.value === '') {
            setError('Message field can not be empty!!');
        }
    }
    const handleMessageChange = e => {
        setError('');
    }
    const handleEmailFocusout = e => {
        console.log('email blur')
        const email = e.target.value;
        const reg = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
        if(!reg.test(email)) {
            setError('Email Address is not valid!!')
        }
    }
    const handleEmailChange = e => {
        setError('');
        setEmail(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <>
            <section className="contact-sec container">
                <div className="title">
                    <h2>Contact Me</h2>
                </div>
                <h2 className="error">{error}</h2>
                <form method='post' className="contact-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" id="name" placeholder='Name:'/>
                    <input type="email" name="email" id="email" placeholder='Email Address:' value={email} onChange={handleEmailChange} onBlur={handleEmailFocusout}/>
                    <textarea name="message" id="message" placeholder="Message:" onChange={handleMessageChange} onBlur={handleMessageFocusOut}></textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </section>
        </>
    );
};

export default Contact;