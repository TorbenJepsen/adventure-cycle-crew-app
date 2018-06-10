import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AppBar from '../AppBar/AppBar';
import AddRideField from '../AddRideField/AddRideField';


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
        this.props.dispatch({
            type: 'SET_RIDE',
            payload: this.state.newRide,
        })
        this.props.history.push('ride');
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
                <div className="addRideField">
                    <AddRideField newRide={this.state.newRide} addNewRide={this.addNewRide} handleChange={this.handleChange} />
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
export default connect(mapStateToProps)(AddRide);