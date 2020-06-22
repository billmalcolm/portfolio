import React from 'react';
import ReturnHome from './ReturnHome.js';



import '../SASS/skills.scss';

function Skills() {
    return (
        <div className="skills shade">
            <ReturnHome />
            <h2>Things I Can Do</h2>
            <p>
                Every time I think I've mastered a subject, I learn something new. <br />
                Gaps in knowledge are not meant to be feared, but boldly explored.
            </p>
            <p>
                The following are technologies that I am always learning more about and trying to improve. <br /> They make the list when I complete a project and continue to use them.
            </p>

            <div className="skill">
                <h3>HTML5, CSS3 and ES6 javaScript</h3>

                <p>These are the foundation of a front-end developer's skills. I've been learning and practicing these since 2009. When I started my career, I was mostly doing HTML emails. Responsive design and media queries were just on the horizon back then. Now, over a decade later, I am working with localStorage, pseudo selectors and arrow functions, to name a few.    </p>
            </div>

            <div className="skill">
                <h3>Libraries, Frameworks and Dev Tools</h3>
                <p></p>
                <ul>
                    <li>React</li>
                </ul>
            </div>

            {/* <p>
                Iron rusts from disuse. So does a developer's skill in any given technology.
            </p> */}

        </div>
    )
}

export default Skills