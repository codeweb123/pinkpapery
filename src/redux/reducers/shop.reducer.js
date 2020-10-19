export default function shopReducer(state={collections: []}, action){
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            //console.log("We are in the reducer", action.type, action.payload)
            return {collections: action.payload}
        case 'EDIT_ITEMS':
            let items = state.collections.find(collection => collection.id === parseInt(action.payload.category_id)).items
            let new_items = items.map(item => item.id === parseInt(action.payload.id) ? action.payload : item)
            return {collections: state.collections.map(category => category.id === parseInt(action.payload.category_id) ? {...category, items: new_items} : category)}
        default: {
            return {
                ...state
            }
        }
    }
}


            // const updatedItems = state.items.collections.map((item, i) => {
            //     // If the item exist and matches the id of the payload,
            //     // it will update it
            //     if (item.id === action.payload.id) {
            //         item.value = action.payload.value;
            //     }
            //     return item;
            // });
            // return {
            //     ...state, collections: {...state.collections, items: updatedItems }
            // }
            //console.log("We made it into the reducer")
            //return {...state, items: {...state.items,...action.payload}}
            //return {...state, collections: state.collections.items.map(item => item.id === action.payload.id ? action.payload : item)}
            //return {...state, collections: {...state.collections, items: [...state.collections.items.map(item => item.id === action.payload.id ? { ...item, value: action.payload.value} : item)]}};
            //return {
             //   ...state,
             //   collections: {
             //     ...state.collections,
              //    items: state.collections.items.map((item) =>
             //       item._id === action.payload.id
              //        ? { ...item, value: action.payload.value }
               //       : null
              //    )
              //  },
             // };
            //return {
            //    ...state,
             //   collections: {
             //       ...state.collections,
             //       items: state.collections.items((item, i) => item.id == action.payload.id ? { ...item, value: action.payload.value } : null ) }
             //   }
             
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