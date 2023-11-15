import React from "react";
import ServiceCard from "./ServiceCard"; 
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.jpg';
import customizationImg from '../assets/images/customization.jpg';

const serviceData = [
    {
        weatherImg: weatherImg,
        title: "Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {   
        guideImg: guideImg,
        title: "Best Trip Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    },
    {   
        customizationImg: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
]
const ServiceList = () => {
    return (
        <>
            {serviceData.map((item, index) => (     
                <Col lg="4" md='6' sm="12"  className="mb-4" key={index}>    
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
}  

export default ServiceList;