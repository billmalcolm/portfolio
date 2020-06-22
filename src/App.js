import React, { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Components/Home.js';
import Dossier from './Components/Dossier.js';
import Projects from './Components/Projects.js';
import Skills from './Components/Skills.js';
import Navigation from './Components/Navigation.js';

import './SASS/global.scss';


function App() {


  const [navState, openNav] = useState("closed");
  const [btnText, changeText] = useState("Launch");
  const [launches, tickLaunch] = useState(0);

  function handleMenu() {
    tickLaunch(launches + 1);

    if (navState === "open") {
      openNav('closed');
      changeText('Launch');
    } else {
      openNav('open');
      changeText('Return');

    }
  }

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" render={(props) => (
            <Navigation {...props} navState={navState} btnText={btnText} handleMenu={handleMenu} />
          )}>
          </Route>
        </Switch>
        <div className="intro">
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home {...props} launches={launches} />
            )}>

            </Route>
            <Route exact path="/dossier">
              <Dossier />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
