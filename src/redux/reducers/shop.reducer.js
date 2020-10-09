export default function shopReducer(state={collections: []}, action){
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            //console.log("We made it into the reducer, Yayyy!", action.type, action.payload)
            return {collections: action.payload}
        case 'EDIT_ITEMS':
            //console.log("We made it into the reducer")
            return {...state, items: {...state.items,...action.payload}}
        default: 
            return state;
        }
    }
    //...state.collections.filter(collection => collection.id !== action.payload.id),
    //     Object.assign({}, action.payload)

    //it was simply the ... spread operator!
    //if (existingCartItem) {
      //  return cartItems.map(cartItem =>
      //      cartItem.id === cartItemToAdd.id
       //     ? { ...cartItem, quantity: cartItem.quantity + 1 }
        //    : cartItem
       // );
   // }
  //  return [...cartItems, {...cartItemToAdd, quantity: 1 }];
//};
            //return {...state, collections: state.collections.map(collection => collection.id === action.payload.category_id ? action.payload : collection)}
            //if (collection.id === action.payload.category_id) {
             //       {...collection, item: action.payload}
            //else {
             //   return collection
           // {...state, items: action.payload}
            // return {...state, collections: state.collections.map(collection => collection.id === action.payload.id ? action.payload : collection)}
            //return {...state, items: {...state.items, action.payload}}
            //return {...state, items: {...state.items, items: action.payload}}
           // default: 
            //    return state;
       // }
//}
            //if (collection.id === action.payload.category_id) {
            //        {...collection, item: action.payload}
            //else {
             //    return collection
           // {...state, items: action.payload}
            //[
           //     ...state.collections.filter(collection => collection.id !== action.payload.id),
           //     Object.assign({}, action.payload)
           // ]   
                //
               // collections: state.collections.map(
               // (collection, i) => i === 0 ? {...collection, item: action.payload}
               // : collection
               // )
           // }
                    //if (collection.id === action.payload.category_id) {
//                       {...collection, item: action.payload}
                   // else {
                   //     return collection
           // default: 
            //    return state;
      //  }
    
//}