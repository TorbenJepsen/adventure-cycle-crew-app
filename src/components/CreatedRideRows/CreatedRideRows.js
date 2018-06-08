import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});


function CreatedRidesRows(props) {
    const date = moment(props.ride.date).format("MMMM Do YYYY");
    const time = props.ride.start_time;
    const formattedTime = moment(time, "HH:mm:ss").format("h:mm A");
    const { classes } = props;
    return (

        <TableRow className={classes.row}>
            <CustomTableCell component="th" scope="row">
                {date}
            </CustomTableCell>
            <CustomTableCell>{props.ride.address}</CustomTableCell>
            <CustomTableCell>{formattedTime}</CustomTableCell>
            <CustomTableCell>{props.ride.terrain}</CustomTableCell>
            <CustomTableCell numeric>{props.ride.length} miles</CustomTableCell>
            <CustomTableCell>Riders</CustomTableCell>
            <CustomTableCell>
            <Button variant="raised" size="small" color="primary">
                Edit Ride
            </Button>
            </CustomTableCell>
            <CustomTableCell>
            <Button variant="raised" size="small" color="secondary" onClick={() => props.cancelRide(props.ride)}>
                Remove Ride?
            </Button>
            </CustomTableCell>
        </TableRow>
    );
}

CreatedRidesRows.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatedRidesRows);