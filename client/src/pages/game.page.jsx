import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function GamePage({ changeBgImage }) {

    const navigate = useNavigate();


    useEffect(() => {
        changeBgImage("url('/images/games_bg.jpg')");
    }, [changeBgImage]);

    return (
       
<div className="relative">
    {/* Flou de l'arrière-plan */}
    <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-70 blur-lg backdrop-blur-lg"></div>
    
    {/* Contenu */}
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center z-0 md:flex-row">
        <div className='bg-white w-32 h-40 md:w-40 md:h-64 shadow-lg mb-4 md:mr-4 md:mb-0 rounded-md z-10 text-center cursor-pointer' onClick={()=>navigate('/game-categories')}>Quiz</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-64 shadow-lg ml-0 md:ml-4 md:mb-0 rounded-md z-10 text-center cursor-pointer'>Guest</div>
    </div>
</div>

    );
}
