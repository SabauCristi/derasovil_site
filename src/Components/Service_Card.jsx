import React from "react" 


function Service_Card(props){
    return(
        <div className="w-full flex flex-col items-center gap-3 bg-transparent mb-6 xl:px-6">
            <div className="flex flex-col justify-center w-5/6 xl:w-full gap-2 mt-8 rounded-xl">
                <img src={props.url} className="w-full rounded-xl overflow-hidden object-cover"></img>
                <p className="text-primary text-2xl lg:text-3xl text-start lg:text-start  font-semibold mt-2">{props.name}</p>
                <p className="text-primary text-md md:text-lg text-start lg:text-start font-[350]">{props.text}</p>
            </div>
        </div>
    )}

export default Service_Card;