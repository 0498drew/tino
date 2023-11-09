import React, {useRef, useState} from "react";
import '../styles/trip-details.css'
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tripData from '../assets/data/trips'
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.png"
import Booking from "../componets/Booking/Booking"; 
import Newsletter from "../shared/Newsletter"


const TripDetails = () => {
    const {id} = useParams();
    const reviewMsgRef = useRef('')
    const [tripRating, setTripRating]= useState(null)

    // This is static data later we will call our API and load our data from database
    const trip = tripData.find(trip=> trip.id === id);


    // destructure properties from trip object
    const {
        photo, 
        title,
        desc, 
        price, 
        reviews, 
        address, 
        city, 
        distance, 
        maxGroupSize,
    } = trip;

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    // format date
    const options = { day: "numeric", month: "long", year: "numeric"};

    // submit request to the server
    const submitHandler = e=>{
        e.preventDefault()
        const reviewText = reviewMsgRef.current.value;

        // later will call API
    }

    return ( <> 

    <section>
        <Container>
            <Row>
                <Col lg="8">
                    <div className="trip_content">
                        <img src={photo} alt="" />
                        <div className="trip_info">
                            <h2>{title}</h2>
                            <div className="d-flex align-items-center gap-5">
                            <span className="trip_rating d-flex align-items-center gap-1">
                                <i 
                                    class="ri-star-fill"
                                    style={{color: "#faa835"}}
                                ></i> 
                                {avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? (
                                    "Not rated"
                                ) : (
                                    <span>({reviews?.length})</span>
                                )}
                            </span>
                            <span>
                                <i class="ri-map-pin-user-fill"></i> {address}
                            </span>
                            </div>
                            <div className="trip_extra-details">
                                <span>
                                    <i className="ri-map-pin-2-line"></i> {city}
                                </span>
                                <span>
                                    <i className="ri-money-dollar-circle-line"></i> MWK{price} /per
                                </span>
                                <span>
                                    <i className="ri-map-pin-time-line"></i> {distance} k/m
                                </span>
                                <span>
                                    <i className="ri-group-line"></i> {maxGroupSize} people
                                </span>
                            </div>
                            <h5>Description</h5>
                            <p>{desc}</p>
                        </div>
                        {/* ========== trip reviews section ========= */}
                        <div className="trip_reviews mt-4">
                            <h4>Reviews ({reviews?.length} reviews)</h4>

                            <Form onSubmit={submitHandler}>
                                <div className="d-flex align-items-center gap-3 rating_group">
                                    <span onClick={()=> setTripRating(1)}>
                                        1<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=> setTripRating(2)}>
                                        2<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=> setTripRating(3)}>
                                        3<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=> setTripRating(4)}>
                                        4<i class="ri-star-s-fill"></i>
                                    </span>
                                    <span onClick={()=> setTripRating(5)}>
                                        5<i class="ri-star-s-fill"></i>
                                    </span>
                                </div>
                                <div className="review_input">
                                    <input 
                                    type="text" 
                                    ref={reviewMsgRef} 
                                    placeholder="share your thoughts"
                                    required
                                    />
                                    <button className="btn primary_btn text-white" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                            <ListGroup className="user_reviews">
                                {
                                    reviews?.map(review=>(
                                        <div className="review_item">
                                            <img src={avatar} alt="" />

                                            <div className="w-100">
                                                <div className="d-flex align-items-center justify-content-around">
                                                    <div>
                                                        <h5>drew</h5>
                                                        <p>
                                                            {new Date("01-21-2023").toLocateDateString(
                                                                "en-US",
                                                                 options
                                                            )}
                                                        </p>
                                                    </div>
                                                    <span className="d-flex align-items-center">
                                                        <i class="ri-star-s-fill"></i>
                                                    </span>
                                                </div>
                                                <h6>Amazing trip</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </ListGroup>

                        </div>
                        {/* ========== trip reviews section end ========= */}
                    </div>
                </Col>
                <Col lg='4'>
                    <Booking trip={trip} avgRating={avgRating} />
                </Col>
            </Row>
        </Container>
        </section>
        <Newsletter />

    </>
    );
};

export default TripDetails;