import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class WelcomePage extends React.Component {

    render(){

    return (
      <div className="container1">
        <img src="images/wbl-logo-3.jpg" alt="club logo" width='100%'/>
        <div className="button">
        <Button variant="contained" color="primary"><Link to="/home"> Login</Link></Button>
        </div>
      </div>
    );
  }
}


export default WelcomePage;