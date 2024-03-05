import React, {useState,useEffect } from "react";
import { ImMenu,ImMenu3  } from "react-icons/im";
import ConnexionC from "./Auth/ConnexionC";
import Profile from "./PictureManag/Profile";
import "react-image-crop/dist/ReactCrop.css";

// Composant permettant d'afficher la barre de navigation dans notre page
const NavigBar = () => {

    const [bar,setBar] = useState(true)

    const [loginOpen,setLoginOpen] = useState(false)

    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

    const [name, setName] = useState("");

    // Permet de mettre a jour le bouton Connexion ou le pseudo du joueur a droite de la NavigBar
    useEffect(() => {
        const isAuthenticatedFromLocalStorage = localStorage.getItem('isAuthenticated') === 'true';

        if (isAuthenticatedFromLocalStorage) {
            setName(localStorage.getItem('name'))
            console.log(name)
            
        }
        setIsAuthenticated(isAuthenticatedFromLocalStorage);


    }, []);
    
    const handleBar = () => {
        setBar(!bar)
    }

    const handleLogin = () => {
        setLoginOpen(!loginOpen)
    }
    return(
<>
        <div className="flex justify-between items-center h-24  mx-auto px-4 text-white bg-[#181717]" >
            <button onClick={handleBar} className="absolute top-8.5 ">
              {!bar ? <ImMenu3  size={33} /> : <ImMenu  size={25} />}
            </button>
            <div className="w-full text-3xl font-bold text-[#e0c758] absolute left-24" ><button onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
                }}>Mini Games</button></div>
            {!isAuthenticated ? 
                <button className="absolute right-12 text-[#f0efea] hover:text-[#e0c758] bg-[#181717] w-[100px] rounded-md text-[85%] font-medium my-6 mx-auto py-2 px-3  hover:scale-105 duration-300" onClick={handleLogin}>Connexion
                </button>   :
            <div className="flex absolute right-12">
                <Profile/>
            </div>}
            <div className={!bar ? "fixed  left-0 top-24 w-[10] h-full border-r border-r-[#525240] bg-[#000300] ease-in-out duration-300 z-50" : "fixed left-[-100%] top-24 h-full ease-in-out duration-300"}>
                <ul className="">
                    <li className="p-4 hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300">Profil</li>
                    <li className="p-4 hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300">Amis</li>
                    <li className="p-4 hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300">Classement</li>
                    <li className="p-4 hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300">Aide</li>
                </ul> 
            </div>
        </div>
        {loginOpen && <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                <div className="w-full p-8 rounded-lg">
                    <ConnexionC trigger={loginOpen}/>
                    <button onClick={handleLogin} className="absolute left-[60%] top-[18%] transform -translate-x-1/2 text-[#e0c758] hover:text-[#494222]">
                        Fermer
                    </button>
                </div>
            </div>}
        </>
        


    )
}

export default NavigBar

// {/* <button onClick={handleLogin} className="absolute left-[60%] top-[18.5%] transform -translate-x-1/2 text-[#e0c758] hover:text-[#494222]">
//                         Fermer
//                     </button> */}