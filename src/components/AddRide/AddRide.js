import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AppBar from '../AppBar/AppBar';
import AddRideField from '../AddRideField/AddRideField';
import UpdateRideField from '../UpdateRideField/UpdateRideField';


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
                isEditing: false,
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

    updateRide = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_UPDATED_RIDE',
            payload: this.state.newRide,
        })
        this.props.history.push('myrides');
    }

    componentDidMount() {
        this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    showEditing = () => {
        if(this.state.isEditing) {
            return (
                <div>
                    <UpdateRideField newRide={this.state.newRide} updateRide={this.updateRide} handleChange={this.handleChange} />
                </div>
            )
        } else {
            return (
                <div className="addRideField">
                    <AddRideField newRide={this.state.newRide} addNewRide={this.addNewRide} handleChange={this.handleChange} />
                </div>
            )
        }
    }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                this.showEditing()
                // <div className="addRideField">
                //     <AddRideField newRide={this.state.newRide} addNewRide={this.addNewRide} handleChange={this.handleChange} />
                // </div>

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