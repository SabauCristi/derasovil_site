import React from "react";
import Hero_img from "/assets/Hero_About.jpeg"

function Hero_about(){
    return(
        <div className="relative flex flex-row items-center justify-center bg-[#F6F9FC] z-0 overflow-hidden shadow-md xl:h-[70vh]">
            <div className="flex flex-row w-[95%] items-start mt-4 md:mt-10 py-8">
                <p className="text-left text-2xl text-secondary font-semibold basis-7/12 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:basis-6/12 md:leading-relaxed md:tracking-wider">Derasovil: Siguranță și devotament pentru un mediu sănătos în România.</p>
                <div className="flex flex-col justify-end items-end basis-6/12 lg:basis-5/12">
                    <img src={Hero_img} style={{ transform: 'translateX(30%) scale(1.6)' }} className="object-cover object-center rounded-s-full md:aspect-[15/12] aspect-[12/10] lg:hidden mt-5"></img>
                    <img src={Hero_img} style={{ transform: 'translateX(25%) scale(1.5)' }} className="object-cover object-center rounded-s-full md:aspect-[15/12] aspect-[12/10] hidden lg:block xl:w-4/5"></img>
                </div>
            </div>
        </div>
    );
}

export default Hero_about;