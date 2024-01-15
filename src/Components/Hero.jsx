import React from "react" 
import heroimgmobile from './assets/hero_photo_mobile.jpg'
import heroimg from './assets/hero_photo.jpg'





function Hero(){
    return(
        <div className="relative">
        <picture>
        <source 
        srcSet={heroimg}
        media="(min-width: 640px)"
        />
        <img src={heroimgmobile} className="w-screen h-auto"></img>
        </picture>
        <div className="absolute flex flex-col w-screen top-14 gap-9 items-center sm:items-start sm:pl-8 lg:gap-12 xl:gap-16 xl:top-28 xl:pl-16 lg:top-24">
        <p className="text-primary text-3xl text-center w-4/5 sm:w-2/3 sm:text-left sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl">Soluția ideală împotriva dăunătorilor</p>
        <p className="text-primary text-2xl text-center w-4/5 sm:w-2/4 sm:text-left sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl">Serviciile noastre asigură mediul sănătos și curat pe care îl merită casa sau bussinessul dumneavoastră.</p>
        <a href="#" className="text-primary bg-brick rounded-full text-2xl px-3 pt-2 pb-3 md:pb-4 text-center w-4/5 sm:w-fit sm:rounded-3xl sm:text-xl md:text-3xl lg:text-3xl xl:text-5xl"> Cere o estimare gratuită!</a>
        </div>

        </div>
    );
}
export default Hero;