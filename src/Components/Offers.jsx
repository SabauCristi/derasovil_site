import React, { useEffect, useRef, useState } from 'react';
import offers from "./offers_info";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Services__Offers_Card from './Services__Offers_Card';
import Services_img from "/assets/Services_img.jpeg";
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
        <div className='flex flex-col items-center justify-center bg-gradient-to-tr from-cyan to-secondary'>
        <div className='flex flex-col items-center justify-center pt-12 w-full bg-primary'>
            <p className="text-center text-secondary text-3xl font-medium tracking-wide w-[90%] lg:text-5xl">Protecție continuă împotriva dăunătorilor</p>
            <p className="text-center text-secondary text-lg tracking-wide w-[80%] mt-10 mb-10 md:mb-16 md:w-[70%] lg:w-[60%] lg:text-xl lg:leading-relaxed xl:text-2xl">Cu o experiență de peste 10 de ani în domeniul controlului dăunătorilor, înțelegem importanța protejării casei tale și a familiei tale. Planurile noastre oferă de la tratamente cu o singură aplicare la servicii continue pentru controlul preventiv al dăunătorilor. În timpul vizitei inițiale, vom evalua situația și vom crea un plan pentru a elimina dăunătorii.</p>
            <p className="text-3xl text-secondary text-center font-semibold lg:text-5xl xl:text-5xl w-[90%] hidden lg:block">Siguranță și Responsabilitate</p>
            <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row lg:items-start w-[90%] mt-4 lg:mb-14 lg:mt-14 lg:w-[80%] lg:gap-4">
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <p className="text-3xl text-secondary text-center font-semibold lg:text-5xl w-[90%] lg:hidden">Siguranță și Responsabilitate</p>
                        <p className="text-center text-secondary text-lg tracking-wide w-[80%] mt-10 lg:mt-0 lg:text-start mb-4 md:mb-4 md:w-[80%] lg:w-[90%] lg:text-xl lg:leading-relaxed xl:text-2xl">La Derasovil, siguranța dvs. este prioritatea noastră absolută. Echipa noastră se asigură că fiecare etapă a serviciilor noastre este efectuată cu atenție și conform celor mai înalte standarde de siguranță. Folosim echipamente specializate pentru a garanta un mediu sigur pentru dvs. și pentru cei dragi. Cu noi, puteți avea încredere că lucrarea va fi efectuată în mod responsabil și cu atenție la detalii.</p>
                    </div>
                    <img src={Services_img} className="rounded-lg w-[80%] lg:w-[36%] mb-10 lg:aspect-square lg:object-cover lg:object-center xl:aspect-auto xl:w-[40%]"></img>
            </div>
        </div>
        <Slider {...settings} className='w-4/5 lg:w-[90%] mb-12 lg:mb-2 xl:w-[90%] mt-10 overflow-visible'>
        {offers.map((offer, index) => (
          <div key={index}>
            <div 
              style={{ 
                padding: "10px 10px", 
              }}
            >
              <Services__Offers_Card name={offer.name} url={offer.url} text={offer.text} path={offer.path} />
            </div>
          </div>
        ))}
        </Slider>
            <div className='hidden lg:flex flex-row w-[90%] justify-evenly'>
              <div className='w-full flex flex-row justify-center'>
                <Link to ="/derasovil_site/Deratizare" className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8 hover:shadow-secondary hover:shadow-md">Află mai multe</Link>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <Link to ="/derasovil_site/Dezinfectie" className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8 hover:shadow-secondary hover:shadow-md">Află mai multe</Link>
              </div>
              <div className='w-full flex flex-row justify-center'>
                <Link to ="/derasovil_site/Dezinsectie" className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mb-8 hover:shadow-secondary hover:shadow-md">Află mai multe</Link>
              </div>
            </div>
        </div>
    );

}

export default Serrvice_Section;