import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
    }
});

function RideItemExpansion(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Ride Details</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Starts: {props.formattedTime}
                        <br />
                        Ride Length: {props.ride.length} miles
                        <br />
                        Terrain: {props.ride.terrain}
                        <br />
                        Meet Up Spot: {props.ride.address}
                        <br />
                        <br />
                        <div className={classes.button}>
                        <Button variant="raised" size="large" color="primary" onClick={() => props.handleJoinRide(props.ride)}>
                            RSVP!
                        </Button>
                        </div>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

RideItemExpansion.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RideItemExpansion);