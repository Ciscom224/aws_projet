import React, { useState } from "react";
import userReducer from "../reducers/user.reducer"
import {useSelector } from "react-redux";
import Profile1 from "./PictureManag/Profile1";
import { useLocation, useNavigate,useParams} from "react-router-dom";
import QuizForm from "./Games/Quiz/QuizForm";


const RoomLobby = () =>  {
    const userData = useSelector((state) => state.userReducer);
    const [users,setUsers] = useState([[userData.surName,userData.profilImage],["Player2","Photo"],["Player2","Photo"],["Player2","Photo"],["finalPlayer","Photo"]])
    const location = useLocation()
    const navigate = useNavigate()
    const {id} = useParams()
    const { questions, choice, answers, theme ,themeSelect } = location.state;

    const onClick = () => {
      navigate("/games/quiz",{
        state: {
          questions,
          choice,
          answers,
          theme,
          multi:true,
          usersData:users
        }
      })
    }
    return (
      <>
    <div className="sm:flex ">
      <div className="sm:w-[300px] h-screen bg-[#2c2c2c]">
        <div className=" h-[92vh] overflow-y-auto">
          <p className="flex mb-2 p-4 text-white font-bold text-2xl">Joueurs Connecté : </p>
          {users.map((user, index) => (
            <div className="mb-2 p-4 rounded-md bg-[#4b4848] flex flex-col bg-opacity-55 items-center justify-center ">
              <div className="flex flex-row items-center">
                <p className="text-sm text-gray-400 min-w-[60px] "><Profile1 navig={false} classment={true} /> </p>
                <p className="text-sm text-gray-400 min-w-[80px] font-bold ">{user[0]} </p>
              </div>
            </div>
            ))}
        </div>
      </div>
      
      

      <div className="flex-1 h-screen overflow-y-auto">
        <div className=" flex py-8 space-y-8 sm:space-x-8 sm:space-y-0 sm:flex-row ">
          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Room ID : {id}
          </p>
          <button className="mt-1 px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#99458b]" onClick={onClick}>Lancer la partie</button>
          
        </div>
        <div className="items-center justify-center flex">
          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Voici les Thèmes selectionné :
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
        <div className="m-4  items-center justify-center py-16 px-10 flex flex-wrap ml-20 ">
          {themeSelect.map((theme, index) => (
            <img src={`/images/Themes/${theme}.png`} alt="bug" className={`w-[200px]  rounded-2xl  mr-12  mb-10 `}/>
          ))}
        </div>
        </div>
    

      </div>
    </div>
      </>
    );
  }

export default RoomLobby