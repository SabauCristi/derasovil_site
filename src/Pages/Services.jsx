import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Services_Header from "../Components/Services_Header";
import Offers from "../Components/Offers";
import Footer from "../Components/Footer";

function Services(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="bg-primary max-w-full overflow-x-hidden">
            <NavBar />
            <Services_Header />
            <Offers />
            <Footer />
        </div>
    )
}

export default Services;