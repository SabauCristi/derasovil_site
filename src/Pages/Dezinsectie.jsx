import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import DDD_Header from "../Components/DDD_Header";
import DDD_key_info from "../Components/DDD_key_info";
import DDD_card from "../Components/DDD_card";
import DDD_info from "../Components/DDD_info";
import DDD_alte_servicii from "../Components/DDD_alte_servicii";
import Footer from "../Components/Footer";
import info from "../Components/servicii_info";

function Dezinsectie(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return(
        <div className="bg-primary max-w-full overflow-hidden">
            <NavBar />
            <DDD_Header 
                HeaderImg={info[1].headerImg}
                text={info[1].headerText}
            />
            <DDD_key_info 
                infoTitle={info[1].infoTitle}
                infoText={info[1].infoText}
            />
            <DDD_card 
                CardImg={info[1].CardImg}
                CardsBigWord={info[1].CardBigWord}
                CardText={info[1].CardText}
                CardSection1Title={info[1].CardSection1Title}
                CardSection1Text={info[1].CardSection1Text}
                CardSection2Title={info[1].CardSection2Title}
                CardSection2Text={info[1].CardSection2Text}
                CardSection3Title={info[1].CardSection3Title}
                CardSection3Text={info[1].CardSection3Text}
            />
            <DDD_info 
                infoSection1Icon={info[1].InfoSection1Icon}
                infoSection1Title={info[1].InfoSection1Title}
                infoSection1Text={info[1].InfoSection1Text}
                infoSection1Img={info[1].InfoSection1Img}
                infoSection2Icon={info[1].InfoSection2Icon}
                infoSection2Title={info[1].InfoSection2Title}
                infoSection2Text={info[1].InfoSection2Text}
                infoSection2Img={info[1].InfoSection2Img}
            /> 
            <DDD_alte_servicii 
                Service1Img={info[1].Service1Img}
                Service1Title={info[1].Service1Title}
                Service1Text={info[1].Service1Text}
                Service1BigWord={info[1].Service1BigWord}
                Service1Icon={info[1].Service1Icon}
                Service2Img={info[1].Service2Img}
                Service2Title={info[1].Service2Title}
                Service2BigWord={info[1].Service2BigWord}
                Service2Text={info[1].Service2Text}
                Service2Icon={info[1].Service2Icon}
            />
            <Footer />
        </div>
    )
}

export default Dezinsectie;