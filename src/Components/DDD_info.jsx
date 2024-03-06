import React from "react";
import FirstImage from "/assets/Deratizare_img1.jpeg";
import Icon1 from "/assets/Deratizare_icon1.svg";
import SecondImage from "/assets/Deratizare_img2.jpeg";
import Icon2 from "/assets/Deratizare_icon2.svg";


function Deratizare_info(props){
    return(
        <div className="flex flex-col items-center justify-center lg:mt-12">
            <div className="w-[80%] flex flex-col items-center justify-center lg:w-[90%]">
                <div className="flex flex-col items-center justify-center gap-10 xl:gap-14 md:gap-8 lg:flex-row lg:items-start mt-12">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <div className="flex flex-row w-[90%] items-center justify-start gap-4 lg:self-start">
                            <img src={props.infoSection1Icon} className="w-12"></img>
                            <p className="text-2xl text-secondary text-start font-semibold xl:text-4xl w-[90%] md:text-3xl">{props.infoSection1Title}</p>
                        </div>
                        <p className="text-md text-secondary text-start tracking-wider w-[90%] leading-relaxed lg:text-lg lg:w-full xl:text-2xl">{props.infoSection1Text}</p>
                    </div>
                    <img src={props.infoSection1Img} className="rounded-lg w-[85%] lg:w-[40%] lg:aspect-auto lg:object-cover lg:object-center xl:aspect-auto xl:w-2/5"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 xl:gap-14 md:gap-8 lg:flex-row-reverse lg:items-start mt-20">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <div className="flex flex-row w-[90%] items-center justify-start gap-4 lg:self-start">
                            <img src={props.infoSection2Icon} className="w-12"></img>
                            <p className="text-2xl text-secondary text-start font-semibold xl:text-4xl w-[90%] md:text-3xl">{props.infoSection2Title}</p>
                        </div>
                        <p className="text-md text-secondary text-start tracking-wider w-[90%] leading-relaxed lg:text-lg lg:w-full xl:text-2xl">{props.infoSection2Text}</p>
                    </div>
                    <img src={props.infoSection2Img} className="rounded-lg w-[85%] lg:w-[40%] lg:aspect-auto lg:object-cover lg:object-center xl:aspect-auto xl:w-2/5"></img>
                </div>
            </div>
        </div>
    )
}

export default Deratizare_info;