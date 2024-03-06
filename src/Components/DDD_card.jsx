import React from "react";

function Deratizare_card(props){
    return(
        <div className="flex flex-col justify-center items-center mt-10 lg:mt-10 w-full bg-primary">
            <div className="flex flex-col justify-center items-center gap-0 rounded-lg overflow-hidden w-[85%] md:w-[70%] shadow-xl mb-10 lg:flex-row-reverse lg:items-start lg:w-[90%] xl:w-[80%]">
                <p className="text-primary bg-secondary bg-opacity-80 text-center w-full text-2xl py-2 md:text-3xl md:py-4 lg:hidden">Informații cheie</p>
                <img src={props.CardImg} className="w-full object-center object-cover lg:w-1/2 xl:w-[60%] xl:h-[570px] lg:h-[580px]"></img>
                <div className="xl:h-[570px] lg:h-[580px]">
                    <p className="text-primary bg-secondary bg-opacity-80 text-center w-full text-2xl py-2 md:text-3xl md:py-4 hidden lg:block">Informații cheie</p>
                    <div className="flex flex-col w-full pl-4 pr-4 pt-4 gap-3">
                    <p className="text-secondary font-[450] md:text-lg"><b className="font-medium">{props.CardsBigWord}</b>{props.CardText}</p>
                    <p className="text-secondary text-lg font-medium text-start">{props.CardSection1Title}</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                         {props.CardSection1Text}
                        </p>
                      </li>
                    </ul>
                    <p className="text-secondary text-lg font-medium text-start">{props.CardSection2Title}</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                          {props.CardSection2Text}
                        </p>
                      </li>
                    </ul>
                    <p className="text-secondary text-lg font-medium text-start">{props.CardSection3Title}</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2 mb-8">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                          {props.CardSection3Text}
                        </p>
                      </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deratizare_card;