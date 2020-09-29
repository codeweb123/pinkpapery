const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART"

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
  });
