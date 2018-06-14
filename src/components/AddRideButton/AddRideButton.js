import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

function AddRideButton(props) {
    const { classes } = props;
    return (
        <div>
                <Link to="/add">
                    <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
                        <AddIcon />
                    </Button>
                </Link>
        </div>
    );
}

AddRideButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddRideButton);