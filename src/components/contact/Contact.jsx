import React, { useEffect, useRef, useState } from 'react'
import "./contact.scss"
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);



const Contact = () => {

    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const formClear = () => {
        setName("");
        setEmail("");
        setMessage("");
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        notify();

        emailjs.sendForm('service_1ebcim8', 'template_hoj1xqs', form.current, '_DeytRLoLq-0Oo5KU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        clearForm();

    }


    const notify = () => toast.success("Thanks, I'll reply ASAP :)");

    const clearForm = () => {
        document.getElementById("con-form").reset();
    }
    return (
        <div className="contact" id="contact" >
            <div className="contact-left">
                <lord-icon className="lord-img"
                    src="https://cdn.lordicon.com/flvisirw.json"
                    trigger="hover"
                    style={{ width: "500px", height: "500px" }}>
                </lord-icon>
            </div>
            <div className="contact-right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} ref={form} id="con-form" >
                    <input type="text" required placeholder='Name' name="from_name" onChange={(e) => setName(e.target.value)} />
                    <input type="email" required placeholder='Email'
                        name="user_email" onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder='Message' required
                        name="message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    <button type="submit" className='contact-button' value="send" >
                        Send
                    </button>
                    <ToastContainer toastStyle={{ color: "green" }} />

                </form>
            </div>
        </div>
    )
}

export default Contact