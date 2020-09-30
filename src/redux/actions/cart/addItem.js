// uppercase strings for err handling
// action is the network request 
// (the instruction for the reducer)
const ADD_ITEM = "ADD_ITEM"

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});
//these are my action creators and generally return, type: and a payload:
//actions are objects
//thunk middleware returns functions
//ASync fetch request occur here
//dispatch
