import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import JoinedRides2 from '../JoinedRides/JoinedRides2';
import AppBar from '../AppBar/AppBar';
import CreatedRides2 from '../CreatedRides/CreatedRides2';
import swal from 'sweetalert';




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
    swal({
      title: "Are you sure?",
      text: "Once deleted, this ride will be gone forever!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.props.dispatch({
          type: 'CANCEL_RIDE',
          payload: ride,
        })
        swal("Poof! Your bike ride is gone!", {
          icon: "success",
        });
      } else {
        swal("Your ride is safe!");
      }
    });

  }


  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'GET_MY_JOINED_RIDES' });
    this.props.dispatch({ type: 'GET_MY_CREATED_RIDES' });
    this.props.dispatch({ type: 'GET_BIKERS'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;
    let allRiders = this.props.state.joinedBikers;

    if (this.props.user.userName) {
      content = (
        <div>
          <h3> Rides I've Created </h3>
          <CreatedRides2 created={this.props.state.myCreatedRides} cancelRide={this.cancelRide} handleClickEdit={this.handleClickEdit} allRiders={allRiders}/>
          <h3> Rides I've Joined </h3>
          <JoinedRides2 joined={this.props.state.myJoinedRides} leaveRide={this.leaveRide} allRiders={allRiders}/>
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