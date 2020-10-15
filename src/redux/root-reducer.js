import { combineReducers } from 'redux';
import cartReducer from './reducers/cart.reducer.js';
import cardcontainerReducer from './reducers/cardcontainer.reducer.js';
import shopReducer from './reducers/shop.reducer.js';
//import creationcontainerReducer from './reducers/creationcontainer.reducer.js';
//import itemReducer from './reducers/item.reducer.js';
//import wishlistReducer from './wishlist/wishlist.reducer.js';

export default combineReducers({
    cart: cartReducer,
    cardcontainer: cardcontainerReducer,
    shop: shopReducer
    //item: itemReducer
    //wishlist: wishlistReducer
});

