import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* leaveRideSaga() {
    yield takeEvery('LEAVE_RIDE', leaveRide)
}

function* leaveRide(action) {
    console.log('leaveRide:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }  
    try{
        yield call(axios.delete, `/api/bike/${action.payload.id}`, config);
        yield put({
            type: 'GET_MY_JOINED_RIDES',
        })
    }catch(error){
        console.log('error in DELETE leaveRide:', error);
    }
}

export default leaveRideSaga;