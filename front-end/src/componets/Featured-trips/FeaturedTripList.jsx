import React from "react";
import TripCard from "../../shared/TripCard";
import { Col } from 'reactstrap';

import userFetch from './../../hooks/userFetch';
import { BASE_URL} from './../../utils/config';

const FeaturedTripList = () => {

    const {data: featuredTrips, loading, error } = userFetch('${BASE_URL}/trips/search/getFeaturedTrips');

    return (
        <>
                {
                    loading && <h4>loading.......</h4>
                }
                 {
                    error && <h4>{error}</h4>
                }
            {!loading && 
            !error &&
            featuredTrips?.map(trip => (
                <Col lg="3" md='6' sm='6' className="mb-4" key={trip._id}>
                    <TripCard trip={trip} />
                </Col>
            ))}
        </>
    );
};

export default FeaturedTripList;