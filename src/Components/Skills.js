import React from 'react';
import ReturnHome from './ReturnHome.js';

import htmlLogo from '../images/html5-logo.png';
import cssLogo from '../images/css3-logo.png';
import jsLogo from '../images/js-logo.png';

import '../SASS/skills.scss';

function Skills() {
    return (
        <div className="skills interior">
            <ReturnHome />
            <h2>Things I Can Do</h2>
            <p>
                Every time I think I've mastered a subject, I learn something new. <br />
                    Gaps in knowledge are not meant to be feared, but boldly explored.
                </p>
            <p>
                The following are technologies that I am always learning more about and trying to improve. <br />They make the list when I complete a project and continue to use them.
                </p>
            <h3>Fundamentals</h3>
            <div className="skill fundamentals">
                <img src={htmlLogo} alt="HTML 5" />
                <img src={cssLogo} alt="CSS 3" />
                <img src={jsLogo} alt="Javascript" />
                <p>These are the foundation of a front-end developer's skills. </p>
            </div>


            {/* <p>
                Iron rusts from disuse. So does a developer's skill in any given technology.
            </p> */}

        </div>
    )
}

export default Skills