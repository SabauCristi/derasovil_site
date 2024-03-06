import React from "react";
import {Link} from "react-router-dom";

function Deratizare_alte_servicii(props){
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-center text-secondary text-4xl font-medium tracking-wide w-[90%] lg:text-5xl mt-16">Alte servicii</p>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row w-[90%] lg:w-[90%] md:items-start lg:gap-20 xl:gap-32 lg:mt-6 xl:mt-10">
                <div className="flex flex-col w-[90%] lg:w-[50%] rounded-lg overflow-hidden mt-8 items-center justify-start shadow-sm shadow-secondary md:h-[400px] lg:h-[440px] xl:h-[500px]">
                    <img src={props.Service1Img} className="w-full object-cover xl:h-[300px] lg:h-[210px] md:h-[170px] "></img>
                    <div className="w-[90%] flex flex-row items-end">
                        <img src={props.Service1Icon} className="w-6 mr-1 pb-1"></img>
                        <p className=" text-secondary w-[90%] pt-3 text-left font-medium text-3xl">{props.Service1Title}</p>
                    </div>
                    <p className="text-md text-secondary w-[90%] self-center mt-3 leading-relaxed lg:text-lg"><b className="font-medium">{props.Service1BigWord}</b>{props.Service1Text}</p>
                    <Link to = {"/derasovil_site/" + props.Service1Title} className="text-lg text-primary w-auto font-medium mt-3 rounded-xl bg-brick text-center self-start px-3 ml-[5%] mb-5 hover:shadow-xl shadow-secondary">Află mai multe</Link>
                </div>
                
                <div className="flex flex-col w-[90%] lg:w-[50%] rounded-lg overflow-hidden mt-4 items-center justify-start shadow-sm shadow-secondary md:h-[400px] md:mt-8 lg:h-[440px] xl:h-[500px]">
                    <img src={props.Service2Img} className="w-full object-cover xl:h-[300px] lg:h-[210px] md:h-[170px] "></img>
                    <div className="w-[90%] flex flex-row items-end">
                        <img src={props.Service2Icon} className="w-8 mr-1 "></img>
                        <p className=" text-secondary w-[90%] pt-3 text-left font-medium text-3xl ">{props.Service2Title}</p>
                    </div>
                    <p className="text-md text-secondary w-[90%] self-center mt-3 leading-relaxed lg:text-lg"><b className="font-medium">{props.Service2BigWord}</b>{props.Service2Text}</p>
                    <Link to = {"/derasovil_site/" + props.Service2Title} className="text-lg text-primary w-auto font-medium mt-3 rounded-xl bg-brick text-center self-start px-3 ml-[5%] mb-5 hover:shadow-xl shadow-secondary">Află mai multe</Link>
                </div>
            </div>
        </div>
    )
}

export default Deratizare_alte_servicii;