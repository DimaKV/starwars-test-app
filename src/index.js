import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import {Provider} from 'react-redux';
import store from './store.js';

import {SWTProvider} from './components/starwars-test-context';

import {testService} from './services';


const testServiceData = new testService();

ReactDOM.render(
    <Provider store = {store}>
        <SWTProvider value={testServiceData} >
            <App />
        </SWTProvider>
    </Provider>, 
    document.getElementById('root')
);
