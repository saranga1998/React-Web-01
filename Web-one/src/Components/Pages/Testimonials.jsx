import React from 'react'
import { testimonials } from '../Data/dummuydata'
import { FormatQuote, Height } from '@mui/icons-material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { height } from '@mui/system';

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
                                
                                <div className='img'>
                                    <img src={val.image} />
                                </div>
                                <h3>{val.name}</h3>
                                <label>{val.post}</label>
                                <p>{val.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Testimonials
// --primaryBackground: #212222;--secondaryBackground: #2f3030;