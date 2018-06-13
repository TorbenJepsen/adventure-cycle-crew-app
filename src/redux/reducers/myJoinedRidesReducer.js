const myJoinedRides = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MY_JOINED_RIDES':
        return action.payload || state;
        // return action.payload;
        default:
        return state;
    }
}

export default myJoinedRides;