const myCreatedRides = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MY_CREATED_RIDES':
        return action.payload
        default:
        return state;
    }
}

export default myCreatedRides;