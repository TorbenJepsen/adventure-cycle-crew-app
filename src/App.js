import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

import './styles/main.css';
import AddRide from './components/AddRide/AddRide';
import UpcomingRide from './components/UpcomingRide/UpcomingRide';
import MyRides from './components/MyRides/MyRides';




const App = () => (
  <div>
    {/* <Header title="Adventure Cycling Club" /> */}
    
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
        <Route
          path="/add"
          component={AddRide}
        />
        <Route
          path="/ride"
          component={UpcomingRide}
        />
        <Route
          path="/myrides"
          component={MyRides}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  </div>
);

export default App;
