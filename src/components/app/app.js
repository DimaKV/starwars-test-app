import React, {Fragment} from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonaDetails from '../personal-details';

import Spinner from '../spinner';

import {testService} from '../../services';

function App() {
  const testServiceData = new testService();
  console.log(testServiceData.getPeople()); 
  return (
    <Fragment>
      <Header />
      <main>
          <div className="container">
            <RandomPlanet />
            <div className="row">
              <ItemList />
              <PersonaDetails />                           
            </div>
          </div>
      </main>
    </Fragment>
  );
}

export default App;
