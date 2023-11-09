import React, {useState} from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";


import { useNavigate} from "react-router-dom"


const Booking = ({trip, avgRating}) => {
    const {price, reviews} = trip;
    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01', //later it will be dynamic
        userEmail:'exmaple@gmail.com',
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:''
    })

    const handleChange = e => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
    };


    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number
    (serviceFee)

    // send data to the server
    const handleClick = e => {
        e.preventDefault();


        navigate("/thank-you")
    }

    return (
    <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>
                MWK{price} <span>/per person</span>
            </h3>
            <span className="trip_rating d-flex align-items-center">
                <i class="ri-star-s-fill"></i>
                {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>
        {/* ======== booking form =========*/}
        <div className="booking_form">
            <h5>Information</h5>
            <Form className="booking_info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        id="Full_name" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <input 
                        type="number" 
                        placeholder="Phone" 
                        id="phone" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup className="d-flex align-items-center gap-3">
                    <input 
                        type="date" 
                        placeholder="Full Name"
                        id="bookAt" 
                        required 
                        onChange={handleChange} 
                    />
                     <input 
                        type="number" 
                        placeholder="Guest" 
                        id="guestSize" 
                        required 
                        onChange={handleChange} 
                    />
                </FormGroup>
            </Form>
        </div>
        {/* ========= booking end ======== */}

        {/* ========= booking bottom ====== */}
        <div className="booking_bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                        MWK{price} <i class="ri-close-line"></i> 1 person
                    </h5>
                    <span> MwK{price}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Service charge</h5>
                    <span> MwK{serviceFee}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span> MwK{totalAmount}</span>
                </ListGroupItem>
            </ListGroup>
            <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
        </div>
    </div>
    );
};

export default Booking;