import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SASS/navigation.scss';
// import rocket from '../images/rocket.png';

function Navigation(props) {




    return (
        <header>
            <button className={"navToggle " + props.btnText} onClick={() => props.handleMenu()}>{props.btnText}</button>
            <div className={"navigation " + props.navState} role="navigation">
                <div className="marker alfa">
                    <Link to="/projects" onClick={() => props.handleMenu()}>
                        Projects: Things I've done
                    </Link>
                </div>
                <div className="marker bravo">
                    <Link to="/skills" onClick={() => props.handleMenu()}>
                        Skills: Things I can do
                </Link>
                </div>
                <div className="marker charlie">
                    <Link to="/dossier" onClick={() => props.handleMenu()}>
                        Dossier: Who I am
                </Link>
                </div>
            </div >
        </header>

    )
}

export default Navigation