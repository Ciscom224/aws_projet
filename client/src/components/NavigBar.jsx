import React, {useState,useEffect } from "react";
//import { ImMenu,ImMenu3  } from "react-icons/im";
import { useLocation,useNavigate } from 'react-router-dom';
import ConnexionC from "./Auth/ConnexionC";
import Profile from "./PictureManag/Profile";
import NotificationIcon from "./NotificationIcon";
import "react-image-crop/dist/ReactCrop.css";
import { useAuthStore, useRemovedMenu } from "../store";


// Composant permettant d'afficher la barre de navigation dans notre page
const NavigBar = () => {

    // Location permet de récupérer l'url de la page actuelle et qu'on utilise dans handleLogo
    const location = useLocation();
    const navigate = useNavigate();

    const setFalse = useRemovedMenu((state)=> state.setFalse);
    const setTrue = useRemovedMenu((state)=> state.setTrue);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)


    const [loginOpen,setLoginOpen] = useState(false)

    // Ici en fonction de si l'user est dans la page d'accueil ou pas, on le renvoie a la page d'accueil s'il clique sur le logo 
    const handleLogo = () => {
        if (location.pathname !== "/") {
            navigate("/")
        }
        else {
        setLoginOpen(false)
        setFalse()
        }
    }

    const handleLogin = () => {
        setLoginOpen(!loginOpen)
        if (loginOpen) {setFalse()}
        else {setTrue()}
    
    }
    return(
<>
        <div className="fixed top-0 left-0 right-0 z-50 h-24 flex items-center bg-[#181717] bg-opacity-65" >
            <div className=" text-3xl font-bold fixed left-[12%] flex items-center " ><button onClick={handleLogo}><img src="/images/LogoNav.png" alt="Logo" className="inline-block"/><img src="/images/LogoQuizWiz.png" alt="Logo" className="hidden sm:inline-block"/></button></div>
                
        
            {!isAuthenticated ?
                <button className="fixed right-12 text-[#0F0D1C] hover:text-[#000000] bg-[#E8E8F2]  w-[100px] rounded-3xl text-gray font-medium my-6 mx-auto py-2 px-3  hover:scale-105 duration-300" onClick={handleLogin}>Connexion
                </button>   :
                 <>
                 <div className="hidden fixed right-[150px] md:flex" title="Notifications">
                     <NotificationIcon type={"notif"}/>
                 </div>
                 <div className="hidden fixed right-[250px] md:flex" title="Messages">
                     <NotificationIcon type={"msg"}/>
                 </div>
                 <div className="hidden fixed right-[350px] md:flex" title="Classements">
                     <NotificationIcon type={"classment"}/>
                 </div>
                 <div className="flex fixed right-10">
                     <Profile navig={true} classment={false}/> 
                 </div>
             </>}
        </div>
        {loginOpen && <div className="fixed inset-0 flex items-center justify-center  bg-[#000000] bg-opacity-50">
                    
                <div className="w-full p-8 rounded-lg">
                    <ConnexionC trigger={loginOpen}  onClose={handleLogin}  />
        
                </div>
            </div>}
        </>
        


    )
}

export default NavigBar

