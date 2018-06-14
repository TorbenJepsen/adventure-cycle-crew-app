import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',

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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        marginBottom: theme.spacing.unit,
    },
    button: {
        marginTop: theme.spacing.unit,
    },
    header: {
        textAlign: 'center',

    }
});


function RegisterField(props) {

    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={40}>

                <Paper className={classes.paper}>
                    <Grid item xs={12}>
                        <h3 className={classes.header}>Join The Club!</h3>
                    </Grid>
                    <form onSubmit={props.registerUser} className={classes.container}>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="username">
                                    Username:</InputLabel>
                                <Input
                                    id="username"
                                    className={classes.textField}
                                    value={props.state.username}
                                    onChange={props.handleInputChangeFor('username')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <InputLabel htmlFor="password">
                                    Password:</InputLabel>
                                <Input
                                    className={classes.textField}
                                    type="password"
                                    name="password"
                                    value={props.state.password}
                                    onChange={props.handleInputChangeFor('password')}
                                />
                            </FormControl>

                        </Grid>
                        <div>
                            <FormControl>
                                <Button variant="raised" size="small" color="primary" type="submit" value="register" className={classes.button}>
                                    Register
                                </Button>

                            </FormControl>
                        </div>
                        <Grid item xs={12}>
                            <div>
                                <p></p>
                                <Link to="/home">Cancel</Link>
                            </div>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}


RegisterField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterField);