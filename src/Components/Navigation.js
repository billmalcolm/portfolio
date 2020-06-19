import React from 'react';
import { Switch, Link } from 'react-router-dom';
import '../SASS/navigation.scss';

function Navigation() {

    return (
        <div className="navigation" role="navigation">

            <div className="marker alfa">
                <Link to="/portfolio/projects">
                    Projects:<br /> things I've done
                    </Link>
            </div>
            <div className="marker bravo">
                <Link to="/portfolio/skills">
                    Skills: <br />things I can do
                </Link>
            </div>
            <div className="marker charlie">
                <Link to="/portfolio/dossier">
                    Dossier:<br /> Who I am
                </Link>
            </div>
        </div>
    )
}

export default Navigation