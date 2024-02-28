import React from "react";
import { Link } from "react-router-dom";

function Services__Offers_Card(props){
    return(
        <div className="w-full flex flex-col items-center gap-3 bg-transparent xl:px-6 mb-2 lg:h-[550px] xl:h-[550px] shadow-lg rounded-lg">
            <div className="flex flex-col justify-center w-5/6 xl:w-full gap-2 rounded-xl items-center">
                <img src={props.url} className="w-full rounded-xl overflow-hidden object-cover aspect-[3/2] md:w-4/5 lg:w-[90%]"></img>
                <p className="text-primary text-3xl lg:text-3xl text-center lg:text-start  font-semibold py-2">{props.name}</p>
                <p className="text-primary text-md md:text-md text-start md:tracking-wide lg:text-start font-[350] md:w-[90%] lg:w-full">{props.text}</p>
                <Link to ="/derasovil_site/Deratizare" className="text-primary text-lg bg-brick rounded-full w-3/5 text-center self-center justify-self-end mt-3 mb-6 lg:hidden">Află mai multe</Link>
            </div>
        </div>
    )}


export default Services__Offers_Card;