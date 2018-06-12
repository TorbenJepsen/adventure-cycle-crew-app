import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import CreatedRides from '../CreatedRides/CreatedRides';
import JoinedRides from '../JoinedRides/JoinedRides';
import AppBar from '../AppBar/AppBar';



const mapStateToProps = state => ({
  user: state.user,
  state: state,
});

class MyRides extends Component {

  handleClickEdit = (ride) => {
    this.props.dispatch({ type: 'EDIT_RIDE', payload: ride });

    this.props.history.push('update');
    console.log('edit button clicked!', ride);
  }


  leaveRide = ride => {
    this.props.dispatch({
      type: 'LEAVE_RIDE',
      payload: ride,
    })


  }

  cancelRide = ride => {
    this.props.dispatch({
      type: 'CANCEL_RIDE',
      payload: ride,
    })
  }


  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'GET_MY_JOINED_RIDES' });
    this.props.dispatch({ type: 'GET_MY_CREATED_RIDES' });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3> Created Rides </h3>
          <CreatedRides created={this.props.state.myCreatedRides} cancelRide={this.cancelRide} handleClickEdit={this.handleClickEdit} />
          <h3> Rides I've Joined </h3>
          <JoinedRides joined={this.props.state.myJoinedRides} leaveRide={this.leaveRide} />
        </div>
      );
    }

    return (
      <div>
        <AppBar />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(MyRides);