import React from "react";
import logo from "/assets/derasovil_logo.svg";


function Footer(){
    return(
        <div className="flex flex-col items-center justify-center py-10 first-letter relative">
            <div className="w-[90%] flex flex-col gap-6 md:flex-row md:justify-evenly md:w-full md:gap-0">
                <div className="flex flex-col items-start md:w-1/3">
                    <img src={logo} className="w-44 lg:w-56"></img>
                    <p className="text-secondary text-md text-start ml-[2px]">Firma Derasovil, lideră în servicii de deratizare, dezinsecție și dezinfecție, oferă soluții sigure pentru un mediu curat și sănătos de peste 10 ani în toată țara!</p>
                </div>
                <div className="flex flex-col ml-[2px] md:w-1/5">
                    <div className="flex flex-col w-fit mb-2">
                        <p className="text-secondary font-semibold text-lg">Companie</p>
                        <span className="border-b-[2px] border-secondary rounded-lg w-4/5"></span>
                    </div>
                    <a className="text-secondary text-md hover:font-semibold w-fit" href="#">Acasă</a>
                    <a className="text-secondary text-md hover:font-semibold w-fit" href="#">Despre noi</a>
                    <a className="text-secondary text-md hover:font-semibold w-fit" href="#">Servicii</a>
                    <a className="text-secondary text-md hover:font-semibold w-fit" href="#">Contact</a>
                    <a className="text-secondary text-md hover:font-semibold w-fit" href="#">Termeni și condiții</a>
                </div>
                <div className="flex flex-col ml-[2px] md:w-1/4">
                    <div className="flex flex-col w-fit mb-2">
                        <p className="text-secondary font-semibold text-lg">Contact</p>
                        <span className="border-b-[2px] border-secondary rounded-lg w-4/5"></span>
                    </div>
                    <p className="text-secondary text-md w-3/5">Adresă: Strada 8, Numarul 9, Oșorhei, Județul Bihor</p>
                    <p className="text-secondary text-md">Telefon: 0773957912</p>
                    <p className="text-secondary text-md">Email: office@derasovil.ro</p>
                </div>
            </div>
            <p className="text-secondary text-sm font-medium xl:pt-4 xl:pb-2 pt-8 self-center justify-self-center text-center">Copyright © 2024 Derasovil SRL. Toate drepturile rezervate.</p>
        </div>
    )
}

export default Footer;