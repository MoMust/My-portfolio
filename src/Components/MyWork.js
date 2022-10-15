import React from 'react'
import { useState} from 'react';
import '../Css/MyWork.css';
import doc1 from '../Images/doc1.png'
import doc2 from '../Images/doc2.png'
import lakarProject from '../Images/lakarDatabas.png';
import sportSkor from '../Images/sportSkor.png';
import SearchBar from './Repo';
import Projects from './Projects';

function MyWork() {

    const [imageZoom, setImageZoom1] = useState(false)
    const [imageZoom2, setImageZoom2] = useState(false)
        // Zoom in and out on images 
        // Part 1 
        const part1SizeImage1 = {
           height: imageZoom ? '43vh' : '30vh',
           cursor: imageZoom ? 'zoom-out' : 'zoom-in',
        //    marginRight: imageZoom ? '50px' : '0px,'
        }
        
        // Part2
        const part2SizeImage1 = {
          height: imageZoom2 ? '43vh' : '30vh',
          cursor: imageZoom2 ? 'zoom-out' : 'zoom-in',
          //    marginRight: imageZoom ? '50px' : '0px,'
        }
        const part2SizeImage2 = {
          height: imageZoom2 ? '43vh' : '30vh',
          cursor: imageZoom2 ? 'zoom-out' : 'zoom-in',
          //    marginLeft: imageZoom ? '100px' : '0px,'
        }
        
        const makeCursor = {
           cursor: imageZoom ? 'zoom-out' : 'zoom-in',
        }

    return (
      <div className="body-class-dark">
        <div className="container container-mywork mt-0 pt-5">
          <div className="row row-custom-mywork">
            <div className="header-mywork mt-5 col-lg-12">
              <h1>These are my projects</h1>
              <div>
                <h3>
                  Through my school time i've managed to work on a few things.
                </h3>
              </div>
            </div>
          </div>
          {/* Part 1 */}
          <div className="row row-custom-mywork">
            <div className="content-mywork col-lg-12">
              <div className="project-names">
                <h3>Project DOC</h3>
              </div>

              <div
                style={makeCursor}
                className="row row-work-images mt-5"
                onClick={() => setImageZoom1((imageZoom) => !imageZoom)}
              >
                <div className="content-work-img col-lg-6">
                  <img style={part1SizeImage1} id="img1" src={doc1}></img>
                </div>
                <div className="content-work-img col-lg-6">
                  <img style={part1SizeImage1} id="img1" src={doc2}></img>
                </div>
              </div>
            </div>
          </div>
          {/* Part 2 */}
          <div className="row row-custom-mywork">
            <div className="content-mywork col-lg-12">
              <div className="row project-names">
                <h3 className="col-lg-6">The docs cloud</h3>
                <h3 className="col-lg-6">Sport Fashion</h3>
              </div>

              <div
                style={makeCursor}
                className="row row-work-images mt-5"
                onClick={() => setImageZoom2((bigImage) => !bigImage)}
              >
                <div className="content-work-img col-lg-6">
                  <img
                    style={part2SizeImage1}
                    id="img1"
                    src={lakarProject}
                  ></img>
                </div>
                <div className="content-work-img col-lg-6">
                  <img style={part2SizeImage2} id="img1" src={sportSkor}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="repo">
            <h1>Search in my repository</h1>
            <SearchBar />
          </div>
        </div>
      </div>
    );
}

export default MyWork
