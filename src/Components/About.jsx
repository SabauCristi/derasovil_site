import React from "react" 
import dezinsectienimg from '/assets/Desinsection_photo.jpeg'
import deratizareimg from '/assets/Deratizareimg.jpeg'
import dezinfectieimg from '/assets/Dezinfectieimg.jpeg'
import flysvg from '/assets/Fly.svg'
import micesvg from '/assets/Mice.svg'
import solsvg from '/assets/Sol.svg'


function About(){
    return(
        <div className="pt-10 lg:pt-4 mb-8 bg-primary">
            <div className="flex items-center justify-center w-full my-3">
                <div className="flex items-center justify-center flex-row w-full lg:w-4/5">
                    <span className="border-2 border-cyan grid-rows-1 ml-3 lg:mr-6 mr-2 grow rounded-sm mt-1"></span>
                    <span className="text-secondary text-3xl text-center font-medium md:text-4xl lg:text-5xl lg:my-10 xl:text-6xl">Cu ce ne ocupăm?</span>
                    <span className="border-2 border-cyan grid-rows-1 lg:ml-6 ml-2 mr-3 grow rounded-sm mt-1"></span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center lg: gap-4">
                <div className="flex flex-col w-5/6 justify-center items-center lg:flex-row lg:gap-2">
                    <img src={dezinsectienimg} className="w-4/5 mt-3 mb-2 rounded-xl overflow-hidden lg:w-1/2"></img>
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 lg:gap-6">
                        <div className="flex flex-row items-center lg:my-2">
                            <img src={flysvg} className="w-1/6 mr-2"></img>
                            <p className="text-center text-secondary text-2xl font-semibold my-2 md:text-3xl xl:text-5xl">Dezinsecție</p>
                        </div>
                        <p className="text-center text-secondary text-md font-[350] lg:text-start lg:text-lg xl:text-2xl"><b className="font-medium">Derasovil</b> te protejează de invazia insectelor dăunătoare. Garantăm un mediu curat și liber de pericole, folosind metode avansate ce combat eficient orice amenințare.Alege să trăiești fără griji alături de noi pentru o casă în care să te simți cu adevărat protejat.</p>
                        <a href="#" className="text-center text-primary bg-cyan text-xl m-3 rounded-full w-2/4 pb-1 self-center xl:text-3xl xl:w-3/5 hover:shadow-emerald-700 hover:shadow-md">Află mai multe</a>
                    </div>
                </div>

                <div className="flex flex-col w-5/6 justify-center items-center lg:flex-row lg:gap-2">
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pr-8 lg:gap-6">
                    <img src={deratizareimg} className="w-4/5 mt-3 mb-2 rounded-xl overflow-hidden lg:w-1/2 lg:hidden"></img>
                        <div className="flex flex-row items-center lg:my-2">
                            <img src={micesvg} className="w-1/6 mr-2"></img>
                            <p className="text-center text-secondary text-2xl font-semibold my-2 md:text-3xl xl:text-5xl">Deratizare</p>
                        </div>
                        <p className="text-center text-secondary text-md font-[350] lg:text-start lg:text-lg xl:text-2xl"><b className="font-medium">Rozătoarele</b> sunt purtătorii majori de boli și germeni patogeni. Pentru a le combate eficient, este necesară o abordare constantă, iar în acest proces, Compania Derasovil se remarcă ca partener de încredere pe termen îndelungat.</p>
                        <a href="#" className="text-center text-primary bg-cyan text-xl m-3 rounded-full w-2/4 pb-1 self-center xl:text-3xl xl:w-3/5 hover:shadow-emerald-700 hover:shadow-md">Află mai multe</a>
                    </div>
                        <img src={deratizareimg} className="w-4/5 mt-3 mb-2 rounded-xl overflow-hidden lg:w-1/2 hidden lg:block"></img>
                </div>

                <div className="flex flex-col w-5/6 justify-center items-center lg:flex-row lg:gap-2">
                    <img src={dezinfectieimg} className="w-4/5 mt-3 mb-2 rounded-xl overflow-hidden lg:w-1/2"></img>
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 lg:gap-6">
                        <div className="flex flex-row items-center lg:my-2">
                            <img src={solsvg} className="w-1/6 mr-2 px-0.5"></img>
                            <p className="text-center text-secondary text-2xl font-semibold my-2 md:text-3xl xl:text-5xl">Dezinfecție</p>
                        </div>
                        <p className="text-center text-secondary text-md font-[350] lg:text-start lg:text-lg xl:text-2xl"><b className="font-medium">Igiena </b>este esențială pentru un mediu sănătos! Serviciile noastre de dezinfecție elimină eficient bacteriile și microbii, asigurându-ți un spațiu curat și sigur pentru tine și familia ta. Apelează la noi pentru a transforma casa ta într-un sanctuar protejat, unde să te bucuri de confort și liniște deplină.</p>
                        <a href="#" className="text-center text-primary bg-cyan text-xl m-3 rounded-full w-2/4 pb-1 self-center xl:text-3xl xl:w-3/5 hover:shadow-emerald-700 hover:shadow-md">Află mai multe</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;