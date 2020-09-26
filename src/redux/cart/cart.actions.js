//these are my action creators and generally return,  type: and a payload:
//actions are objects
//thunk middleware returns functions
//ASync fetch request occur here
//dispatch

import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => {
    return (dispatch) => {
        dispatch({
            type: CartActionTypes.ADD_ITEM}); 
        fetch('/api/v1/categories')
        .then(resp => resp.json())
        .then(data => dispatch({type: CartActionTypes.ADD_ITEM, payload: item}))
        }
    }

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  });


