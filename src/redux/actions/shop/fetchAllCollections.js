const FETCH_COLLECTIONS = "FETCH_COLLECTIONS"
//Action Creators do exactly what they sound like, 
//they create the action objects for you.

export function fetchAllCollections(collectionArray) {
    return function(dispatch) {
    fetch('api/v1/categories')
    .then(res => res.json())
    .then(data => { 
    dispatch({type: FETCH_COLLECTIONS, payload: data})
    console.log(data)
            }
        )
    }
}
// const URL = 'http://127.0.0.1:3000/api/v1/categories'
// export const fetchAllCollections = () => {
//     return async (dispatch) => {
//         const res = await fetch(URL);
//         const data = await res.json();
//         console.log(data)
//         dispatch({
//             type: FETCH_COLLECTIONS,
//             payload: data
//         });
        
//     }
// }

// Call dispatch takes in an action and passes it to the reducer as an argument.
//Reducer recieves the argument and asks the action.type of object. 
//Return the state and message of payload.
//Changes state through the reducer.

//Our actions now returns functions
//WHAT'S THE PROBLEM WHEN TRYING TO WRITE THE FETCH IN THE ACTION?
  //WE DIDN'T HAVE DISPATCH
  //THUNK ALLOWS DISPATCH (THE FUNCTION FROM THE STORE) TO NOW ACCEPT _EITHER_ OBJECTS _OR_ FUNCTIONS
  //IF IT'S AN OBJECT, DISPATCH WILL DO WHAT IT'S SUPPOSED TO DO: USE THE ACTION TO CHANGE THE STORE
  //IF THE ARGUMENT IS A _FUNCTION_, IT WILL INVOKE IT, AND PASS IT DISPATCH AGAIN

  //SO NOW WE CAN WRITE TWO TYPES OF ACTION CREATORS
  //ONES THAT RETURN OBJECTS (CLASSIC)
  //ONES THAT RETURN FUNCTIONS THAT GET INVOKED AND PASSED DISPATCH AGAIN (THUNK)
  //return function(dispatch){
    //we need dispatch inside of this function because it is a fetch, which will always return a promise
    //so using dispatch inside of it gets around the fact that it will only return a promise
    //that's why it's considered ASYNC Redux, because you will only return action creators 
    //that are functions if you are making a fetch request and need to change the redux 
    //store's state with the values received in the fetch 
    //fetch("https://www.googleapis.com/books/v1/volumes?q=dogs")

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