import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import RideItem from '../RideItem/RideItem';
import axios from 'axios';


const mapStateToProps = state => ({
    user: state.user,
});

class UpcomingRide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rideList: [],
        };
    }

    getAllRides = () => {
        axios.get('/api/bike').then((response) => {
            console.log(response.data);
            this.setState({
                rideList: response.data,
            });
        }).catch((error) => {
            console.log('error on get', error);
        })
    };

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
        this.getAllRides();
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
                    {this.state.rideList.map(ride => <RideItem key={ride.id}
                        ride={ride} />
                    )}
                </div>
            );
        }

        return (
            <div>
                <Nav />
                {content}
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UpcomingRide);