import React from "react";
import Partners from "/assets/Partners.svg";
import Employees from "/assets/Employees.svg";
import Surface from "/assets/Surface.svg";

function Achivements(){
    return (
        <div className="w-full bg-gradient-to-tl from-brick to-rose-500 flex flex-row items-center justify-center py-16 md:py-8 lg:pt-24 lg:pb-12 xl:pb-0">
            <div className="grid grid-rows-9 grid-flow-row gap-4 justify-items-center md:grid-rows-2 md:grid-cols-3 md:grid-flow-col md:items-start md:gap-6 md:w-[95%] xl:gap-8">
                <img src={Surface} className="w-1/3 border-primary rounded-lg border-[3px] p-5 md:p-4 md:w-2/4 aspect-square md:self-end xl:border-4 xl:p-8"></img>
                <div className="flex flex-col items-center gap-3 md:justify-start">
                    <p className="text-5xl text-primary text-center font-medium xl:text-6xl">75 000+</p>
                    <p className="text-2xl text-primary text-center font-semibold mb-8 md:mb-0 xl:text-3xl">De m² protejați</p>
                </div>
                <img src={Employees} className="w-1/3 border-primary rounded-lg border-[3px] p-5 md:p-4 md:w-2/4 aspect-square md:self-end xl:border-4 xl:p-8"></img>
                <div className="flex flex-col items-center gap-3 md:justify-start">
                    <p className="text-5xl text-primary text-center font-medium xl:text-6xl">35</p>
                    <p className="text-2xl text-primary text-center font-semibold mb-8 md:mb-0 xl:text-3xl">De angajați certificați</p>
                </div>
                <img src={Partners} className="w-1/3 border-primary rounded-lg border-[3px] p-5 md:p-4 md:w-2/4 aspect-square md:self-end xl:border-4 xl:p-8"></img>
                <div className="flex flex-col items-center gap-3 md:justify-start">
                    <p className="text-5xl text-primary text-center font-medium xl:text-6xl">168+</p>
                    <p className="text-2xl text-primary text-center font-semibold xl:text-3xl">De firme partenere</p>
                </div>
            </div>
        </div>
    )
}

export default Achivements;