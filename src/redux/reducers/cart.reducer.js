import { addItemToCart } from '../utils/cart.utils';
// reducers: are controllers (controller switchboard)

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
  };

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            };
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id
              )
            };
            //return a new object, spread state, update cartItems: so it returns a new array without the item in the array.
            //we are going to call on the existing state of the cart items array and filter it passing in 
            //the cartItem and if teh cartItem.id does not match the action.payload.id (which is the item we are
            // trying to remove) and then I want you to keep it. returns TRUE!  
            //If it does match the item id that we are trying to remove from the payload then I want you to filter it out.
           //.filter() returns anything that yields true and gives a new array.
        default:
            return state;
        }
      };
      
          export default cartReducer;
          //.filter() returns anything that yields true

