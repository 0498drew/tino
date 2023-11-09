
import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links = [
  {
    path: "/login",
    display: "Login",
  },
  {
    path: '/register',
    display: 'Register',
  }
];

const quick_links2 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: '/trip',
    display: 'Trip',
  }
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer d-flex justify-content-between">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col md="3">
            <div className="logo">
              <img src={logo} alt="logo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
              <div className="social-links d-flex align-items-center gap-">
                <span>
                  <Link to='#'><i className="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-instagram-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i className="ri-whatsapp-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <div>
              <h5 className="footer_link-title">Discover</h5>
              <ListGroup className="footer_quick-links">
                {quick_links2.map((link, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={link.path}>{link.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div>
              <h5 className="footer_link-title">Quick Links</h5>
              <ListGroup className="footer_quick-links">
                {quick_links.map((link, index) => (
                  <ListGroupItem key={index} className="ps-0 border-0">
                    <Link to={link.path}>{link.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div>
              <h5 className="footer_link-title">Contact Us</h5>
              <ListGroup className="footer_quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className="mb-0">Mzuzu, Malawi</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">eGOtechmw@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i className="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className="mb-0">+265998810103</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copy-right">© {year}, design and developed by Andrew Mwase. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
