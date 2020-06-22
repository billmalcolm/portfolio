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
                <h3>Other Skills</h3>
                <p>This section includes libraries, frameworks, dev tools and anything else that I regularly use outside of the fundamentals. </p>
                <ul>
                    <li>React</li>
                    <li>SASS</li>
                    <li>MJML</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>Photoshop/GIMP</li>
                    <li>Sketch</li>
                </ul>
            </div>

            <div className="skill">
                <h3>Getting Rusty</h3>
                <p>
                    Iron rusts from disuse. So does a developer's skill in any given technology.
            </p>

                <p>These are things that I was once proficient in, but like the proverbial iron, I have become a bit rusty with. I am a quick learner, though, so I am confident I could quickly get back up to speed in these.</p>

                <ul>
                    <li>Wordpress</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>Marketo/Eloqua</li>
                    <li>Prototype.js</li>
                    <li>Underscore.js</li>
                    <li>TaffyDB</li>
                </ul>
            </div>


        </div>
    )
}

export default Skills