import React, {Fragment} from 'react';
import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage} from '../pages';
import {PlanetsPage} from '../pages';
import {StarshipsPage} from '../pages';

function App() {

  return (
    <Fragment>
      <Router>
        <Header />
        <main>
            <div className="container">              
              <Route path = '/' render={ () => <h2> Welcome to StarWars App</h2> } exact = {true} />
              <Route path = '/' component = {RandomPlanet} exact = {true} />           
              <Route path = '/people/:id?' component = {PeoplePage} />
              <Route path = '/planets/:id?' component = {PlanetsPage} />
              <Route path = '/starships/:id?' component = {StarshipsPage} />
            </div>
        </main>
      </Router>
    </Fragment>
  );
}

export default App;
