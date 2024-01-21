import React from "react";
import Mission_img from "/assets/mission_img.jpeg";
import Story_img from "/assets/story_img.jpeg";

function Hero_about() {
    return (
        <div className="flex flex-col items-center justify-center mt-20 md:mt-28 shadow-lg  z-10 relative pb-20">
            <div className="w-[90%] flex flex-col items-center justify-center gap-28 md:gap-28 lg:gap-16 xl:w-4/5 xl:gap-20">
                <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row lg:items-start">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <p className="text-4xl text-secondary text-center font-semibold xl:text-5xl">Misiunea Noastră</p>
                        <p className="text-lg text-secondary text-start tracking-wider w-[90%] leading-relaxed lg:text-xl lg:w-full xl:text-2xl">La Derasovil, ne-am asumat misiunea fermă de a crea un mediu sigur și sănătos în România, protejând comunitățile de amenințările aduse de daunători. Ne dedicăm fiecare zi pentru a oferi soluții eficiente și durabile în combaterea daunătorilor, devenind un partener de încredere pentru clienții noștri și contribuind la sănătatea publică și bunăstarea generală.</p>
                    </div>
                    <img src={Mission_img} className="rounded-lg w-[80%] lg:w-1/3 lg:aspect-square lg:object-cover lg:object-center xl:aspect-auto xl:w-2/5"></img>
                </div>

                <div className="flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row-reverse md:mt-14 lg:items-start lg:mt-16 xl:mt-24">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <p className="text-3xl text-secondary text-center font-semibold lg:block xl:text-5xl">Povestea Noastră</p>
                        <p className="text-lg text-secondary text-start tracking-wider w-[90%] leading-relaxed lg:text-xl lg:w-full xl:text-2xl">Derasovil a început să-și desfășoare activitatea în Oradea, lăsându-și amprenta în domeniul deratizării, desinsecției și dezinfecției. Cu trecerea timpului, am evoluat constant, extinzându-ne și dezvoltându-ne. Astăzi, suntem mândri să avem echipe specializate în toată țara, pregătite să ofere soluții sigure și inovatoare. Această expansiune reprezintă o realizare a angajamentului nostru de a oferi un mediu curat și sigur, contribuind la sănătatea și bunăstarea comunităților din întreaga Românie.</p>
                    </div>
                    <img src={Story_img} className="rounded-lg w-[80%] lg:w-[40%] lg:aspect-square lg:object-cover lg:object-center xl:aspect-auto"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero_about;