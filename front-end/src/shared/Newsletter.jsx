import React from "react";
import './newsletter.css';

import {Container, Row, Col} from 'reactstrap';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <Container>
                <Row></Row>
                <Col lg="6">
                    <div className="newsletter_content">
                        <h2>
                            Subscribe to our newsletter to get the latest trends & news
                        </h2>
                        <div className="newsletter_input">
                            <input type="text" placeholder="Enter your email address"/>
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                </Col>
            </Container>
        </section>
    );
}

export default Newsletter;