import React from 'react';
import CreatedRidesAccordion from '../CreatedRidesAccordion/CreatedRidesAccordion';


function CreatedRides2(props) {

    return (
        <div>
                    {props.created.map(ride => <CreatedRidesAccordion key={ride.id}
                    ride = {ride} cancelRide={props.cancelRide} handleClickEdit={props.handleClickEdit} allRiders={props.allRiders}/>
                    )}
        </div>
    );
}

export default CreatedRides2;