import React from "react";
import '../styles/home.css';

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero.jpg';
import heroImg02 from '../assets/images/hero02.jpg';
import experienceImg from '../assets/images/experience.jpg';
import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import FeaturedTripList from "../componets/Featured-trips/FeaturedTripList";
import Newsletter from "../shared/Newsletter";
import Testimonials from "../componets/Testimonials/Testimonials";
import ServiceList from "../services/ServiceList";

const Home = () => {
    return ( 
        <>
 
        {/* ======hero section start====== */}
        <section>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="hero_content">
                        <div className="hero_subtitle d-flex align-items-center">
                             <Subtitle Subtitle={"Book with us"} />
                        </div>
                        <h2>
                            Travel digital to create <span className="highlight">new experiences</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </Col>

                <Col lg="6">
                    <div className="hero_img-box mt-2">
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="hero_img-box mt-3 ">
                        <img src={heroImg02} alt=""/>
                    </div>
                </Col>
                <SearchBar/>
            </Row>
        </Container>
        </section>
        {/* ======hero section end======= */}
        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <Subtitle Subtitle={"Services"} />
                        <h2 className="service_title">We Provide Best Services</h2>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ======featured trip section start====== */}
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <Subtitle Subtitle={"Explore"} />
                        <h2 className="featured_trip-title">Our Featured Trips</h2>
                    </Col>
                    <FeaturedTripList />
                </Row>
            </Container>
        </section>
        {/* ======featured trip section end====== */}


        {/* ======experience section start====== */}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience_content">
                            <Subtitle Subtitle={"Experience"} />
                            <h2>
                                Experience traveling <br/> we will serve you
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="counter_wrapper d-flex align-items-center gap-5">
                            <div className="counter_box">
                                <span>10k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter_box">
                                <span>5k+</span>
                                <h6>Regular client</h6>
                            </div>
                            <div className="counter_box">
                                <span>2</span>
                                <h6>Years experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience_img d-flex align-items-center gap-5">
                            <img src={experienceImg} alt=""/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* =======experience section end====== */}

        {/* ======testimonial section start====== */}
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <Subtitle Subtitle={"Testimonial"} />
                        <h2 className="testimonial_title">What Our Client Say about us</h2>
                    </Col>
                    <Col lg="12">
                        <Testimonials />
                    </Col>
                </Row>
            </Container>
        </section>

        {/* ======testimonial section end====== */}
        <Newsletter />
    </>
    ); 
};

export default Home;