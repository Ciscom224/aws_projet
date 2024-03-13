

import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useLocation,useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store';



const Side_bar =(props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)

    const handleDisconnect = () => {
      if (!location.pathname == '') {navigate("/")}
      setIsAuthenticated(false)

        
    }

return props.isClicked ? (

<div className="fixed flex flex-col justify-center items-center bg-gray-950 bg-opacity-60 z-40 ">
      <div className="sidebar-header text-[#e2cb63] font-bold p-5 text-xl">
        {localStorage.getItem("name")}
      </div>
      <ul className="sidebar-menu ">
      <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><IoIosNotifications className="mr-3" /> Notifications</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><FaUserFriends className="mr-3" /> Amis</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiUser className="mr-3"/> Profil</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300" onClick={handleDisconnect}><HiArrowSmRight className="mr-3"/> Se déconnecter</li>
        <li className="p-2  items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><HiArrowSmRight className="mr-3"/> Messages</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><HiArrowSmRight className="mr-3"/> Classement</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><HiArrowSmRight className="mr-3"/> Notifications </li>

      </ul>
    </div>
    ) : ""
    }


export default Side_bar