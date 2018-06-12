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
import BikerList from '../BikerList/BikerList';

const styles = {
    card: {
        width: 300,
        float: 'left',
        margin: '10px',
        padding: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width: 200,
        display: 'flex',
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
   
    let riderList = props.allRiders.filter(rider => rider.ride_id === props.ride.id);
    const { classes } = props;

    const imageUrl = () => {
    if(props.ride.terrain === 'Rough Trail'){
        const image = "/images/rough.png";
        return image;
    } else if(props.ride.terrain === 'Paved Trail'){
        const image = "/images/Trail2.png";
        return image;
    } else if(props.ride.terrain === 'Street'){
        const image = "/images/street2.png";
        return image;
    } else {
        const image = "/images/hills.png";
        return image;
    }
}
    
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                image={ imageUrl() }
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
                    <BikerList riderList={riderList}/>
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


