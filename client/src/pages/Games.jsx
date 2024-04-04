import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavBar.component';
import GamesChoice from '../components/Games/GamesChoice';



// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function Games() {
  

  return (
    
      <div className="w-full h-screen bg-cover bg-center overflow-y-auto" style={{backgroundImage: "url('/images/Background/games_bg.png')"}}>
        <NavigBar />
        <GamesChoice />
      </div>
      

  )
}

export default Games;
