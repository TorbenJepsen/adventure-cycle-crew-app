import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing.unit * 5,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 40,

      },
});

const terrains = [
    {
        value: 'Paved Trail',
        label: 'Paved Trail',
    },
    {
        value: 'Rough Trail',
        label: 'Rough Trail',
    },
    {
        value: 'Street',
        label: 'Street',
    },
    {
        value: 'Hills',
        label: 'Hills',
    },
];

function AddRideField(props) {

    const { classes } = props;

    return (
        <div className={classes.root}>
              <Grid container spacing={32}>
              <Paper className={classes.paper}>
        <form  className={classes.container} noValidate autoComplete="off" onSubmit={props.addNewRide}>
        <Grid item xs={12}>
            <TextField
                required
                id="Meet Up Spot"
                label="Meet Up Spot"
                type="text"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="Enter Address"
                value={props.newRide.address}
                onChange={props.handleChange('address')}
                fullWidth
                margin="normal"
            />
            </Grid>
        <Grid item xs={12}>

            <TextField
                required
                id="date"
                label="Date"
                type="date"
                className={classes.textField}
                value={props.newRide.date}
                onChange={props.handleChange('date')}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="terrain"
                select
                label="Select"
                className={classes.textField}
                value={props.newRide.terrain}
                onChange={props.handleChange('terrain')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                helperText="Please select a type of terrain"
                margin="normal"
            >
                {terrains.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </Grid>

            <Grid item xs={12}>
            <TextField
                required
                id="time"
                label="Start Time"
                type="time"
                value={props.newRide.start_time}
                onChange={props.handleChange('start_time')}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="ride length"
                label="Length of Ride"
                value={props.newRide.length}
                onChange={props.handleChange('length')}
                placeholder="Approx. length in miles"
                type="number"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                margin="normal"
            />
            </Grid>

                <FormControl>
                    <Button variant="raised" size="small" color="primary" type="submit">
                        Add New Ride!
            </Button>
                </FormControl>

        </form>
        </Paper>
        </Grid>
        </div>
    );
}


AddRideField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddRideField);