import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import GamesChoice from '../components/GamesChoice';



// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {
  

  return (
    
      <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/games_bg.jpg')"}}>
        <NavigBar />
        <GamesChoice />
      </div>
      

  )
}

export default App;
