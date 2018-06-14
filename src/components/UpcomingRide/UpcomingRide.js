import React, { Component } from 'react';
import { connect } from 'react-redux';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import RideItem from '../RideItem/RideItem';
import AppBar from '../AppBar/AppBar';
import AddRideButton from '../AddRideButton/AddRideButton';




const mapStateToProps = state => ({
    user: state.user,
    state: state,
});

class UpcomingRide extends Component {

    handleJoinRide = (ride) => {
        console.log('join ride', ride);
        this.props.dispatch({
            type: 'JOIN_RIDE',
            payload: ride,
        });

    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.props.dispatch({ type: 'GET_RIDES'});
        this.props.dispatch({ type: 'GET_BIKERS' });
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
                    {this.props.state.upcomingRides.map(ride => <RideItem key={ride.id}
                        ride={ride} handleJoinRide={this.handleJoinRide} allRiders={allRiders}/>
                    )}
                </div>


            );
        }

        return (
            <div>
                <AppBar />
                {content}
                <div>
                <AddRideButton />
                    </div>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UpcomingRide);