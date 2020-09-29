//no updates to state but store cardcontainer state (HOMEPAGE - 5 categories) in Redux.
//reducers the controller 
const INITIAL_STATE = {
    sections: [
                {
                    title: 'Custom Stationary',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ZVmVzFloL._AC_SL1049_.jpg',
                    id: 1,
                    linkUrl:'stationary'
                },
                {
                    title: 'Calendars',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61tZdKlHsZL._AC_SL1000_.jpg',
                    id: 2,
                    linkUrl:'calendar'
    
                },
                {
                    title: 'Custom Planners',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81-0pNcnghL._AC_SL1500_.jpg',
                    id: 3,
                    linkUrl:'planner'
    
                },
                {
                    title: 'Paper Bar',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bGtO9HCgL._AC_SL1470_.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl:'paper'
    
                },
                {
                    title: 'Specialty Cards',
                    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81CxYNVzDLL._AC_SL1500_.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl:'card'
    
                }
            ]
        };

        const cardcontainerReducer = (state = INITIAL_STATE, action) => {
            switch(action.type) {
                default:
                    return state;
            }
        };

        export default cardcontainerReducer;