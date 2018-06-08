import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getRideSaga() {
    yield takeEvery('GET_RIDES', getAllRidesSaga)
}

function* getAllRidesSaga(action) {
    console.log('getRideSaga:', action);
    try{
        const allRides = yield call(axios.get, '/api/bike');
        console.log(allRides);
        yield put({
            type: 'FETCH_ALL_RIDES',
            payload: allRides.data,
        })
    }catch(error){
        console.log('error in getAllRidesSaga:', error);
    }
}

export default getRideSaga;