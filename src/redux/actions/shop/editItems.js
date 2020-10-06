const EDIT_ITEMS = "EDIT_ITEMS"

export const editItem = data => {
    return dispatch => {
        dispatch({type: EDIT_ITEMS, payload: data})
            fetch(`api/v1/items/${data.id}`, {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json'}
            })
    }
}