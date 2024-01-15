import React, {useState, useRef} from "react";
import icons from "./icons";
import Insects_Section from "./Insects_Section";
import info from "./insects_info";


function Insects(){

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleOnClick(newIndex){
        setCurrentIndex(newIndex - 1);
        slideRef.current.classList.add("fade-anim");
        slideRef.current.addEventListener("animationend", removeAnimation);
        changeColor(newIndex);
    }
    const slideRef = useRef();
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
      };

    function changeColor(index){
        for(let i = 1; i < 7; i++){
            if(i == index){
                document.getElementById("icon" + i).style.backgroundColor = "#E76F51";
                document.getElementById("line" + i).style.borderColor = "#E76F51";
            }
            else{
                document.getElementById("icon" + i).style.backgroundColor = "#2A9D8F";
                document.getElementById("line" + i).style.borderColor = "#2A9D8F";
                document.getElementById("icon" + i).style.backgroundColor = "#2A9D8F";
                document.getElementById("line" + i).style.borderColor = "#2A9D8F";
            }
        }
    }

    function createIcon(icon){
        return <div className="flex flex-col justify-center items-center">
            <button onLoad={() => changeColor(1)} onClick={() => handleOnClick(icon.id)} className="flex flex-col justify-center items-center w-[60%] md:w-3/4 lg:w-[70%] xl:w-[50%] group gap-1">
                <img src={icon.url} className="aspect-square p-2 w-full group-hover:!bg-brick  bg-cyan focus rounded-full border-secondary border-[3px] lg:border-4" id={"icon" + icon.id}></img> 
                <p className="text-center text-secondary text-lg lg:text-xl xl:text-2xl">{icon.name}</p>
                <span className="border-2 border-cyan  group-hover:!border-brick rounded-sm w-3/5" id={"line" + icon.id}></span>
            </button>

        </div>
    }

    function createInfo(index){
        return <Insects_Section
        url = {info[index].url}
        info = {info[index].info}
        slogan = {info[index].slogan}
        fact = {info[index].fact}
        />;
    }


    return( 
        <div className="flex flex-col justify-center items-center bg-primary">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 gap-x-4 md:gap-x-6 lg:gap-x-12 xl:gap-10 justify-center my-8 w-[90%]">
            {icons.map((i) => {
            return (<div key = {i.id}>{createIcon(i)}</div>);
             })}
            </div>
            <div ref={slideRef}>
            {createInfo(currentIndex)}
            </div>
        </div>
    )
}

export default Insects;