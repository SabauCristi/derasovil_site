import React from "react";


function Deratizare_key_info(props){
    return(
        <div className='flex flex-col items-center justify-center mt-10 lg:mt-16 w-full bg-primary'>
            <p className="text-center text-secondary text-3xl font-medium tracking-wide w-[90%] lg:text-5xl">{props.infoTitle}</p>
            <p className="text-center text-secondary text-lg tracking-wide w-[80%] mt-10 lg:mt-16 mb-10 md:mb-16 md:w-[70%] lg:w-[60%] lg:text-2xl lg:leading-relaxed">{props.infoText}</p>
        </div>
    )
}
export default Deratizare_key_info;