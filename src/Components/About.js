import React from 'react'
import '../Css/About.css'
import Pic from '../Images/profil-bild.png';
// import ReturnHome from './ReturnHomeButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function About() {
    
    return (
        <div className='body-class-about'>
            <div className='wrapper'>
                 <div className='row row-custom d-flex justify-content-center mt-4 '>
                <div className='profile-card col-lg-3 col-md-5 col-sm-8 col-8'>
                    <div className='profile-bg'>
                        <div className='profile-image'>
                            <img src={Pic}></img>
                        </div>
                        
                    </div>
                    <div className='profile-card-text'>
                        <h5>Mohammed Mustafa</h5>
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
                            < LocationOnIcon /><p>KYH Stockholm</p>
                        </div>
                        <div className='profile-info-details'>
                            <SchoolIcon /><p>KYH Stockholm</p>
                        </div>
                    </div>
                     
                </div>
               
                <div className='about-info col-lg-5 col-md-5 col-sm-10 col-10'>
                    <p>col.2</p>
                </div>
            </div>
            </div>
           
        </div>
            
        
    )
}

export default About
