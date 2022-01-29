import React from 'react'
import { useState, useCallback } from 'react';
import '../Css/MyWork.css';
import doc1 from '../Images/doc1.png'
import doc2 from '../Images/doc2.png'
function MyWork() {

    // function SizeUp(){
    //     Skapa set state för att minimera bild
    //     const img = document.getElementById('img1');
    //     img.style.transform = 'scale(1.5)';
    //     img.style.transition = 'transform 0.2s ease';
        
    // }

    const [makeBigImage1, setBigImage1] = useState(false)
    const [makeBigImage2, setBigImage2] = useState(false)

        const sizeImage1 = {
           height: makeBigImage1 ? '60vh' : '30vh',
           cursor: makeBigImage1 ? 'zoom-out' : 'zoom-in',
        }
        const sizeImage2 = {
           height: makeBigImage2 ? '0vh' : '30vh',
           cursor: makeBigImage2 ? 'zoom-out' : 'zoom-in',
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
                        <div className='row row-work-images mt-5'>
                            <div className='content-work-img col-lg-6' onClick={() => setBigImage1(prevBig1 => !prevBig1)}>
                                <img style={sizeImage1} id='img1' src={doc1} ></img>
                            </div>
                            <div className='content-work-img col-lg-6' onClick={() => setBigImage2(prevBig2 => !prevBig2)}>
                                <img style={sizeImage2} id='img1' src={doc2} ></img>
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
