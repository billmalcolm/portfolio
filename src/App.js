import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

import Home from './Components/Home.js';
import Dossier from './Components/Dossier.js';
import Projects from './Components/Projects.js';
import Skills from './Components/Skills.js';
import Navigation from './Components/Navigation.js';

import './SASS/global.scss';




function App() {


  return (
    <div className="App">
      <Router>
        <div className="intro">
          <Switch>
            <Route exact path="/portfolio" >
              <Home />
            </Route>
            <Route exact path="/portfolio/dossier">
              <Dossier />
            </Route>
            <Route exact path="/portfolio/projects">
              <Projects />
            </Route>
            <Route exact path="/portfolio/skills">
              <Skills />
            </Route>
          </Switch>
        </div>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
