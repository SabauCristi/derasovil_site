import React, { useEffect, useRef, useState } from 'react';
import Service_Card from "./Service_Card";
import services from "./services";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }


function Serrvice_Section(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1438,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1022,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 766,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]

    };

    return (
        <div className='bg-gradient-to-bl from-cyan to-secondary flex flex-col items-center justify-center'>
            <p className='text-4xl text-primary text-center mt-4 lg:text-5xl xl:text-6xl lg:py-3'>Pentru cine sunt serviciile noastre?</p>
            <Slider {...settings} className='w-4/5 mb-10 xl:w-[90%]'>
                {services.map((service, index) => (
                    <div key={index}>
                        <Service_Card name = {service.name} url = {service.url} text = {service.text} />
                    </div>
                ))}
            </Slider>
            <Link to = '/derasovil_site/Servicii' className='text-primary text-xl mb-6 bg-brick rounded-full w-1/2 pb-2 pt-1 md:w-2/5 md:text-xl text-center lg:w-1/3 lg:text-2xl xl:w-1/4 hover:shadow-md hover:shadow-black'>Află mai multe</Link>          
        </div>
    );

}

export default Serrvice_Section;