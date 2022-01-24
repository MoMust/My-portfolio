import React from 'react'
import { useState } from "react";
import '../Css/ContactForm.css';

function ContactForm() {
        const FORM_ENDPOINT = '';
   
        const [sendMessage, setSendMessage] = useState(false);
        const handleMessage = () =>{
            setTimeout(() => {
                setSendMessage(true)
            }, 100);
        };
    
    if(sendMessage){
         return (
        <>
        <h1>You have sent the message</h1>
        </>
        
    );
    }
   return(
    <form
    action={FORM_ENDPOINT}
    onSubmit={handleMessage}
    method="post"
    target="_blank"
    >
        <div className='form'>
            <input type="text" placeholder='Your name' name ="name" required></input>
        </div>
        <div className='form'>
            <input type="text" placeholder='Your email' name ="name" required></input>
        </div>
        <div className='form'>
            <textarea placeholder='Your message' name ="name" required></textarea>
        </div>
        <div >
            <button type="submit">Send a message</button>
        </div>
    </form>
);
};



export default ContactForm