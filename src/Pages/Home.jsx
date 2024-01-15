import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Serrvice_Section from "../Components/Service_Section";
import Insects from "../Components/Insects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";



function Home(){
    return(
        <div className="bg-primary max-w-full overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Serrvice_Section />
            <Insects />
            <Contact />
            <Footer />
            </div>
         )
}

export default Home;