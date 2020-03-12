import React, { Component } from 'react'
import Heading from '../components/Heading'

export default class Project extends Component {
    
    render() {
        return (
             <div className="project-section" id="project">
             <Heading text="Projects" />
             <div className="category-title">
                 <ul>
                     <li>INTERIORS</li>
                     <li>ARCHITECTURE</li>
                     <li>RESIDENTIAL</li>
                     <li>COMMERCIAL</li>
                     <li>INSTITUTIONAL</li>
                 </ul>
             </div>

             <div className="project-image-container container">
                 <div className="row">
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project1.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project2.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project3.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project4.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project5.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project6.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project7.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project8.jpg" alt="project" className="project-image" />
                     </div>
                     <div className="col-12 col-md-4 project-image-card">
                         <img src="./images/project9.jpg" alt="project" className="project-image" />
                     </div>
                 </div>
             </div>
         </div>

        )
    }
}
