import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const styles = {
    card: {
        width: 300,
        float: 'left',
        margin: '10px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    contentHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

function RideItem(props) {
    const date = moment(props.ride.date).format("MMMM Do YYYY");
    const time = props.ride.start_time;
    const formattedTime = moment(time, "HH:mm:ss").format("h:mm A");
    const { classes } = props;
    
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                // image="/static/images/cards/contemplative-reptile.jpg"
                // title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" className={classes.contentHeader}>
                        {date}
                    </Typography>
                    <Typography component="p">
                        Start Time: {formattedTime}
                        <br /> 
                        Length of Ride: {props.ride.length} miles
                        <br />
                        Terrain: {props.ride.terrain}
                        <br />
                        Starting Address: {props.ride.address}
                    </Typography>
                </CardContent>
                <CardActions className={classes.button}>
                    <Button variant="raised" size="large" color="primary" onClick={() => props.handleJoinRide(props.ride)}>
                        Join this Ride!
            </Button>

                </CardActions>
            </Card>
        </div>
    );
}

RideItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RideItem);


