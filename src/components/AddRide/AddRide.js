import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import axios from 'axios';

const mapStateToProps = state => ({
    user: state.user,
});

class AddRide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newRide: {
                date: '',
                terrain: '',
                address: '',
                start_time: '',
                length: '',
            }
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            newRide: {
                ...this.state.newRide,
                [propertyName]: event.target.value,
            }
        });
    }

    addNewRide = event => {
        event.preventDefault();
        console.log(this.state.newRide);
        axios.post('/api/bike', this.state.newRide).then((response) => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
                    <form onSubmit={this.addNewRide}>
                        <label htmlFor="date">Date</label>
                        <input type="date" onChange={this.handleChange('date')} value={this.state.newRide.date} placeholder="Enter Date" />
                        <label htmlFor="terrain">Terrain Type</label>
                        <select onChange={this.handleChange('terrain')} value={this.state.newRide.terrain}>
                            <option>-- Select --</option>
                            <option value="Paved Trail">Paved Trail</option>
                            <option value="Rough trail">Rough Trail</option>
                            <option value="Street">Street</option>
                            <option value="Hills">Hills</option>
                        </select>
                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={this.handleChange('address')} value={this.state.newRide.address} placeholder="Enter Starting Address" />


                        <label htmlFor="start_time">Start Time</label>
                        <input type="time" onChange={this.handleChange('start_time')} value={this.state.newRide.start_time} placeholder="12:00" />
                        <label htmlFor="length">Length of Ride</label>
                        <input type="number" onChange={this.handleChange('length')} value={this.state.newRide.length} placeholder="Enter approx. length in miles" />

                        <input type="submit" value="Add New Ride!" />
                    </form>

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
export default connect(mapStateToProps)(AddRide);