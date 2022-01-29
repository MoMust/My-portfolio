import { findByLabelText } from '@testing-library/react';
import React from 'react'
import { useState, useCallback } from 'react';
import '../Css/MyWork.css';
import doc1 from '../Images/doc1.png'
import doc2 from '../Images/doc2.png'
import lakarProject from '../Images/lakarDatabas.png';
import sportSkor from '../Images/sportSkor.png';
function MyWork() {

    // function SizeUp(){
    //     Skapa set state för att minimera bild
    //     const img = document.getElementById('img1');
    //     img.style.transform = 'scale(1.5)';
    //     img.style.transition = 'transform 0.2s ease';
        
    // }

    const [makeBigImage, setBigImage1] = useState(false)
    const [makeBigImage2, setBigImage2] = useState(false)
    
    
        // Part 1
        const part1SizeImage1 = {
           height: makeBigImage ? '46vh' : '30vh',
           cursor: makeBigImage ? 'zoom-out' : 'zoom-in',
        //    marginRight: makeBigImage ? '50px' : '0px,'
        }
        const part1SizeImage2 = {
           height: makeBigImage ? '46vh' : '30vh',
           cursor: makeBigImage ? 'zoom-out' : 'zoom-in',
        //    marginLeft: makeBigImage ? '100px' : '0px,'
        }
        const makeCursor = {
           cursor: makeBigImage ? 'zoom-out' : 'zoom-in',
        }

        // Part2
        const part2SizeImage1 = {
           height: makeBigImage2 ? '46vh' : '30vh',
           cursor: makeBigImage2 ? 'zoom-out' : 'zoom-in',
        //    marginRight: makeBigImage ? '50px' : '0px,'
        }
        const part2SizeImage2 = {
           height: makeBigImage2 ? '46vh' : '30vh',
           cursor: makeBigImage2 ? 'zoom-out' : 'zoom-in',
        //    marginLeft: makeBigImage ? '100px' : '0px,'
        }
        const makeCursor2 = {
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
                {/* Part 1 */}
                <div className='row row-custom-mywork'>
                    <div className='content-mywork col-lg-12'>
                        <h1>This is my work</h1>
                        <h3>Project DOC</h3>
                        <div style={makeCursor2} className='row row-work-images mt-5'  onClick={() => setBigImage1(bigImage => !bigImage)}>
                            <div className='content-work-img col-lg-6'>
                                <img style={part1SizeImage1} id='img1' src={doc1} ></img>
                            </div>
                            <div className='content-work-img col-lg-6'>
                                <img style={part1SizeImage2} id='img1' src={doc2} ></img>
                            </div>
                        </div>
                    </div>
                
                </div>
                {/* Part 2 */}
                <div className='row row-custom-mywork'>
                    <div className='content-mywork col-lg-12'>
                        <h1>This is my work</h1>
                        <h3>Project DOC</h3>
                        <div style={makeCursor} className='row row-work-images mt-5'  onClick={() => setBigImage2(bigImage => !bigImage)}>
                            <div className='content-work-img col-lg-6'>
                                <img style={part2SizeImage1} id='img1' src={lakarProject} ></img>
                            </div>
                            <div className='content-work-img col-lg-6'>
                                <img style={part2SizeImage2} id='img1' src={sportSkor} ></img>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
            
           
        </div>
        
    )
}

export default MyWork
