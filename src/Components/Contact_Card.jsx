import React from "react";
import phone_icon from '/assets/phone-icon-contact.svg'
import email_icon from '/assets/email-icon-contact.svg'
import location_icon from '/assets/location-icon-contact.svg'

function Contact_Card(){
    return(
        <div className="flex flex-col items-center justify-center">
            <p className="text-center text-secondary text-3xl font-medium tracking-wide w-[90%] lg:text-5xl py-8 lg:py-12 mb-6">Ai întrebări? Nu ezita să ne contactezi!</p>
            <div className="w-[90%] rounded-sm overflow-hidden items-center justify-center bg-primary shadow-sm shadow-secondary lg:flex-row lg:flex ">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-brick to-rose-500 self-start pb-3">
                    <p className="text-primary text-center text-2xl w-4/5 pt-4 md:text-3xl">Suntem la un singur mesaj distanță!</p>
                    <p className="text-primary text-center text-lg w-4/5 pt-4 md:pt-6 md:text-xl">Echipa noastră este mereu bucuroasă să te ajute și să îți ofere soluții personalizate.</p>
                    <div className="grid grid-rows-3 mt-6 gap-3 w-[90%] md:w-[90%] md:gap-6 lg:mt-10 lg:gap-10 mb-6">
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={phone_icon} className="aspect-square p-3 overflow-visible rounded-full w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-3"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-2xl">0773 957 912</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={email_icon} className="aspect-square p-3 rounded-full overflow-visible w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-4"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-2xl">office@derasovil.ro</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 md:gap-6">
                            <img src={location_icon} className="aspect-square p-3 rounded-full w-[15%] md:p-4 md:w-[10%] lg:p-3 lg:w-[15%] xl:p-3"></img>
                            <p className="text-primary text-2xl text-start pb-1 font-normal md:text-2xl">Strada 8, Numarul 9, Oșorhei, Județul Bihor</p>
                        </div>
                    </div>
                </div>
                <div className="bg-primary flex flex-col items-center justify-center w-full pt-4 pb-4 gap-3">
                        <div className="flex flex-col items-start justify-start w-4/5">
                            <label className="text-secondary font-medium text-lg">Nume</label>
                            <input placeholder="Exemplu: Sabau" className="bg-inherit border-b-[0.5px] border-brick text-xl w-full text-secondary focus:outline-none focus:border-b-[2px] focus:border-brick pb-1 rounded-none"></input>
                        </div>
                        <div className="flex flex-col items-start justify-start w-4/5">
                            <label className="text-secondary font-medium text-lg">Prenume</label>
                            <input placeholder="Exemplu: Cristian" className="bg-inherit border-b-[0.5px] border-brick text-xl w-full text-secondary focus:outline-none focus:border-b-[2px] focus:border-brick pb-1 rounded-none"></input>
                        </div>
                        <div className="flex flex-col items-start justify-start w-4/5">
                            <label className="text-secondary font-medium text-lg">Telefon</label>
                            <input placeholder="Exemplu: 0773957912" className="bg-inherit border-b-[0.5px] border-brick text-xl w-full text-secondary focus:outline-none focus:border-b-[2px] focus:border-brick pb-1 rounded-none"></input>
                        </div>
                        <div className="flex flex-col items-start justify-start w-4/5">
                            <label className="text-secondary font-medium text-lg">Mail</label>
                            <input placeholder="Exemplu: contact@derasovil.ro" className="bg-inherit border-b-[0.5px] border-brick text-xl w-full text-secondary focus:outline-none focus:border-b-[2px] focus:border-brick pb-1 rounded-none"></input>
                        </div>
                        <div className="flex flex-col items-start justify-start w-4/5">
                            <label className="text-lg text-secondary mb-1 font-medium">Mesaj</label>
                            <textarea className="border-[1px] resize-y rounded-xl bg-inherit w-full border-brick focus:outline-none focus:border-[2px] focus:border-brick px-3 text-xl text-secondary pb-4" placeholder="Spune-ne problema ta!"></textarea>
                        </div>
                        <button className="text-primary bg-gradient-to-tl from-brick to-rose-500 rounded-full text-center pt-[0.2rem] pb-[0.4rem] text-xl w-[40%] lg:w-[30%] mt-4 hover:shadow-md hover:shadow-slate-500">Trimite</button>
                    </div>
            </div>
        </div>
    )
}

export default Contact_Card;