import React from "react";
import Mice_img from "/assets/Sobolanski.jpeg";
function Deratizare_key_info(){
    return(
        <div className='flex flex-col items-center justify-center mt-10 lg:mt-16 w-full bg-primary'>
            <p className="text-center text-secondary text-3xl font-medium tracking-wide w-[90%] lg:text-5xl">Control Profesional<br className="lg:hidden"></br> Împotriva Rozătoarelor</p>
            <p className="text-center text-secondary text-lg tracking-wide w-[80%] mt-10 lg:mt-16 mb-10 md:mb-16 md:w-[70%] lg:w-[60%] lg:text-2xl lg:leading-relaxed">Derasovil este partenerul de încredere în eliminarea eficientă a șobolanilor și șoarecilor. Cu o abordare temeinică și soluții personalizate, ne asigurăm că locuința sau afacerea dvs. sunt protejate. Alegeți Derasovil pentru o deratizare eficace și profesională!</p>
            <div className="flex flex-col justify-center items-center gap-0 rounded-lg overflow-hidden w-[85%] md:w-[70%] shadow-xl mb-10 lg:flex-row-reverse lg:items-start lg:w-[90%] xl:w-[80%]">
                <p className="text-primary bg-secondary bg-opacity-80 text-center w-full text-2xl py-2 md:text-3xl md:py-4 lg:hidden">Informații cheie</p>
                <img src={Mice_img} className="w-full object-center object-cover lg:w-1/2 xl:w-[60%] xl:h-[570px] lg:h-[580px]"></img>
                <div className="xl:h-[570px] lg:h-[580px]">
                    <p className="text-primary bg-secondary bg-opacity-80 text-center w-full text-2xl py-2 md:text-3xl md:py-4">Informații cheie</p>
                    <div className="flex flex-col w-full pl-4 pr-4 pt-4 gap-3">
                    <p className="text-secondary font-[450] md:text-lg"><b className="font-medium">Rozătoarele</b> sunt purtători de boli și germeni patogeni, reprezentând un pericol pentru sănătatea umană și a animalelor de companie.</p>
                    <p className="text-secondary text-lg font-medium text-start">Metode de Combatere:</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                           Deratizarea folosește substanțe chimice, capcane sau măsuri de igienă pentru a elimina rozătoarele din locuința dumneavoastră.
                        </p>
                      </li>
                    </ul>
                    <p className="text-secondary text-lg font-medium text-start">Prevenirea reapariției:</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                        Este esențială sigilarea acceselor, igienizarea și depozitarea corectă a alimentelor pentru a preveni reinfestarea.
                        </p>
                      </li>
                    </ul>
                    <p className="text-secondary text-lg font-medium text-start">Riscuri pentru sănătate:</p>
                    <ul className="text-secondary text-md list-disc list-inside pl-2 mb-8">
                      <li className="flex">
                        <span className="flex-shrink-0">•</span>
                        <p className="pl-2 text-md font-[450]">
                        Prezența rozătoarelor poate duce la transmiterea de boli, deteriorarea proprietăților și contaminarea alimentelor și a apei, necesitând o deratizare regulată și eficientă.
                        </p>
                      </li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Deratizare_key_info;