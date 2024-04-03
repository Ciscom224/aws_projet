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
            Liste des jeux
          </p>
          <div className="absolute  left-3 top-16 h-full w-full m-auto items-center justify-center py-16 px-10 flex flex-wrap overflow-y-scroll">
          <img src="/images/games_pic1.png" alt="bug" className="w-1/2 md:w-[20%] h-auto rounded-2xl hover:scale-105 duration-300 mr-6 cursor-pointer" onClick={() => {navigate("/games/quizchoice")}} />
          <img src="/images/games_pic2.png" alt="bug" className="w-1/2 md:w-[20%] h-auto rounded-2xl hover:scale-105 duration-300 mr-6 cursor-pointer" />
          <img src="/images/games_pic.png" alt="bug" className="w-1/2 md:w-[20%] h-auto rounded-2xl hover:scale-105 duration-300 mr-6 cursor-pointer" />
        </div>
      </div>
        </div>

        </>
    );
}

export default GamesChoice