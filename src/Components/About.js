import React from 'react'
import '../Css/About.css'
import {Navigate, useNavigate} from 'react-router-dom';

function About() {
    let Navigate = useNavigate();
    return (
        <div>
            <h1>This is about</h1>
            <p>Go to home page</p>
            <button onClick={() =>{
                Navigate('/');
            }}>Button</button>
        </div>
        
    )
}

export default About
