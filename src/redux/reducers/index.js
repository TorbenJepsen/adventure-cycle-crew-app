import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import upcomingRides from './upcomingRideReducer';
import myJoinedRides from './myJoinedRidesReducer';
import myCreatedRides from './myCreatedRidesReducer';

const store = combineReducers({
  user,
  login,
  upcomingRides,
  myJoinedRides,
  myCreatedRides,
});

export default store;
