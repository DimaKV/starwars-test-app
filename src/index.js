import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import {Provider} from 'react-redux';
import store from './store.js';

import {SWTProvider} from './components/starwars-test-context';

// import {testService} from './services';
import {SwapiService} from './services';

// const testServiceData = new testService();
const swapi = new SwapiService();


ReactDOM.render(
    <Provider store = {store}>
        <SWTProvider value={swapi} >
            <App />
        </SWTProvider>
    </Provider>, 
    document.getElementById('root')
);
