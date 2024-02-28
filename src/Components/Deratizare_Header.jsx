import React from "react";
import Deratizare_Hero from "/assets/Deratizare_Hero.jpeg";

function Deratizare_Header(){
    return(
        <div 
            className="flex flex-row items-center justify-center"
            style={{
                backgroundImage: `url(${Deratizare_Hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-row items-center justify-center py-10 md:py-16 lg:py-16">
                <p className="text-primary text-2xl text-center w-4/5 font-semibold leading-normal tracking-wide md:text-3xl md:tracking-wide md:leading-relaxed lg:text-4xl lg:leading-relaxed xl:text-5xl xl:leading-relaxed">Derasovil - Împreună, eliminăm invadatorii neinvitați din locuința ta!</p>
            </div>
        </div>
    );
}

export default Deratizare_Header;
