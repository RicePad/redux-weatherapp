// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App'
// import ReduxPromise from 'redux-promise';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware} from 'redux';
// import reducers from './reducers'


// const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleWare(reducers)}>
//     <App />
//   </Provider>, document.querySelector('.container')
//     );
    
    
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers'


const store =  applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>, document.querySelector('.container')
    );