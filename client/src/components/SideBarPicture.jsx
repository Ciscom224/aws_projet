

import { HiArrowSmRight, HiUser } from 'react-icons/hi';
import { FaUserFriends } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useLocation,useNavigate } from 'react-router-dom';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { GoTrophy } from "react-icons/go";
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

<div className="fixed flex flex-col justify-center items-center bg-gray-950  bg-opacity-90 rounded-lg">
      <div className="sidebar-header text-[#e2cb63] font-bold p-5 text-xl ">
        {localStorage.getItem("name")}
      </div>
      <ul className="sidebar-menu border-t border-[#4e4b4b] ">
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><IoIosNotifications className="mr-3" /> Notifications</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 16 }} className="mr-3"/> Messages</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 md:hidden"><GoTrophy className="mr-3"/> Classement</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><FaUserFriends className="mr-3" /> Amis</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiUser className="mr-3"/> Profil</li>
        <li className="p-2 flex items-center text-[#FFFFFF] hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300 border-t border-[#4e4b4b]" onClick={handleDisconnect}><HiArrowSmRight className="mr-3"/> Se déconnecter</li>
      </ul>
    </div>
    ) : ""
    }


export default Side_bar