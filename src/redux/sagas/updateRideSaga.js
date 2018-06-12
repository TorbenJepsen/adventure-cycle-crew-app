import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateSaga(){
    yield takeEvery('SET_UPDATED_RIDE', updateRideSaga);
}

function* updateRideSaga(action){
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
      try{
          yield call(axios.put, '/api/bike/update', action.payload, config)
          yield put({
              type: 'GET_MY_CREATED_RIDES',
          })
      }
      catch(error){
          console.log('error in updateRideSaga', error);
      }
}

export default updateSaga;