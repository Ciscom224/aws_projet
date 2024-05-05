import React, { useEffect, useState } from "react";
import userReducer from "../reducers/user.reducer"
import {useSelector } from "react-redux";
import Profile1 from "./PictureManag/Profile1";
import { useLocation, useNavigate,useParams} from "react-router-dom";
import { useSocket } from "../pages/App";
import { IoClose } from "react-icons/io5";
import Swal from 'sweetalert2';


const RoomLobby = () =>  {
    const userData = useSelector((state) => state.userReducer);
    const [users,setUsers] = useState([])
    const [themeSelect,setThemeSelect] = useState([])
    const navigate = useNavigate()
    const {id} = useParams()
    const socket = useSocket();
  
    useEffect(() => {
      socket.emit('getRoom',id,"RoomLobby 1",(success) => {
        setUsers(success[0])
        setThemeSelect(success[1])
      })
    }, []);

    useEffect(() => {
      const lobbyChangedHandler = () => {
        socket.emit('getRoom', id, "RoomLobby 2", (success) => {
          setUsers(success[0])
          setThemeSelect(success[1])
        });
      };
      const gameStartedHandler = () => {
        socket.emit('getQuiz', id, (success) => {
          socket.emit('getRoom', id, "RoomLobby 3", (updatedUsers) => {
            navigate(`/games/quiz/${id}`, {
              state: {
                questions: success[0],
                choice: success[1],
                answers: success[2],
                theme: success[3],
                multi: true,
                usersData: updatedUsers[0]
              }
            });
          });
        });
      };
      const kickHandler =(username) => {
        if (userData.surName === username) {
          socket.emit('disconnected',id);
          Swal.fire({
            icon: "error",
            color: "#ede6ca",
            background:"#33322e",
            title: "Vous avez été kick...",
          });
          navigate("/games/quizchoice")
        } else {

        }
      }
      socket.on('playerKicked', kickHandler);
      socket.on('lobby_changed', lobbyChangedHandler);
      socket.on('game_started', gameStartedHandler);
      
      return () => {
        socket.off('playerKicked', kickHandler);
        socket.off('lobby_changed', lobbyChangedHandler);
        socket.off('game_started', gameStartedHandler);
      };

    }, [socket]);

    const handleKick =  (username) => {
      socket.emit('kick',id,username);
      // socket.emit('getRoom', id, "RoomLobby 2", (success) => {
      //   console.log(success[0])
      //   setUsers(success[0])
      // });
    }
    const handleDisconnect =() => {
      socket.emit('disconnected',id);
      if (users.length === 1) {
        socket.emit('deleteRoom',id);}
      navigate('/games')
    }
    const onclick = () => {
      socket.emit('start_game',id)
      socket.emit('getQuiz',id,(success) => {
        navigate(`/games/quiz/${id}`,{
          state: {
            questions:success[0],
            choice:success[1],
            answers:success[2],
            theme:success[3],
            multi:true,
            usersData:users
          }
        })
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
                {userData.surName === users[0][0] && userData.surName !== user[0] &&
                  <p className="rounded-full min-w-[20px] mr-5 bg-[#726969] cursor-pointer" onClick={() => handleKick(user[0])}><IoClose style={{ fontSize: '28px', color: 'red' }}/></p>
                }
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
          <button className="mt-1 px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#99458b]" onClick={onclick}>Lancer la partie</button>
          <button className="mt-1 px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#ce2e2e]" onClick={handleDisconnect}>Quitter la Room</button>
        </div>
        <div className="items-center justify-center flex">
          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Voici les Thèmes selectionné :
          </p>
        </div>
        <div className="flex flex-col items-center justify-center ">
        <div className="m-4  items-center justify-center py-16 px-10 flex flex-wrap ml-20 ">
          {themeSelect.map((theme, index) => (
            <img key={index} src={`/images/Themes/${theme}.png`} alt="bug" className={`w-[200px]  rounded-2xl  mr-12  mb-10 `}/>
          ))}
        </div>
        </div>
    

      </div>
    </div>
      </>
    );
  }

export default RoomLobby