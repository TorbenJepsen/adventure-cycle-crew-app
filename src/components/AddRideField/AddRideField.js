import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
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
        <form className={classes.container} noValidate autoComplete="off" onSubmit={props.addNewRide}>
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
            <TextField
                required
                id="terrain"
                select
                label="Terrain Type"
                defaultValue="Street"
                className={classes.textField}
                value={props.newRide.terrain}
                onChange={props.handleChange('terrain')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                margin="normal"
            >
                {terrains.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </TextField>
            <TextField
                required
                id="full-width"
                label="Starting Address"
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="Enter Address"
                value={props.newRide.address}
                onChange={props.handleChange('address')}
                fullWidth
                margin="normal"
            />
            <TextField
                required
                id="time"
                label="Start Time"
                type="time"
                defaultValue="07:30"
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
            <div>
                <FormControl>
                    <Button variant="raised" size="small" color="primary" type="submit">
                        Add New Ride!
            </Button>
                </FormControl>
            </div>
        </form>
    );
}


AddRideField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddRideField);