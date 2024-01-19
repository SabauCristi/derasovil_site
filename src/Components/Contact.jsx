import React from "react";
import phone_icon from '/assets/phone-icon.svg'
import email_icon from '/assets/email-icon.svg'
import location_icon from '/assets/location-icon.svg'



function Contact(){

    return(
            <div className="bg-gradient-to-tl from-secondary to-cyan flex flex-col items-center">
                <p className="text-center text-3xl text-primary w-[85%] mt-8 font-normal md:mb-5 lg:text-4xl xl:text-4xl">Contactați-ne cu încredere pentru orice întrebare sau nelămurire!</p>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:mt-10 lg: gap-4 md:w-4/5 lg:gap-12">
                    <div className="grid grid-rows-3 mt-6 gap-3 w-4/5 md:w-full md:gap-6 lg:mt-0 lg:gap-10">
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={phone_icon} className="aspect-square border-2 border-brick p-2 overflow-visible rounded-full w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-4"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-3xl">0773 957 912</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={email_icon} className="aspect-square border-2 border-brick p-2 rounded-full overflow-visible w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-4"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-3xl">office@derasovil.ro</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={location_icon} className="aspect-square border-2 border-brick p-2 rounded-full w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-4"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-3xl">Strada 8, Numarul 9, Oșorhei, Județul Bihor</p>
                        </div>
                    </div>
                    <div className="w-4/5 mt-8 flex flex-col items-start justify-start md:w-full lg:mt-0">
                        <form className="flex flex-col justify-center items-start w-full">
                            <label className="text-lg text-primary mt-4">Nume</label>
                            <input placeholder="Exemplu: Nume" className="bg-inherit border-b-[0.5px] text-2xl w-full text-primary focus:outline-none focus:border-b-[3px] focus:border-primary pb-1"></input>
                            <label className="text-lg text-primary mt-4">Telefon</label>
                            <input placeholder="Exemplu: 0773957912" className="bg-inherit border-b-[0.5px] text-2xl w-full text-primary focus:outline-none focus:border-b-[3px] focus:border-primary pb-1" id="phone"></input>
                            <label className="text-lg text-primary mt-4">Email</label>
                            <input placeholder="Exemplu: office@derasovil.ro" className="bg-inherit focus:bg-inherit border-b-[0.5px] text-2xl w-full text-primary focus:outline-none focus:border-b-[3px] focus:border-primary pb-1"></input>
                            <label className="text-lg text-primary mt-4 mb-1">Mesaj</label>
                            <textarea className="border-[1px] resize-y rounded-xl bg-inherit w-full border-white focus:outline-none focus:border-[3px] focus:border-primary text-2xl text-primary mb-10 px-3" placeholder="Spune-ne problema ta!"></textarea>
                        </form>
                        <button className="text-2xl text-primary w-1/2 rounded-full bg-brick pb-1 shadow-inner mb-8 hover:shadow-amber-800 hover:shadow-md self-center">Trimite</button>

                    </div>
                 </div>
            </div>
        
        
    )
}

export default Contact;