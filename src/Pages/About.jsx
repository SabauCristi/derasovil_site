import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero_about";
import AboutComponent from "../Components/About_page";
import Achivements from "../Components/Achivements";

function About(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
    <div className="bg-primary max-w-full overflow-x-hidden">
        <NavBar />
        <Hero />
        <AboutComponent />
        <Achivements />
    </div>
    )
}

export default About;