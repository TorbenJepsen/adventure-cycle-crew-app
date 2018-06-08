import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* cancelRideSaga() {
    yield takeEvery('CANCEL_RIDE', cancelRide)
}

function* cancelRide(action) {
    console.log('cancelRide:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.delete, `/api/bike/cancel/${action.payload.id}`, config);
        yield put({
            type: 'GET_MY_CREATED_RIDES',
        })
    } catch(error) {
        console.log('error in DELETE cancelRide', error);
    } 
}

export default cancelRideSaga;