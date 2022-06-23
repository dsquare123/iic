import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap';
import './about.css';

function About() {
    return (

        <div id="about">
            <div className="con">
      
                <div className="content">
                    <span>
                    <i className="fa-solid fa-megaphone"></i>
                        <i className="bg far fa-bookmark"></i>
                        <h3>About IIC-NITC</h3>
                    </span>
                    <div class="row">
        <div class="col-sm-6">
            <p><span style={{fontWeight: 'bold'}}>National Institute of Technology, Calicut</span>,  with an aim of fostering entrepreneurship initiatives among the students has established Institution’s Innovation Cell (IIC-NITC) in association with MHRD and the Ministry of HRD’s Innovation Cell (MHRD) in the year 2017-18.The role of IIC would be to identify, encourage, inspire and nurture technology based innovative start-ups, supporting them to work with new ideas and transform them into prototypes. 
                <br /><span style={{fontWeight: 'bold'}}>Institution's Innovation Council</span> at NIT Calicut is planning to conduct various innovation and entrepreneurship related activities such as periodic workshops, seminars, interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators. This ideally is expected to bring outcomes such as successful innovative projects carried out by institution’s faculty and students. Hackathons, idea competitions and other mini-challenges are some of the other programmes which can also be organised by IIC.
            </p>
        </div>
        <div class="col-sm-6"> 
            <div className="image">
                <img src="about2.png" alt="ABOUT" />
            </div>
        </div>
    </div>
                </div>
               
            </div>

           
        </div>
    );
};

export default About;