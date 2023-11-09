import React from "react";
import TripCard from "../../shared/TripCard";
import tripData from "../../assets/data/trips";

import { Col } from 'reactstrap';


const FeaturedTripList = () => {
    return (
        <>
            {tripData?.map(trip => (
                <Col lg="3" className="mb-4" key={trip.id}>
                    <TripCard trip={trip} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTripList;