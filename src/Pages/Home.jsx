import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Serrvice_Section from "../Components/Service_Section";
import Insects from "../Components/Insects";
import Footer from "../Components/Footer";
import Contact_Card from "../Components/Contact_Card";



function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="bg-primary max-w-full overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <Serrvice_Section />
            <Insects />
            <Contact_Card />
            <Footer />
            </div>
         )
}

export default Home;