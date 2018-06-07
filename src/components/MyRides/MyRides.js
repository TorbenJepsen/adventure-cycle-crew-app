import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import axios from 'axios';
import CreatedRides from '../CreatedRides/CreatedRides';
import JoinedRides from '../JoinedRides/JoinedRides';
import AppBar from '../AppBar/AppBar';



const mapStateToProps = state => ({
  user: state.user,
});

class MyRides extends Component {
    constructor(props){
        super(props);

        this.state = {
            createdRides: [],
            joinedRides: [],
        }
    }

    getAllCreatedRides = () => {
        axios.get('/api/bike/created').then((response) => {
            console.log(response.data);
            this.setState({
                createdRides: response.data,
            });
        }).catch((error) => {
            console.log('error on get', error);
        })
    };

    getAllJoinedRides = () => {
        axios.get('/api/bike/joined').then((response) => {
            console.log(response.data);
            this.setState({
                joinedRides: response.data,
            });
        }).catch((error) => {
            console.log('error on get', error);
        })
    };

    leaveRide = ride => {
        axios.delete(`/api/bike/${ride.id}`).then((response) => {
            console.log(response);
            this.getAllCreatedRides();
        }).catch((error) => {
            console.log('error on leave ride:', error);

        })


    }


  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.getAllCreatedRides();
    this.getAllJoinedRides();
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
            <CreatedRides created={this.state.createdRides}/>
            <h3> Rides I've Joined </h3>
            <JoinedRides joined={this.state.joinedRides} leaveRide={this.leaveRide}/>
        </div>
      );
    }

    return (
      <div>
        {/* <Nav /> */}
        <AppBar />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(MyRides);