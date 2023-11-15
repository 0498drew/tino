import React, {useState} from "react";

import CommonSection from "./../shared/CommonSection";
import { Container, Row, Col }   from "reactstrap";

import { userLocation} from "react-router-dom";
import TripCard from './../shared/TripCard';
import Newsletter from './../shared/Newsletter';

const SearchResultsList = () => {

    const location = userLocation();

    console.log(data);

    return (
        <>
            <CommonSection title={"Trip Search Result"} />
            <section>
                <Container>
                    <Row>
                        {data.length ===0 ? ( <h4 className='text-centre'>No trip found</h4> ) : ( data?.map(trip =>( <Col> lg='3' className='mb-4' key='{trip.id}' <TripCard trip={trip} /></Col>))
                        )};          
                    </Row>
                </Container>
                <Newsletter/>
            </section>
        </>
    );
};

export default SearchResultsList;