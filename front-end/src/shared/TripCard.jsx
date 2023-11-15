import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";

import './trip-card.css';
const TripCard = ({ trip }) => {
    const { _id, title, city, photo, price, featured, reviews } = trip;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    return (
        <div className="trip_card">
            <Card>
                <div className="trip_img">
                    <img src={photo} alt="trip_img"/>
                    {featured && <span>Featured</span>}
                </div>
                <CardBody>
                    <div className="card_top d-flex align-items-center justify-content-between">
                        <span className="trip_location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i> {city}
                        </span>
                        <span className="trip_rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                             {totalRating === 0 ? (
                                "Not rated"
                                ) : (<span>({reviews.length})</span>
                                )}
                        </span>
                    </div>
                    <h5 className="trip_title">
                        <Link to={`/trip/${_id}`}>{title}</Link>
                    </h5>

                    <div className="card_bottom d-flex align-items-center 
                    justify-content-between mt-3">
                        <h5>
                            Mwk{price} <span>/per person</span>
                        </h5>
                        <button className="booking_btn">
                            <Link to={`/trip/${_id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

};

export default TripCard;