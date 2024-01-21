import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero_about";
import AboutComponent from "../Components/About_page";
import Achivements from "../Components/Achivements";

function About(){
    return (
    <div>
        <NavBar />
        <Hero />
        <AboutComponent />
        <Achivements />
    </div>
    )
}

export default About;