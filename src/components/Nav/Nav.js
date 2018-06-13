import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import lightBlue from '@material-ui/core/colors/lightBlue';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: lightBlue,
    // backgroundColor: theme.palette.background.paper,
    zIndex: '999999 !important',
  },
});

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <MenuItem button component='a' href="/user">
          <ListItemText primary="User Home" />
        </MenuItem>
        <MenuItem button component='a' href="/add">
          <ListItemText primary="Add a New Ride" />
        </MenuItem>
        <MenuItem button component='a' href="/ride">
          <ListItemText primary="Upcoming Rides" />
        </MenuItem>
        <MenuItem button component='a' href="/myrides">
          <ListItemText primary="Manage My Rides" />
        </MenuItem>
        <MenuItem button component='a' href="/info">
          <ListItemText primary="About" />
        </MenuItem>
      </List>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
