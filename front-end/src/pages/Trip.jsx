import React, {useState, useEffect} from "react";
import CommonSection from "../shared/CommonSection";


import "../styles/trip.css"
import tripData from '../assets/data/trips'
import TripCard from "./../shared/TripCard"
import SearchBar from "./../shared/SearchBar"
import Newsletter from "./../shared/Newsletter"
import { Container, Row, Col } from "reactstrap";


const Trip = () => {

    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(()=> {


        const pages = Math.ceil(5 / 4)
        setPageCount(pages) 

    },[page])



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
            <section>
                <Container>
                    <Row>
                        {tripData?.map(trip=> ( 
                            <Col lg="4" className="mb-4" key={trip.id}>
                                <TripCard trip={trip} />
                            </Col>
                        ))}

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
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default Trip;