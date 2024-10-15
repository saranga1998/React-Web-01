import React from 'react'
import { testimonials } from '../Data/dummuydata'
import { FormatQuote } from '@mui/icons-material'
import Ts from '../Data/Images/testimonials/team-1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className='testimonials hero'>
                <div className='containerSlide'>
                    <Slider {...settings}>
                        {testimonials.map((val) => (
                            <div className='box'>                               
                                <p>{val.text}</p>
                                <div className='img'>
                                    <img src={Ts} />
                                </div>
                                <h3>{val.name}</h3>
                                <label>{val.post}</label>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials
