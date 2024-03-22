import React,{useState} from "react";
import { useNavigate } from "react-router-dom";


// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {

  const navigate = useNavigate()
    return(
        <>
        
        <div className="fixed inset-0 top-24 py-8 px-8">
        <div className="flex items-center justify-center">
          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Choisis ton Quiz
          </p>
          <div className="absolute  left-3 top-16 h-full w-full m-4 items-center justify-center py-16 px-10 flex flex-wrap overflow-y-scroll">
            <img src="/images/Themes/histoire.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0"/>
            <img src="/images/Themes/musique.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0" />
            <img src="/images/Themes/culture_generale.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0" />
            <img src="/images/Themes/geographie.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300  mr-12 cursor-pointer mb-10 md:mb-0"/>
            <img src="/images/Themes/animaux.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0" />
            <img src="/images/Themes/celebrites.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0" />
            <img src="/images/Themes/cinema.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0"/>
            <img src="/images/Themes/informatique.png" alt="bug" className="w-1/2 md:w-[13%] h-auto rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 md:mb-0" />
         
          
        </div>
      </div>
        </div>

        </>
    );
}

export default GamesChoice