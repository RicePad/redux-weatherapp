import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './components/App'

import { createStore }  from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';

const store = createStore(reducer);



ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>, document.querySelector('.container')
    
    );