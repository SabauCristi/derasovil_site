import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Contact_Hero";
import Card from "../Components/Contact_Card";
import Footer from "../Components/Footer";

function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
    <div className="bg-primary max-w-full overflow-x-hidden">
        <NavBar />
        <Hero />
        <Card />
        <Footer />
    </div>
    )
}

export default Contact;