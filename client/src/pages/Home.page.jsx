import React,{useContext} from 'react';
import { UidContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function Home() {
    const uid = useContext(UidContext);
    const navigate = useNavigate();
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
    <div className="w-full h-full bg-cover bg-center " >
           <div className="flex items-center justify-center  py-16 px-0">
            <div className="flex flex-col items-center">
                <img src="/images/HibouQuizWiz.png" alt="Logo" className="md:w-3/4 lg:w-full   rounded-2xl object-contain hover:scale-105 duration-300 " />
                <button className="bg-amber-700 text-[#E8E8F2] w-[200px] sm:w-[300px] md:w-[400px] rounded-3xl font-medium py-2 mt-2 hover:bg-amber-600 hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
                    onClick={jouer}>
                    Catalogue de jeu
                </button>
            </div>
        </div>
        <ToastContainer className="z-60"/>
    </div>
    

  )
}

export default Home;
