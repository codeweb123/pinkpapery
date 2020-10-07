export default function shopReducer(state={collections: []}, action){
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            console.log("We made it into the reducer, Yayyy!", action.type, action.payload)
            return {collections: action.payload}
        case 'EDIT_ITEMS':
            console.log("We made it into the reducer")
            return {
                ...state, 
                collections: state.collections.map(collection => {
                    if (collection.items[] === action.payload.category_id) {
                        return action.payload
                    }
                    else {
                        return collection
                    }
                })
            }
            default: 
                return state
    }
}