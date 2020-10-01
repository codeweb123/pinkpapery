import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';

// <BrowserRouter><App/></BrowserRouter> is a component that wraps 
// around App to give all the functionality from react-router-dom library.
// { Provider} is a component that gives access related to the store
// and is the parent component from react-redux.
// Import store and then in the Provider store={store} 
// now we have access to Redux!

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
