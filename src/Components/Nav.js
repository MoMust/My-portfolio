import '../Css/Fonts.css'
import React from 'react'
import logo from  '../Images/md-icon.png';
import {NavLink} from 'react-router-dom';
import  '../Css/NavStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    return (
        <html>
            <header>
         <div className='container '>
            <nav>
                <div className='nav-bar'>
                    <ul>
                        <NavLink exact to="/" className='nav-items' activeClassName='active-item'>Home</NavLink>
                        <NavLink to="/About" className='nav-items' activeClassName='active-item'>About</NavLink>
                        <NavLink to="/MyWork" className='nav-items' activeClassName='active-item'>My work</NavLink>
                        <NavLink to="/Experience" className='nav-items' activeClassName='active-item'>Experience</NavLink>
                        <NavLink to="/Contact" className='nav-items-right ms-auto' activeClassName='active-item'>Contact</NavLink>
                        
                    </ul>
                </div>
            </nav>
        </div>
     </header>
        </html>
     
    )
}

export default Nav
