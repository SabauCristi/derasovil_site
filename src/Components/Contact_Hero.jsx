import React from "react";
import Hero_img from "/assets/Contact_Hero_img.jpeg"


function Contact_Hero(){
    return(
        <div 
            className="flex flex-row items-center justify-center shadow-md bg-primary"
            style={{
                backgroundImage: `url(${Hero_img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
            }}
        >
            <div className="flex flex-row items-center justify-end py-8 md:py-16 lg:py-20 xl:py-24">
                <p className="text-primary text-xl text-center w-2/4 pr-4 lg:pr-8 font-semibold leading-normal tracking-wide md:text-4xl md:tracking-wide md:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-relaxed">Contactează-ne și lasă-ne să îți depășim așteptările!</p>
            </div>
        </div>
    )
}

export default Contact_Hero;