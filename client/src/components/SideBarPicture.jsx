

import { HiArrowSmRight, HiInbox, HiUser } from 'react-icons/hi';
import { FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useLocation,useNavigate } from 'react-router-dom';



const Side_bar =(props) => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleDisconnect = () => {
      if (!location.pathname == '') {navigate("/")}
        localStorage.setItem('isAuthenticated','false')
        props.updateAuth(false)
        
    }

return props.isClicked ? (

<div className="fixed right-[1%] bottom-[64%] flex flex-col justify-center items-center bg-gray-950 bg-opacity-20 z-50 ">
      <div className="sidebar-header text-[#e0c758] p-5">
        {localStorage.getItem("name")}
      </div>
      <ul className="sidebar-menu ">
      <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><IoIosNotifications className="mr-3" /> Notifications</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><FaUserFriends className="mr-3" /> Amis</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiUser className="mr-3"/> Profil</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300" onClick={handleDisconnect}><HiArrowSmRight className="mr-3"/> Se déconnecter</li>
      </ul>
    </div>
    ) : <div className="fixed right-[1%] bottom-[-100%]  flex flex-col justify-center items-center bg-gray-950 z-50 ">
    <div className="sidebar-header text-[#e0c758] p-5">
      {localStorage.getItem("name")}
    </div>
    <ul className="sidebar-menu ">
    <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><IoIosNotifications className="mr-3" /> Notifications</li>
      <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><FaUserFriends className="mr-3" /> Amis</li>
      <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiUser className="mr-3"/> Profil</li>
      <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300" onClick={handleDisconnect}><HiArrowSmRight className="mr-3"/> Se déconnecter</li>
    </ul>
  </div>
    }


export default Side_bar