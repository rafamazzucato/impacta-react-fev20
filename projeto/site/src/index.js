import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {Provider}from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from'redux-thunk';
import tabelas from './reducers';

const storeWithMiddleware = applyMiddleware(thunk)(createStore);
const store = storeWithMiddleware(tabelas);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, 
document.getElementById('root'));