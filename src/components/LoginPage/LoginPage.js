import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import ButtonsAppBar from '../AppBar/AppBar';
import LoginField from '../LoginField/LoginField';



const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      showPassword: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };


  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <ButtonsAppBar />
        {this.renderAlert()}
        <div>
        <LoginField login={this.login} handleInputChangeFor={this.handleInputChangeFor} handleMouseDownPassword={this.handleMouseDownPassword} handleClickShowPassword={this.handleClickShowPassword} state={this.state}/>
        </div>
        <img src="images/wbl-club-log.jpg" alt="club logo" height="300" width="200" display="flex" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginPage);
