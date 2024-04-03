import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({ changeBgImage }) {
    const navigate = useNavigate();




    const jouer = () => {
        // Verifie si la donnée stocké détient la valeur String true et affiche une alerte en fonction de cette valeur
        if (localStorage.getItem("isAuthenticated") === 'true') {
            navigate("/games");
            
        } else {
            alert("Connectez vous d'abord sss!");
        }
    };

    useEffect(()=>{
        changeBgImage("url('/images/menu_bg.jpg')");
    })

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <img src="/images/HibouQuizWiz.png" alt="Logo" className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-2xl object-contain mx-auto" />
                    <button className="bg-[#3B19E5] text-[#E8E8F2] w-[200px] sm:w-[300px] md:w-[400px] rounded-3xl font-medium py-3 mt-4 hover:bg-[#110e1f] hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
                        onClick={jouer}>
                        Catalogue de jeu
                    </button>
                </div>
            </div>
        </div>
    );
}
