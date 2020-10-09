const EDIT_ITEMS = "EDIT_ITEMS"

export const editItem = (data) => {
    return (dispatch) => {
        dispatch({type: EDIT_ITEMS, payload: data})
        fetch(`api/v1/items/${data.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

// export const editItem = (data) => {
//     return (dispatch) => {
//       fetch(`api/v1/items/${data.id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           dispatch({
//             type: EDIT_ITEMS,
//             payload: data
//           });
//         });
//     };
//   };




//export const editItem = (data) => {
//    return (dispatch) => {
 //       dispatch({type: EDIT_ITEMS, payload: data})
  //      fetch(`api/v1/items/${data.id}`, {
  //          method: "PATCH",
  //          headers: {
   //             "Content-Type": "application/json"
   //         },
   //         body: JSON.stringify(data)
   //     })
  //  }
//}


        //.then(resp => resp.json())
        //.then(itemObj => dispatch({ type: EDIT_ITEMS, payload: itemObj}))
    //}
//}


//export const editItem = data => {
//    return dispatch => {
//        dispatch({type: EDIT_ITEMS, payload: data})
//        return  fetch(`api/v1/items/${data.id}`, {
//                method: 'PATCH',
//                body: JSON.stringify(data),
//                headers: { 'Content-Type': 'application/json'}
//            })
//    }
//}