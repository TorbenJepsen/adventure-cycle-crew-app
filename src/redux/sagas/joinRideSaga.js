import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* joinRide(){
    yield takeEvery('JOIN_RIDE', joinRideSaga);
}

function* joinRideSaga(action) {
    console.log('joinRideSaga:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.post, '/api/bike/join', action.payload, config);
        console.log('action.payload:', action.payload);
        yield put({
            type: 'GET_MY_JOINED_RIDES',
        })
    }catch(error) {
        console.log('error in POST joinRideSaga:', error);

    }
}

export default joinRide;