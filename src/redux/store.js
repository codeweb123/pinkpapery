import { createStore, applyMiddleware } from 'redux';
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
//

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

//function createStore(reducer) {
//    let state = reducer( undefined, {type: "default"})
// return {
 //   dispatch: function(action){ state = reducer(state, action)},
//    getState: function() {
 //       console.log(state)
  //      return state
  //  
  // let store = createStore(counterReducer)    
// store variable is there 


