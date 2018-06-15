import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  getStarted = () => {
    console.log('button clicked');
    this.props.history.push('ride');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="container1">
          <h1
            id="welcome"
          >
            Welcome { this.props.user.userName }!
          </h1>
        <img src="images/wbl-logo-3.jpg" alt="club logo" width='100%'/>
        <div className="button">
        <Button variant="raised" color="primary" onClick={() => this.getStarted()}>Click Here to Get Started</Button>
        </div>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

