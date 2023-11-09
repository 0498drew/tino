import React from "react";
import Slider from "react-slick";
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';


const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],

     }
    return (
    <Slider {...settings}>
        <div className="testimonials py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="testimonials__author d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Drew Khalil</h6>
                    <p>CEO of Company</p>
                </div>                
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="testimonials__author d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Petie Gondwe</h6>
                    <p>Customer</p>
                </div>                
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="testimonials__author d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Tadala Moyo</h6>
                    <p>Customer</p>
                </div>                
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="testimonials__author d-flex align-items-center gap-4 mt-3">
                <img src={ava04} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Brandy Mwase</h6>
                    <p>Customer</p>
                </div>                
            </div>
        </div>
        <div className="testimonials py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="testimonials__author d-flex align-items-center gap-4 mt-3">
                <img src={ava05} className="w-25 h-25 rounded-2" alt=""/>
                <div>
                    <h6 className="mb-0 mt-3">Elu Longwe</h6>
                    <p>Customer</p>
                </div>                
            </div>
        </div>
    </Slider>
    );
}

export default Testimonials;