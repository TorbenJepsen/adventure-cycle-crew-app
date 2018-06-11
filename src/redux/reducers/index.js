import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import upcomingRides from './upcomingRideReducer';
import myJoinedRides from './myJoinedRidesReducer';
import myCreatedRides from './myCreatedRidesReducer';
import joinedBikers from './joinedBikersReducer';
import editRide from './editRideReducer';

const store = combineReducers({
  user,
  login,
  upcomingRides,
  myJoinedRides,
  myCreatedRides,
  joinedBikers,
  editRide,
});

export default store;
