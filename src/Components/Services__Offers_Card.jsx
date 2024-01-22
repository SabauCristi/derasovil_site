import React from "react";

function Services__Offers_Card(props){
    return(
        <div className="w-full flex flex-col items-center gap-3 bg-transparent mb-6 xl:px-6">
            <div className="flex flex-col justify-center w-5/6 xl:w-full gap-2 mt-8 rounded-xl items-center">
                <img src={props.url} className="w-full rounded-xl overflow-hidden object-cover aspect-[3/2]"></img>
                <p className="text-primary text-3xl lg:text-3xl text-center lg:text-start  font-semibold mt-2">{props.name}</p>
                <p className="text-primary text-md md:text-md text-start md:tracking-wide lg:text-start font-[350]">{props.text}</p>
            </div>
        </div>
    )}


export default Services__Offers_Card;