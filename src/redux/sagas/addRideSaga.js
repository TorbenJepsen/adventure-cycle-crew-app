import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addRideSaga(){
    yield takeEvery('SET_RIDE', rideSaga)
}

function* rideSaga(action) {
    console.log('addRideSaga:', action);
    const config = {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
    }
    try{
        yield call(axios.post, '/api/bike', action.payload, config);
        yield put({
            type: 'GET_RIDES',
        })
        yield put({
            type: 'GET_BIKERS',
        })


    }catch(error){
        console.log('error in POST addRideSaga:', error);
    }
}

export default addRideSaga;