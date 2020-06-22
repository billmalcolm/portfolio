import React from 'react';
import { Link } from "react-router-dom";

import '../SASS/projects.scss';

import oegSite from './../images/oeg-site.png';
import gmrSite from './../images/gmr-site.png';
import storySite from './../images/storyhouse-site.png';
import cccySite from './../images/cccy-site.png';

function Projects() {
    return (
        <div className="projects interior">

            <Link to="/" className="goBack">
                <i className="fa fa-home"></i>
            </Link>
            <h2>Things I've Done</h2>
            <p>I've done a whole lot more, but most of my projects tend to be short-lived promotional pieces and as a result, there isn't a lot of my work still on the web. I've built hundreds of sites over my career, and these were some that are still up. </p>

            <div className="project">
                <div className="project-image">
                    <a href="https://www.omceg.com/" target="_blank">
                        <img src={oegSite} alt="Omnicom Experiential Group Website" />
                    </a>
                </div>
                <div className="project-info">
                    <h3><a href="https://www.omceg.com/" target="_blank">Omnicom Experiential Group</a></h3>
                    <p>The Omnicom Experiential Group site really shows some of my CSS chops. Built with Umbraco, this site has some fun CSS animations in the intro. The carousels are all handled dynamically and created using the Slick.js carousel and the color changing background gradients really make this site pop. It even has custom dropdown menus. </p>
                </div>

            </div>

            <div className="project">
                <div className="project-image">
                    <a href="https://gmrmarketing.com" target="_blank">
                        <img src={gmrSite} alt="GMR Marketing site" />
                    </a>
                </div>
                <div className="project-info">
                    <h3><a href="#" target="_blank">GMR Marketing</a></h3>
                    <p>The GMR Marketing site is another Umbraco-powered site. This one has a cool masonry block layout employing lazy-loading. The navigation menu originally used javaScript for most of the work, but I was able to refactor the component to rely mostly on CSS and only use JS to toggle classes. I got to know the Slick.js carousel pretty well on this project. </p>
                </div>

            </div>

            <div className="project">
                <div className="project-image">
                    <a href="https://thestoryhouse-la.com/" target="_blank">
                        <img src={storySite} alt="The Story House site" />
                    </a>
                </div>
                <div className="project-info">
                    <h3><a href="https://thestoryhouse-la.com/" target="_blank">The Story House site</a></h3>
                    <p>
                        This site is built in React with node.js. This one has some really cool full-page effects along with video backgrounds and SVG animations for the icons (those were done by my talented coworker, Nate). Some of the text treatment required finding some obscure hacks with typography, but it looks great.
                    </p>
                </div>

            </div>
            <div className="project">
                <div className="project-image">
                    <a href="https://comcastcommunitychampion.com/" target="_blank">
                        <img src={cccySite} alt="Comcast Community Champion of the Year site" />
                    </a>
                </div>
                <div className="project-info">
                    <h3><a href="https://comcastcommunitychampion.com/" target="_blank">Comcast Community Champion of the Year</a></h3>
                    <p>The Comcast Community Champion of the Year site honors NASCAR professionals who also work hard helping others in their community. This site was also built with React.js, but it was done so in Visual Studio with a C# back end. The videos were all hosted with AWS and feature some nice modal video players.   </p>
                </div>

            </div>




        </div>
    )
}

export default Projects