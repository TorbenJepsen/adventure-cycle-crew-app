import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    width: '100%',
    color: '#BEBEBE'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  panel: {
    backgroundColor: '#EBE9E9',
}
});

class JoinedRidesExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const date = moment(this.props.ride.date).format("MMMM Do YYYY");
    const time = this.props.ride.start_time;
    const formattedTime = moment(time, "HH:mm:ss").format("h:mm A");
    const riderList = this.props.allRiders.filter(rider => rider.ride_id === this.props.ride.id);
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className={classes.root}>
      <Card>
        <ExpansionPanel expanded={expanded === 'panel1'} className={classes.panel} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{date}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                <b>Where:</b> {this.props.ride.address}
                <br />
                <b>Starts:</b> {formattedTime}
                <br />
                <b>Terrain:</b> {this.props.ride.terrain}
                <br />
                <b>Length:</b> {this.props.ride.length} miles
                <br />
                <b>Bikers:</b> {riderList.length}
                <br />
                <br />
                <Button variant="raised" size="small" color="secondary" onClick={() => this.props.leaveRide(this.props.ride)}>
                Leave Ride?
            </Button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </Card>
      </div>
    );
  }
}

JoinedRidesExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinedRidesExpansionPanels);