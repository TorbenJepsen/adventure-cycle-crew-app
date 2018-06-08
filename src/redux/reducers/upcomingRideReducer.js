const upcomingRides = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL_RIDES':
        console.log('allRides action.payload:', action.payload);
        return action.payload
        default:
        return state;
    }
}

export default upcomingRides;