import { combineReducers } from 'redux';
import cartReducer from './reducers/cart.reducer.js';
import cardcontainerReducer from './reducers/cardcontainer.reducer.js';
import shopReducer from './reducers/shop.reducer.js';

export default combineReducers({
    cart: cartReducer,
    cardcontainer: cardcontainerReducer,
    shop: shopReducer
});

