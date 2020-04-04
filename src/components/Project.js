import React from 'react'
import Heading from '../components/Heading'
import { HashLink as Link } from 'react-router-hash-link';

import { withProjectConsumer } from "../context";



function Project({ context }) {
    const { handleCategoryChange, selectedProjectList, selectedCategory } = context;
    let projectList = selectedProjectList ? (selectedProjectList.map(item =>
        (
            <div className="col-12 col-md-4 project-image-card">
                <Link to={`/property/${item.id}`}>
                    <img src={item.projectSectionImage} alt="project" className="project-image" />
                </Link>
            </div>
        )
    )) : [];
    console.log(projectList);

    return (
        <div className="project-section" id="project">
            <Heading text="Projects" />
            <div className="category-title">
                <ul>
                    <li style={{ color: selectedCategory === 'interior'? '#ff4e00': 'black'}} onClick={() => handleCategoryChange("interior")}>INTERIORS</li>
                    <li style={{ color: selectedCategory === 'architecture'? '#ff4e00': 'black'}} onClick={() => handleCategoryChange("architecture")}>ARCHITECTURE</li>
                    <li style={{ color: selectedCategory === 'residential'? '#ff4e00': 'black'}} onClick={() => handleCategoryChange("residential")}>RESIDENTIAL</li>
                    <li style={{ color: selectedCategory === 'commercial'? '#ff4e00': 'black'}} onClick={() => handleCategoryChange("commercial")}>COMMERCIAL</li>
                    <li style={{ color: selectedCategory === 'institutional'? '#ff4e00': 'black'}} onClick={() => handleCategoryChange("institutional")}>INSTITUTIONAL</li>
                </ul>
            </div>

            <div className="project-image-container container">
                <div className="row">
                    {projectList}
                </div>
            </div>
        </div>
    )
}

export default withProjectConsumer(Project);
