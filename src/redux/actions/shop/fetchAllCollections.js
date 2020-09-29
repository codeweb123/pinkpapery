//Action Creators do exactly what they sound like, 
//they create the action objects for you.
const FETCH_COLLECTIONS = "FETCH_COLLECTIONS"

// call dispatch takes in an action and passes it 
//to the reducer as an argument.

//Reducer recieves the argument and asks the action.type of object. 
//return the state and message of payload.
//changes state through the reducer.

export function fetchAllCollections(collectionArray) {
    return {type: "FETCH_COLLECTIONS", payload: collectionArray}
}


//Actions
//The idea is that you dispatch actions onto redux, 
// and based on those actions the state is modified.



    //getCollections() {
     //   return fetch('/api/v1/categories')
     //   .then(response => response.json())
      //  .then(
        //    data => {
    //        this.setState({
     //       collections: data
     //   });
    //})}



