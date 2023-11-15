import React, {useState, useEffect} from "react";
import CommonSection from "../shared/CommonSection";


import "../styles/trip.css"
import TripCard from "./../shared/TripCard"
import SearchBar from "./../shared/SearchBar"
import Newsletter from "./../shared/Newsletter"
import { Container, Row, Col } from "reactstrap";

import userFetch from '../hooks/userFetch';
import { BASE_URL } from "../utils/config";


const Trip = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const {data:trips,
         loading, 
         error,
         } = userFetch('${BASE_URL}/trips?page=${page}');
    const {data:tripsCount} = userFetch('${BASE_URL}/trips/search/getTripCount');


    useEffect(()=> {
        const pages = Math.ceil(tripsCount / 8)
        setPageCount(pages);
        window.scroll(0,0)
    },[page, tripsCount, trips]);



    return (
        <>
            <CommonSection title={"All Trips"} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {
                        loading && <h4 className="text-center pt-5">Loading.....</h4>
                    }
                    {
                        error && <h4 className="text-center pt-5">{error}</h4>
                    }
                    {!loading && !error && <Row>
                        {trips?.map(trip=> ( 
                            <Col lg="4" md='6' sm='6' className="mb-4" key={trip._id}>
                                <TripCard trip={trip} />
                            </Col>
                        ))};

                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-between mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number=> (
                                    <span key={number} 
                                    onClick={()=> setPage(number)}
                                    className={page === number ? "active_page" : "" }
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                    }  
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default Trip;