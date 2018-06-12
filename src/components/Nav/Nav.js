import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem button component='a' href="/user">
          <ListItemText primary="User Home" />
        </ListItem>
        <ListItem button component='a' href="/add">
          <ListItemText primary="Add a New Ride" />
        </ListItem>
        <ListItem button component='a' href="/ride">
          <ListItemText primary="Upcoming Rides" />
        </ListItem>
        <ListItem button component='a' href="/myrides">
          <ListItemText primary="Manage My Rides" />
        </ListItem>
        <ListItem button component='a' href="/info">
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
