import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import DDD_Header from "../Components/DDD_Header";
import DDD_key_info from "../Components/DDD_key_info";
import DDD_info from "../Components/DDD_info";
import DDD_card from "../Components/DDD_card";
import DDD_alte_servicii from "../Components/DDD_alte_servicii";
import Footer from "../Components/Footer";
import info from "../Components/servicii_info";


function Deratizare(){

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return(
        <div className="bg-primary max-w-full overflow-hidden">
            <NavBar />
            <DDD_Header 
                HeaderImg={info[0].headerImg}
                text={info[0].headerText}
            />
            <DDD_key_info 
                infoTitle={info[0].infoTitle}
                infoText={info[0].infoText}
            />
            <DDD_card 
                CardImg={info[0].CardImg}
                CardsBigWord={info[0].CardBigWord}
                CardText={info[0].CardText}
                CardSection1Title={info[0].CardSection1Title}
                CardSection1Text={info[0].CardSection1Text}
                CardSection2Title={info[0].CardSection2Title}
                CardSection2Text={info[0].CardSection2Text}
                CardSection3Title={info[0].CardSection3Title}
                CardSection3Text={info[0].CardSection3Text}
            />
            <DDD_info 
                infoSection1Icon={info[0].InfoSection1Icon}
                infoSection1Title={info[0].InfoSection1Title}
                infoSection1Text={info[0].InfoSection1Text}
                infoSection1Img={info[0].InfoSection1Img}
                infoSection2Icon={info[0].InfoSection2Icon}
                infoSection2Title={info[0].InfoSection2Title}
                infoSection2Text={info[0].InfoSection2Text}
                infoSection2Img={info[0].InfoSection2Img}
            /> 
            <DDD_alte_servicii 
                Service1Img={info[0].Service1Img}
                Service1Title={info[0].Service1Title}
                Service1Text={info[0].Service1Text}
                Service1BigWord={info[0].Service1BigWord}
                Service1Icon={info[0].Service1Icon}
                Service2Img={info[0].Service2Img}
                Service2Title={info[0].Service2Title}
                Service2BigWord={info[0].Service2BigWord}
                Service2Text={info[0].Service2Text}
                Service2Icon={info[0].Service2Icon}
            />
            <Footer />
        </div>
    )
}

export default Deratizare;
