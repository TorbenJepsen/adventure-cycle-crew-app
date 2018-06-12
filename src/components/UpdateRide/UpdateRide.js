import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import AppBar from '../AppBar/AppBar';
import UpdateRideField from '../UpdateRideField/UpdateRideField';


const mapStateToProps = state => ({
    user: state.user,
    editRide: state.editRide,
});

class UpdateRide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedRide: {
                id: this.props.editRide.id || '',
                date: this.props.editRide.date || '',
                terrain: this.props.editRide.terrain || '',
                address: this.props.editRide.address || '',
                start_time: this.props.editRide.start_time || '',
                length: this.props.editRide.length || '',
            }
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            updatedRide: {
                ...this.state.updatedRide,
                [propertyName]: event.target.value,
            }
        });
    }

    updateRide = event => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_UPDATED_RIDE',
            payload: this.state.updatedRide,
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

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <UpdateRideField updatedRide={this.state.updatedRide} handleChange={this.handleChange} updateRide={this.updateRide} />
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
export default connect(mapStateToProps)(UpdateRide);