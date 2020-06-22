import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
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

  console.log('test track 9');

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' render={(props) => (
            <Navigation {...props} navState={navState} btnText={btnText} handleMenu={handleMenu} />
          )}>
          </Route>
        </Switch>
        <div className="interior">

          <Switch>
            <Route exact path='/' render={(props) => (
              <Home {...props} launches={launches} />
            )}>

            </Route>
            <Route path="/dossier">
              <Dossier />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
          </Switch>
        </div>

      </Router>
    </div >
  );
}

export default App;
