import React from "react";
import Mission_img from "/assets/mission_img.jpeg";
import Story_img from "/assets/story_img.jpeg";

function Hero_about() {
    return (
        <div className="flex flex-col items-center justify-center mt-16 space-y-10 md:space-y-0 md:space-x-10">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white rounded-lg p-6 space-y-6">
                <img src={Mission_img} className="rounded-lg w-full h-64 object-cover" />
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Misiunea Noastră</h2>
                <p className="text-gray-600 text-center">La Derasovil, ne-am asumat misiunea fermă de a crea un mediu sigur și sănătos în România, protejând comunitățile de amenințările aduse de daunători. Ne dedicăm fiecare zi pentru a oferi soluții eficiente și durabile în combaterea daunătorilor, devenind un partener de încredere pentru clienții noștri și contribuind la sănătatea publică și bunăstarea generală.</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white  rounded-lg p-6 space-y-6">
                <img src={Story_img} className="rounded-lg w-full h-64 object-cover" />
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Povestea Noastră</h2>
                <p className="text-gray-600 text-center">Derasovil a fost înființată în anul 2000, ca o companie de familie, cu scopul de a oferi servicii profesionale de deratizare și dezinsecție. În timp, am crescut și ne-am diversificat serviciile, devenind unul dintre cei mai importanți furnizori de servicii de management al dăunătorilor din România. În prezent, oferim servicii de deratizare, dezinsecție, dezinfectare, precum și servicii de igienizare și curățenie profesională.</p>
            </div>
        </div>
    )
}

export default Hero_about;