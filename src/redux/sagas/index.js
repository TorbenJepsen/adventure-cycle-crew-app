import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import getRideSaga from './getRideSaga';
import addRideSaga from './addRideSaga';
import myJoinedRidesSaga from './myJoinedRidesSaga';
import joinRide from './joinRideSaga';
import myCreatedRidesSaga from './myCreatedRidesSaga';
import leaveRideSaga from './leaveRideSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    getRideSaga(),
    addRideSaga(),
    myJoinedRidesSaga(),
    joinRide(),
    myCreatedRidesSaga(),
    leaveRideSaga(),
    // watchIncrementAsync()
  ]);
}
