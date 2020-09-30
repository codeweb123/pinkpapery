export default function shopReducer(state={collections: []}, action){
    switch (action.type) {
        case 'FETCH_COLLECTIONS':
            console.log("We made it into the reducer, Yayyy!", action.type, action.payload)
            return {collections: action.payload}
        default: 
            return state
    }
}