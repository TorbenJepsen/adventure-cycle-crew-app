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
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

const styles = theme => ({
    root: {
        width: '100%',
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
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class CreatedRidesExpansionPanels extends React.Component {
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
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
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
                                <Button variant="contained" color="primary" aria-label="Edit" onClick={() => this.props.handleClickEdit(this.props.ride)} className={classes.button}>
                                    Edit
                                    <Edit className={classes.rightIcon} />
                                </Button>
                                <Button variant="contained" color="secondary" className={classes.button} onClick={() => this.props.cancelRide(this.props.ride)} aria-label="Delete">
                                    Delete
                                    <DeleteIcon className={classes.rightIcon} />
                                </Button>

                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Card>
            </div>
        );
    }
}

CreatedRidesExpansionPanels.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatedRidesExpansionPanels);