import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer.js';
//import wishlistReducer from './wishlist/wishlist.reducer.js';

export default combineReducers({
    cart: cartReducer,
    //wishlist: wishlistReducer
});

