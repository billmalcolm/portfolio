import React from 'react';

import ReturnHome from './ReturnHome.js';

import './../SASS/dossier.scss';

import astroPic from './../images/astronaut-me.png';



function Dossier() {
    return (
        <div className="dossier shade">
            <ReturnHome />
            <h2>Dossier: Who I am</h2>
            <div className="photo">
                <img src={astroPic} alt="My face in astronaut frame" />
                <ul>
                    <li>Name: Bill Malcolm</li>
                    <li>Profession: Front-end Developer </li>
                    <li>Years of Experience: 9</li>
                    <li>Starfleet Service Number: SP-937-215</li>
                </ul>
            </div>
            <div className="extended-info">
                <h3>
                    Employment History
                </h3>

                <p>GMR Marketing 04/2015 - 05/2020<br />Front-end Developer</p>
                <p>Bader Rutter 04/2012 - 04/2015<br /> Junior Web Developer</p>
                <p>ASQ 01/2011 - 01/2012<br /> Web Intern </p>
            </div>

        </div>
    )
}

export default Dossier