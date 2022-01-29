import React from 'react'
import { useState, useCallback } from 'react';
import '../Css/MyWork.css';
import doc1 from '../Images/doc1.png'
function MyWork() {

    // function SizeUp(){
    //     Skapa set state för att minimera bild
    //     const img = document.getElementById('img1');
    //     img.style.transform = 'scale(1.5)';
    //     img.style.transition = 'transform 0.2s ease';
        
    // }

    const [makeBig, setBig] = useState(false)

        const size = {
           height: makeBig ? '80vh' : '30vh',
           cursor: makeBig ? 'zoom-out' : 'zoom-in',
        }
    return (
        <div className='body-class-dark'>
            <div className='container container-mywork '>
                <div className='row row-custom-mywork'>
                    <div className='header-mywork mt-5 col-lg-12'>
                        <h1>These are my projects</h1>
                        <div>
                            <h3>Through my school time i've managed to work on a few things.</h3>
                        </div>
                    </div>
               
                </div>
                <div className='row row-custom-mywork'>
                    <div className='content-mywork col-lg-12'>
                        <h1>This is my work</h1>
                        <h3>Project DOC</h3>
                        <div className='row'>
                            <div className='content-work-img' onClick={() => setBig(prevBig => !prevBig)}>
                                <img style={size} id='img1' src={doc1} ></img>
                            </div>
                            <div>
                                <img src=""></img>
                            </div>
                        </div>
                    </div>
                
                </div>
                <div className='row row-custom-mywork'>
                    <div className='content-mywork col-lg-12'>
                        <h1>This is my work</h1>
                    </div>
                
                </div>
            </div>
            
           
        </div>
        
    )
}

export default MyWork
