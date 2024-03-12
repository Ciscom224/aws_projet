import React,{useState} from "react";
import {FaChevronCircleLeft ,FaChevronCircleRight} from "react-icons/fa"

// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {
    const games = [
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
    ];

    const [actualGame,_] = useState(0)
   
   
    return(
        <div className="max-w-[700px] h-[500px] w-full m-auto py-16 px-4 relative">
    
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-[#e0c758]/50 text-black cursor-pointer"> 
                <FaChevronCircleLeft size= {30} onClick={prevGame}/>
            </div>
            <div style={{backgroundImage: `url(${games[actualGame].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-[#e0c758]/50 text-black cursor-pointer">
                 <FaChevronCircleRight  size= {30} onClick={nextGame}/>
            </div>
        </div>
    );
}

export default GamesChoice