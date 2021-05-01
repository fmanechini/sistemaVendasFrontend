import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import {Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'
import ReactDOM from 'react-dom';
import './index.css';
import SalePage from './pages/salePage/SalePage';
import RegistryPage from './pages/registryPage/RegistryPage'
import Snackbar from './components/snackbar/Snackbar'


const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <RegistryPage />
        <Snackbar />
    </Provider>, 
document.getElementById('root'));
