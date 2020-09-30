const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART"

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  });

  // function that gets an item as a property and action creator set type and payload. 
  //go to Cart Reducer
