import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* myJoinedRidesSaga() {
    yield takeEvery('GET_MY_JOINED_RIDES', getMyJoinedRidesSaga)
}

function* getMyJoinedRidesSaga(action) {
    console.log('getMyJoinedRidesSaga:', action);
    try{
        const myJoinedRides = yield call(axios.get, '/api/bike/joined');
        console.log('joinedRides', myJoinedRides);
        yield put({
            type: 'FETCH_MY_JOINED_RIDES',
            payload: myJoinedRides.data,
        })
    }catch(error){
        console.log('error in getMyEvents saga', error);
    }
}

export default myJoinedRidesSaga;