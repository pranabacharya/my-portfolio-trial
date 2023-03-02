import React from 'react';
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Keys from "./Keys";

const clearFields = () => {
    document.querySelectorAll(".user").forEach(item => {
        item.value = "";
        item.innerText = "";
    })
}
const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(Keys.serviceId, Keys.templateId, form.current, Keys.publicKey)
        .then((result) => {
            console.log(result.text);
            setDone(true);
            setTimeout(()=> {
                setDone(false);
                clearFields();
            },4000)
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="awesome">
                <span style={{color: darkMode ? "white": ""}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1"
                style={{background: "#abf1ff94"}}
                ></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'  required/>
                <input type="email" name="user_email" className='user' placeholder='Email' required/>
                <textarea name="message" className='user' placeholder='Message' required />
                <input type="submit" value="Send" className='button' />
                <div className="blur c-blur1"
                style={{background: "var(--purple)"}}></div>
                <span id="alert">{done && "Thanks for contacting me!!"}</span>
                
            </form>
        </div>
    </div>
  )
}

export default Contact;