import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuListComposition from '../MenuList/MenuList';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonsAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" title={<img src="images/bike-logo-icon-47219.png" alt="bike logo" />}>
        <Toolbar>
          <MenuListComposition />
          <img src="images/bike-logo-icon-47219.png" height="70" width="70" className="logo" />
          <Typography variant="title" color="inherit" className={classes.flex}>
            WBL Adventure Cycle Club
         </Typography>
          <Button color="inherit" >Login</Button>
          <Button color="inherit" >Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonsAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonsAppBar);