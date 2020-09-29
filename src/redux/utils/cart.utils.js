//function takes 2 arguments
//cartItems- existing cart items 
//cartItemToAdd - the cart item we want to add

export const addItemToCart = (cartItems, cartItemToAdd) => {
    //.find() first item in the array based on condition
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
        //finding matching item id

        if (existingCartItem) {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
        }

        return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};//cartItems array and the object with base quantity of 1. 

// Utility functions allow us to keep our files clean
//Organize functions that we may need in multi files in 1 location. 