import React, {useRef} from "react";
import '/.search-bar.css';
import {Col, Form, FormGroup} from "reactstrap";
import { BASE_URL} from '/../utils/config';

import { userNavigate} from 'react-router-dom';

const SearchBar = () => {

    const locationRef = useRef(0);
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const  navigate = userNavigate();


    const searchHandler = () => {

        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if(location === "" || distance === "" || maxGroupSize === ""){
            return alert("All fields are required");
        }

        const res = await fetch('${BASE_URL}/trips/search/getTripBySearch?city=${location}&distance${distance}&maxGroupSize=${maxGroupSize}')

        if(!res.ok)alert('Something went wrong')

        const result = await res.json()

        navigate('/trips/search?city=${location}&distance${distance}&maxGroupSize=${maxGroupSize}', {state: result.data})

    };

    return <Col lg="12">
        <div className="search-bar">
            <Form className="d-flex align-items gap-4">
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder="Where are you going?"
                         ref={locationRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-fast">
                    <span><i class="ri-map-pin-user-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder="Distance k/m" ref={distanceRef}/>
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form_group form_group-last">
                    <span><i class="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type="number" placeholder="0" ref={maxGroupSizeRef}/>
                    </div>
                </FormGroup>
                <span className="search-icon" typeof="submit" onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
    </Col>
};

export default SearchBar;