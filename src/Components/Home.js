import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../SASS/home.scss';

function Home(props) {

    const launches = props.launches;

    let playIt = (launches === 1) ? "play" : "wait"
    let playDone = (launches > 1) ? "done" : ""

    return (
        <div className={playDone + " home " + playIt}>

            <h1>Bill Malcolm</h1>
            <h2>Front-end Developer</h2>
            <p>(But clearly, not a Designer)</p>

        </div>
    )
}

export default Home