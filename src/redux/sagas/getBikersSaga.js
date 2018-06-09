import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getBikers() {
    yield takeEvery('GET_BIKERS', getBikersJoined)
}

function* getBikersJoined(action) {
    console.log('getBikers:', action);
    try{
        const attendingBikers = yield call(axios.get, '/api/bike/riders');
        console.log(attendingBikers);
        yield put({
            type: 'FETCH_BIKERS',
            payload: attendingBikers.data,
        }) 
    }catch(error) {
        console.log('error in getBikers', error);
    }
}

export default getBikers;