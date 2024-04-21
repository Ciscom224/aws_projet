import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import quizReducer from "../../../reducers/quiz.reducer"
import {useSelector } from "react-redux";





// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {
  
  const listeQuiz = ["Informatique","Animaux","Celebrites","Cinema","Culture","Geographie","Histoire","Musique","Sciences"]
  const quizData = useSelector((state) => state.quizReducer);

  const navigate = useNavigate()

  function shuffleChoices(choices) {
    for (let i = choices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      shuffleArray(choices[i]);
      shuffleArray(choices[j]);
    }
    return choices;
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const onClick = (Theme) => {

    const index = listeQuiz.indexOf(Theme)

    const selectedQuizData = quizData[index];
    const questionsTexts = selectedQuizData.questions.map(question => question.text);
    let questionsChoices = selectedQuizData.questions.map(question => question.choices);
    const questionsAnswers = selectedQuizData.questions.map(question => question.answers);
    
    if (questionsTexts.length === 0) 
      {
        alert("Les questions du thème " + Theme + " ne sont pas encore implementé, ca Arrive ! " )
      }

     else {
      questionsChoices = shuffleChoices(questionsChoices)
      navigate("/games/quiz",{
      state: {
        questions:questionsTexts,
        choice:questionsChoices,
        answers:questionsAnswers,
        theme:Theme
      }
    })
  }
  }
    return(
       
        
        <div className="py-8 px-8 flex flex-col  items-center justify-center">

          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Choisis ton Quiz
          </p>
          <div className="m-4  items-center justify-center py-16 px-10 flex flex-wrap ml-20 ">
            <img src="/images/Themes/histoire.png" alt="bug" className="w-[200px]  rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Histoire")}/>
            <img src="/images/Themes/musique.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Musique")}/>
            <img src="/images/Themes/culture_generale.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Culture")}/>
            <img src="/images/Themes/geographie.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300  mr-12 cursor-pointer mb-10 " onClick={() => onClick("Geographie")}/>
            <img src="/images/Themes/animaux.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Animaux")}/>
            <img src="/images/Themes/celebrites.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Celebrites")}/>
            <img src="/images/Themes/cinema.png" alt="bug" className="w-[200px]  rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 "onClick={() => onClick("Cinema")}/>
            <img src="/images/Themes/informatique.png" alt="bug" className="w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 " onClick={() => onClick("Informatique")}/>
        </div>

        </div>

       
    );
}

export default GamesChoice