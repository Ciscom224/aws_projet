import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import ThemeChoice from '../components/Games/Quiz/ThemeChoice';



// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function QuizChoice() {
  

  return (
    
      <div className="w-full h-screen bg-cover bg-center overflow-y-auto" style={{backgroundImage: "url('/images/Background/theme_bg.png')"}}>
        <NavigBar />
        <ThemeChoice />
      </div>
  )
}

export default QuizChoice;
