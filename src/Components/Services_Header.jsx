import React from "react";
import Service_Hero from "/assets/Services_Hero.jpeg";

function Services_Header(){
    return (
        <div 
            className="flex flex-row items-center justify-center"
            style={{
                backgroundImage: `url(${Service_Hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-row items-center justify-center py-10 md:py-16 lg:py-16">
                <p className="text-primary text-2xl text-center w-4/5 font-normal leading-normal tracking-wide md:text-4xl md:tracking-wide md:leading-relaxed lg:text-5xl lg:leading-relaxed xl:text-6xl xl:leading-relaxed">Transformăm spațiile într-un mediu sigur și curat!</p>
            </div>
        </div>
    )
}

export default Services_Header;