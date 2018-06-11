const editRide = (state = {}, action) => {
    switch(action.type) {
        case 'EDIT_RIDE':
        console.log('edit ride action.payload:', action.payload);
        return action.payload
        default:
        return state;
    }
}

export default editRide;