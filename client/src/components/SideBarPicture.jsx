
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const Side_bar =() => {
    
    const handleDisconnect = () => {
        localStorage.setItem('isAuthenticated','false')
        window.location.reload();
    }

return (

<div className="fixed right-[1%] bottom-[70%] flex flex-col justify-center items-center bg-gray-950 ">
      <div className="sidebar-header text-[#e0c758] p-5">
        {localStorage.getItem("name")}
      </div>
      <ul className="sidebar-menu ">
        <li className="p-2 flex items-center hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiInbox className="mr-3" /> Amis</li>
        <li className="p-2 flex items-center hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300"><HiUser className="mr-3"/> Profil</li>
        <li className="p-2 flex items-center hover:bg-[#e0c758] hover:text-[#070707] cursor-pointer hover:scale-105 duration-300" onClick={handleDisconnect}><HiArrowSmRight className="mr-3"/> Se déconnecter</li>
      </ul>
    </div>
    )
    }


export default Side_bar