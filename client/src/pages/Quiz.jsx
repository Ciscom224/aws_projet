import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import QuizForm from '../components/Games/Quiz/QuizForm';



// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function Quiz() {
  
  
  return (
    
      <div className="w-full h-screen bg-cover bg-center " style={{backgroundImage: "url('/images/Background/quiz_bg.png')"}}>
        <NavigBar />
        <QuizForm />
      </div>
      

  )
}

export default Quiz;
