import React, {useState} from "react";


import { Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css'

import loginImg from '../assets/images/login.jpg'
import userIcon from '../assets/images/user.jpg'

const Login = () => {

    const [crententails ,setCredentials ] = useState({
        email:undefined,
        password:undefined
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = e => {
        e.preventDefault();
    };


    return <section>
        <Container>
            <Col lg='8' className="m-auto">
                <div className="login_container d-flex justify-content-between">
                    <div className="login_img">
                        <img src={"loginImg"} alt="" />
                    </div>

                    <div className="login_form">
                        <div className="user">
                            <img src={"userIcon"} alt="" />
                        </div>
                        <h2>Login</h2>
                        <form onSubmit={handleClick}>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email"
                                onChange={handleChange} />
                            </FormGroup>
                             <FormGroup>
                                <input type="password" placeholder="Password" require id="password"
                                onChange={handleChange} />
                            </FormGroup>
                            <Button className="btn secondary_btn auth_btn" type="submit">Login</Button>
                        </form>
                        <p>Don't have an account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>
            </Col>
        </Container>
    </section>
};

export default Login;