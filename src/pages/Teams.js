import React from 'react'

export default function Teams() {
    return (
        <>
            <div className="team-banner defaultTeamBanner" id="team">
                <h1>The Team</h1>
            </div>

            <div className="container team-body">
                <div className="row team-card">
                    <div className="col-md-4 col-sm-12 picture">
                        <img src="./images/teams/1.jpg" alt="ashish_img" className="team-picture"/>
                    </div>
                    <div className="col-md-8 col-sm-12 team-content">
                        <h1>ASHISH SAXENA</h1>
                        <h3>Founder</h3>
                        <p>Graduated as an architect from School of Planning and Architecture-New Delhi in 2005, 
                            Ashish has vast industry experience of over a decade. He has worked with reputed designers and developers in Delhi NCR 
                            like SAKA Studio, The Uppals Group, MGF Developments Pvt Ltd. and DFI. He holds advance PG diploma in Renewable Energy-TERI 
                            University and currently pursuing PhD in architecture from School of Planning and Architecture, Bhopal. He believes in sustainability in 
                            all forms from building to behavior. His research area lies under “ Role of Subconscious Mind from Proposed to Perceiving Architecture”. 
                            He has been associated with academics in various roles along with as senior visiting faculty-Interior Design department at JD Institute of Fashion Technology, 
                            Hauz Khas, New Delhi. His hobbies are painting, photography and travelling</p>
                    </div>
                </div>
                <div className="row team-card">
                    <div className="col-md-8 col-sm-12 team-content team-right">
                        <h1>SOMI SHAMBHAVI</h1>
                        <h3>Principal Designer</h3>
                        <p>Somi’s passion about design made the engineer turned into interior designer. 
                            After graduating as an engineer in 2009 from Himachal University, she worked in the industry as quality engineer. 
                            Somi is topper of the batch where she learned interior design from YMCA-New Delhi in 2012 after completing her MBA. 
                            Before joining Stambha Design House, she worked as lighting designer with LDW-Gurgaon and reputed furniture store – Coutry Villa Décor at Sultanpur,
                            New Delhi. She leads interior designing and contributes as creative head, 
                            relationship manager and construction team management. Her hobbies are listening music, dance and travelling. </p>
                    </div>
                    <div className="col-md-4 col-sm-12 picture">
                        <img src="./images/teams/2.jpg" alt="somi_img" className="team-picture"/>
                    </div>
                </div>
            </div>
        </>
    )
}
