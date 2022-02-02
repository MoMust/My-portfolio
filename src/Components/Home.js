import React from 'react';
import '../Css/HomeStyle.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home() {
    return (
        <div className='body-class'>
            <div className="container-front row m-0 p-0">
                <div className='front-text'>
                    <h2>Hi, i'm Mohammed</h2>
                    <h3>Welcome to my portfolio</h3>
                    <p>I'm a student of front end development, looking<br/>
                    to learn it all.</p>
                </div>
                <div className='social-media'>
                   <a href="https://www.facebook.com/profile.php?id=627371126"><FacebookIcon className='social-icons' variant="contained"  color="primary"/></a>
                   <a href="https://www.linkedin.com/in/moe-mustafa-14918a220/"><LinkedInIcon   className='social-icons' variant="contained" color="primary"/></a>
                </div>
            </div>
           
        </div>
    )
}

export default Home;
