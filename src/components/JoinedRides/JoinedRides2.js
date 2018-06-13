import React from 'react';
import JoinedRidesAccordion from '../JoinedRidesAccordion/JoinedRidesAccordion';




function JoinedRides2(props) {

    return (
        <div>
                    {props.joined.map(ride => <JoinedRidesAccordion key={ride.id}
                    ride = {ride} leaveRide={props.leaveRide} allRiders={props.allRiders}/>
                    )}

        </div>
    );
}

export default JoinedRides2;