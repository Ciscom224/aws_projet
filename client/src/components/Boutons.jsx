import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UidContext } from "../AppContext";
// Composant responsable du bouton jouer et des futurs boutons (1 joueur, multijoueur etc etc)
const Boutons = () => {
    const navigate = useNavigate();
    const uid = useContext(UidContext);
    const jouer = () => {
        // Verifie si la donnée stocké détient la valeur String true et affiche une alerte en fonction de cette valeur
        if (uid) {
            navigate("/games")
        }
        else {
            toast.error('Connectez-Vous !!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
               
                });
        }
            
    };

    return (
        <>
        <div className="flex items-center justify-center h-screen py-16 px-0">
            <div className="flex flex-col items-center">
              
                <img src="/images/HibouQuizWiz.png" alt="Logo" className="md:w-3/4 lg:w-full   rounded-2xl object-contain hover:scale-105 duration-300 " />
                <button className="bg-[#3B19E5] text-[#E8E8F2] w-[200px] sm:w-[300px] md:w-[400px] rounded-3xl font-medium py-2 mt-2 hover:bg-[#110e1f] hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
                    onClick={jouer}>
                    Catalogue de jeu
                </button>
            </div>
        </div>
        <ToastContainer className="z-60"/>
        </>
    );
};

export default Boutons;