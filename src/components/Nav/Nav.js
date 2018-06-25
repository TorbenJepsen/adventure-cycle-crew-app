import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
});

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <MenuItem>
        <NavLink to="/user">
          <ListItemText primary="User Home" />
          </NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink to="/add">
          <ListItemText primary="Add a New Ride" />
          </NavLink>
        </MenuItem>
        <MenuItem> 
        <NavLink to ="/ride">
          <ListItemText primary="Upcoming Rides" />
          </NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink to="/myrides">
          <ListItemText primary="Manage My Rides" />
          </NavLink>
        </MenuItem>
        <MenuItem>
        <NavLink to="/info">
          <ListItemText primary="About" />
          </NavLink>
        </MenuItem>
      </List>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
