/* eslint-disable react/prop-types */
import React from "react";

function Insects_Section(props){
    return (
        <div className="flex flex-row justify-center items-start mb-10 bg-primary">
            <div className="flex flex-col items-center md:gap-6 xl:flex-row xl:w-[90%] xl:items-start">
                <div className="flex flex-col justify-center items-center md:flex-row md:w-[90%] gap-4 md:items-start">
                    <img src={props.url} className="w-3/5 rounded-xl mb-4 md:w-1/3 md:mb-0 md:aspect-[4/3] lg:w-[45%] lg:aspect-[5/3] mr-4"></img>
                    <p className="text-secondary w-[85%] text-lg text-center font-medium md:text-start md:text-xl xl:text-2xl">{props.info}</p>
                </div>
                <span className="border-[0.5px] border-secondary rounded-sm w-[80%] my-2 md:my-4 md:hidden"></span>
                <span className="border-[0.5px] border-secondary rounded-sm h-80 hidden xl:block"></span>
                <div className="flex flex-col items-center gap-2 md:flex-row-reverse md:w-[90%] md:gap-5 md:items-start xl:flex-col xl:w-2/4">
                    <div className="flex flex-col items-center md:items-start gap-3 md:w-[50%] xl:w-full">
                        <p className="text-xl text-center font-bold w-[70%] md:text-start md:w-full xl:text-2xl">{props.slogan}</p>
                        <a href="#" className="text-center text-primary bg-orange hover:shadow-slate-300 hover:shadow-md text-2xl rounded-full w-1/2 pb-1 my-2 md:w-full xl:w-3/4">Află mai multe</a>
                    </div>
                    <span className="border-[0.5px] border-secondary rounded-sm md:h-36 xl:hidden"></span>
                    <div className="flex flex-col justify-start w-[85%] xl:w-full gap-2 bg-cyan bg-opacity-10 rounded-md p-4 shadow-inner">
                        <p className="text-2xl text-secondary font-semibold">Știai că?</p>
                        <p className="text-md text-secondary font-normal">{props.fact}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insects_Section;