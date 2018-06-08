import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* myCreatedRidesSaga() {
    yield takeEvery('GET_MY_CREATED_RIDES', getMyCreatedRidesSaga)
}

function* getMyCreatedRidesSaga(action) {
    console.log('getMyCreatedRidesSaga:', action);
    try{
        const myCreatedRides = yield call(axios.get, '/api/bike/created');
        console.log('createdRides', myCreatedRides);
        yield put({
            type: 'FETCH_MY_CREATED_RIDES',
            payload: myCreatedRides.data,
        })
    }catch(error){
        console.log('error in getMyEvents saga', error);
    }
}

export default myCreatedRidesSaga;