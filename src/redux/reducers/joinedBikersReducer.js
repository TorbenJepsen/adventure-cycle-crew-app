const joinedBikers = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_BIKERS':
        console.log('joined bikers action.payload:', action.payload);
        return action.payload
        default:
        return state;
    }
}

export default joinedBikers;