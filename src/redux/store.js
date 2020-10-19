import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
//we use thunk for organization. 
//Organize the logic(fetch) out of components 
//Thunk is middleware is any bit of code that intercepts a process and changes the outcome

//const middlewares = [thunk];

//store is our Single Source of Truth...the holy grail!

//All of the redux info is stored in the little variable "store".
//To change state, use dispatch from the store.

//Our component will never access the store directly but use connect
// to access this store.

//Redux is using Context which is built into react. Redux's ability
// to connect to any component.
//State management is a Redux feature.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store;