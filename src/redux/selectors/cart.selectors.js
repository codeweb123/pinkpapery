//2 types of selectors
//Input and output (uses selectors)
//Input selector is selectCart
import { createSelector } from 'reselect';

const selectCart = state => state.cart;//gets whole reducer state and gets a slice of it

//selectCartItems is a property
//createSelector call and it will take 2 arguments.
//First is [selectCart] = an array of collection of input selectors
//Second is Function that will return the value we want out of the selector. 
//cart => cart.cartItems
//	returns cart.cartItems which are all of the cart items in the cart.

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
    cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
    cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

  //Pass in [selectCartItems] and get cartItems and use reduce method on the cartItems and gives us the total quantity on the cartItems. 

//.reduce( ) method reduces the array to a single value. 
