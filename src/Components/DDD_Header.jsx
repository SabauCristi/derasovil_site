import React from "react";

function Deratizare_Header(props){
    return(
        <div 
            className="flex flex-row items-center justify-center"
            style={{
                backgroundImage: `url(${props.HeaderImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-row items-center justify-center py-10 md:py-16 lg:py-16">
                <p className="text-primary text-2xl text-center w-4/5 xl:w-[65%] font-semibold leading-normal tracking-wide md:text-3xl md:tracking-wide md:leading-relaxed lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed">{props.text}</p>
            </div>
        </div>
    );
}

export default Deratizare_Header;
