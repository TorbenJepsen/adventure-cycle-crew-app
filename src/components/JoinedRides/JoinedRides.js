import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JoinedRidesRows from '../JoinedRidesRows/JoinedRidesRows';

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

function JoinedRides(props) {
    
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Date</CustomTableCell>
                        <CustomTableCell>Address</CustomTableCell>
                        <CustomTableCell>Ride Start</CustomTableCell>
                        <CustomTableCell>Terrain</CustomTableCell>
                        <CustomTableCell numeric>Length</CustomTableCell>
                        <CustomTableCell>Riders</CustomTableCell>
                        <CustomTableCell>Unjoin</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.joined.map(ride => <JoinedRidesRows key={ride.id}
                    ride = {ride} leaveRide={props.leaveRide} allRiders={props.allRiders}/>
                    )}
                </TableBody>
            </Table>
        </Paper>
    
    );
}

JoinedRides.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JoinedRides);