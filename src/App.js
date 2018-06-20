import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';

import './styles/main.css';
import AddRide from './components/AddRide/AddRide';
import UpcomingRide from './components/UpcomingRide/UpcomingRide';
import MyRides from './components/MyRides/MyRides';
import UpdateRide from './components/UpdateRide/UpdateRide';
import TitleAppBar from './components/TitleAppBar/TitleAppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#BBDEFB',
      main: '#2196F3',
      dark: '#1976D2',
      contrastText: '#FFFFFF',

    },
    secondary: {
      main: '#FF9800',
      dark: '#283044',
      contrastText: '#757575',
    },
    contrastThreshold: 3,
    tonalOffset: .02,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
  <div>
    
    <Router>
      <div>
        <TitleAppBar />
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
        <Route
          path="/update"
          component={UpdateRide}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />
      </Switch>
      </div>
    </Router>
  </div>
  </MuiThemeProvider>
);

export default App;
