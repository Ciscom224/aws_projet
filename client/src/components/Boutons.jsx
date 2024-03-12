import React from "react"
import {useNavigate} from "react-router-dom"

// Composant responsable du bouton jouer et des futurs boutons (1 joueur, multijoueur etc etc)
const Boutons = () => {

    
    const navigate = useNavigate()
    const jouer = () => {
        // Verifie si la donnée stocké détient la valeur String true et affiche une alerte en fonction de cette valeur
        return localStorage.getItem("isAuthenticated")==='true' ? 
        navigate("/games") 
        : alert("Connectez vous d'abord sss! ")
      }
    return (
        <div className="flex items-center justify-center h-screen" >
      <div>
        <img src="/images/HibouQuizWiz.png" alt="Logo"/>
        <button className="bg-[#3B19E5] text-[#E8E8F2] w-[200px] rounded-3xl font-medium mx-auto py-3 ml-[30%] hover:bg-[#110e1f] hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
          onClick={jouer}>Catalogue de jeu
        </button>
      </div>
      </div>
        
    )
}

export default Boutons
