import React from 'react'
import '../Css/ContactForm.css';
import emailjs from 'emailjs-com'
function ContactForm() {
        function sendEmail(e){
        e.preventDefault()

        emailjs.sendForm('service_r4v20od', 'template_kxmssbu',e.target, 'user_z0ZrJ8xdlfZwDeLvMXTFT').then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    
   return(
       <div>
           <div className='container'>
           </div>
           <form  onSubmit={sendEmail}>
                <div className='form'>
                    <input type="text" placeholder='Your name' name ="name" required></input>
                </div>
                <div className='form'>
                    <input type="text" placeholder='Your email' name ="email" required></input>
                </div>
                <div className='form'>
                    <textarea placeholder='Your message' name ="message" required></textarea>
                </div>
                <div >
                    <input type="submit" value="Send"></input>
                </div>
            </form>
       </div>
    
);
};





export default ContactForm