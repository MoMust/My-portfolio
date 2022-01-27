import React from 'react'
import '../Css/About.css'
import Pic from '../Images/profil-bild.png';
// import ReturnHome from './ReturnHomeButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function About() {
    
    return (
        <div className='body-class-about'>
                                {/* PROFILE CARD */}
                 <div className='row row-custom d-flex justify-content-center mt-4 '>
                    <div className='profile-card col-lg-3 col-md-5 col-sm-8 col-8'>
                        <div className="profile-info-container">
                            <div className='profile-bg'>
                            <div className='profile-image'>
                                <img src={Pic}></img>
                            </div>
                            
                        </div>
                        <div className='profile-card-text'>
                            <h5>Mohammed <span className='title-color'>Mustafa</span></h5>
                        </div>
                        <div className='profile-card-text'>
                            <h5>Front-end / Web Developer</h5>
                        </div>
                        <div className='social-media-about'>
                            <a href="#"><FacebookIcon className='social-icons' variant="contained"  color="primary"/></a>
                            <a href="#"><LinkedInIcon   className='social-icons' variant="contained" color="primary"/></a>
                        </div>
                        <div className='profile-info'>
                            <div className='profile-info-details'>
                                <SchoolIcon /><p>KYH Stockholm</p>
                                
                            </div>
                            <div className='profile-info-details'>
                                < LocationOnIcon /><p>Stockholm, Sweden</p>
                            </div>
                            <div className='profile-info-details'>
                                <CalendarTodayIcon /><p>June 11 1993</p>
                            </div>
                        </div>
                        <div className='send-mail'>
                            <button type='button' className='btn-primary'>Email me</button>
                        </div>
                        </div>
                    </div>
                    {/* PROFILE CARD END*/}
                    <div className='about-info col-lg-5 col-md-5 col-sm-10 col-10'>
                        <div className='about-info-top'>   
                            <h2>About me</h2>
                            <p>I'm a student of front end development, looking<br/>
                    to learn it all.</p>
                        </div>
                        <div className='about-info-bottom'>   
                            <h2>What im doing</h2>
                            <div class="row about-info-bottom-row">
                                <div className='row col-lg-12'>
                                    <div class="box col-lg-6">1</div>
                                    <div class="box col-lg-6">2</div>
                                </div>
                                <div className='row col-lg-12'>
                                     <div class="box col-lg-6">3</div>  
                                    <div class="box col-lg-6">4</div>
                                </div>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            
           
        </div>
            
        
    )
}

export default About
