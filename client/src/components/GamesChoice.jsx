import React,{useState} from "react";
import {FaChevronCircleLeft ,FaChevronCircleRight} from "react-icons/fa"

// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {
    const games = [
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1530840197133-665af68f9d71?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    const [actualGame,setActualGame] = useState(0)
   
    // fonction pour le cas ou on clique sur la fleche de gauche mais qu'on est déja a l'index 0 de games donc on revient au dernier
    const prevGame = () => {
        const isFirstGame = actualGame === 0;
        const newGame = isFirstGame ? games.length - 1: actualGame -1;
        setActualGame(newGame);
    }
    // pareil mais avec celui de droite
    const nextGame = () => {
        const isLastGame = actualGame === games.length - 1;
        const newGame = isLastGame ? 0: actualGame + 1;
        setActualGame(newGame);
    }
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