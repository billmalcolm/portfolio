import React, { useState } from 'react';
import {
  BrowserRouter as Router,
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

  const devURL = '/';
  const ProdURL = process.env.PUBLIC_URL + 'portfolio/';

  // Switch these when deploying
  const baseURL = process.env.PUBLIC_URL + 'portfolio/';


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={baseURL} render={(props) => (
            <Navigation {...props} navState={navState} btnText={btnText} handleMenu={handleMenu} />
          )}>
          </Route>
        </Switch>
        <div className="interior">

          <Switch>
            <Route exact path={baseURL} render={(props) => (
              <Home {...props} launches={launches} />
            )}>

            </Route>
            <Route path={baseURL + "dossier"}>
              <Dossier />
            </Route>
            <Route path={baseURL + "projects"}>
              <Projects />
            </Route>
            <Route path={baseURL + "skills"}>
              <Skills />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
