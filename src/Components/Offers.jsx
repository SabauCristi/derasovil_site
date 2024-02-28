import React, { useEffect, useRef, useState } from 'react';
import offers from "./offers_info";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services__Offers_Card from './Services__Offers_Card';
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fill: "grey" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fill: "grey" }}
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
        slidesToShow: 3,
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
                slidesToShow: 1,
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
        <div className='flex flex-col items-center justify-center bg-gradient-to-tl from-cyan to-secondary'>
        <div className='flex flex-col items-center justify-center pt-12 w-full bg-primary'>
            <p className="text-center text-secondary text-3xl font-medium tracking-wide w-[90%] lg:text-5xl">Protecție continuă împotriva dăunătorilor</p>
            <p className="text-center text-secondary text-lg tracking-wide w-[80%] mt-10 mb-10 md:mb-16 md:w-[70%] lg:w-[60%] lg:text-xl lg:leading-relaxed">Cu o experiență de peste 10 de ani în domeniul controlului dăunătorilor, înțelegem importanța protejării casei tale și a familiei tale. Planurile noastre oferă de la tratamente cu o singură aplicare la servicii continue pentru controlul preventiv al dăunătorilor. În timpul vizitei inițiale, vom evalua situația și vom crea un plan pentru a elimina dăunătorii.</p>
        </div>
        <Slider {...settings} className='w-4/5 lg:w-[90%] mb-10 lg:mb-2 xl:w-[90%] mt-10 overflow-visible'>
      {offers.map((offer, index) => (
        <div key={index}>
          <div 
            style={{ 
              padding: "10px 10px", 
            }}
          >
            <Services__Offers_Card name={offer.name} url={offer.url} text={offer.text} />
          </div>
        </div>
      ))}
    </Slider>
            <div className='hidden lg:flex flex-row w-[90%] justify-evenly'>
              <div className='w-full flex flex-row justify-center'>
                <Link to ="/derasovil_site/Deratizare" className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8 hover:shadow-secondary hover:shadow-md">Află mai multe</Link>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <p className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8">Află mai multe</p>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <p className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8">Află mai multe</p>
              </div>
            </div>
        </div>
    );

}

export default Serrvice_Section;