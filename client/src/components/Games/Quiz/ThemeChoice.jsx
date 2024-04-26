import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import quizReducer from "../../../reducers/quiz.reducer"
import {useSelector } from "react-redux";
import { useForm } from "react-hook-form";





// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
} = useForm()

  const listeQuiz = ["informatique","animaux","celebrites","cinema","culture","geographie","histoire","musique","sciences"]
  const [themeSelect,setThemeSelect] = useState([])
  const [isMulti,setIsMulti] = useState(false)
  const quizData = useSelector((state) => state.quizReducer);

  const navigate = useNavigate()

  const handleThemeSelected = (theme) => {
    const themeIndex = themeSelect.indexOf(theme)
    let updatedThemes
    if (themeIndex !== -1) {updatedThemes = themeSelect.filter((item) => item !== theme)} 
    else {updatedThemes = [...themeSelect, theme]}
    setThemeSelect(updatedThemes)
  }

  function shuffleAll(theme, questions, choices, answers) {
    const n = questions.length;

    const indices = Array.from({ length: n }, (_, index) => index);

    for (let i = n - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 

        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const shuffledTheme = [];
    const shuffledQuestions = [];
    const shuffledAnswers = [];
    const shuffledChoices = [];

    // Utilisez indices.length pour itérer sur les indices mélangés
    for (let i = 0; i < indices.length; i++) {
        const newIndex = indices[i];
        const oldIndex = i;

        shuffledTheme[newIndex] = theme[oldIndex];
        shuffledQuestions[newIndex] = questions[oldIndex];
        shuffledAnswers[newIndex] = answers[oldIndex];
        shuffledChoices[newIndex] = choices[oldIndex];
    }

    return { shuffledTheme, shuffledQuestions, shuffledChoices, shuffledAnswers };
}
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

  const onClick = () => {
    
    let questionsTheme = []
    let questionsTexts = []
    let questionsChoices = []
    let questionsAnswers = []
    let selectedQuestionIndices = new Set();
    const totalTheme = themeSelect.length
    const questionsperTheme = Math.floor(20 / totalTheme)
    let remainingQuestions = 20 % totalTheme


    themeSelect.forEach((theme) => {
      
      const index = listeQuiz.indexOf(theme)
      const selectedQuizData = quizData[index]

      const themeQuestions = selectedQuizData.questions

      const questionsForThisTheme = questionsperTheme + (remainingQuestions > 0 ? 1 : 0)
      if (remainingQuestions > 0) {remainingQuestions = remainingQuestions-1}

      while (selectedQuestionIndices.size < questionsForThisTheme) {
        const randomIndex = Math.floor(Math.random() * themeQuestions.length);
        if (!selectedQuestionIndices.has(randomIndex)) {
            selectedQuestionIndices.add(randomIndex);

            const selectedQuestion = themeQuestions[randomIndex];
            questionsTheme.push(theme);
            questionsTexts.push(selectedQuestion.text);
            questionsChoices.push(selectedQuestion.choices);
            questionsAnswers.push(selectedQuestion.answers);
        }
    }
    selectedQuestionIndices = new Set()
    })
    // console.log(questionsTheme)
    // console.log(questionsTexts)
    // console.log(questionsChoices)
    // console.log(questionsAnswers)

    const shuffleResult = shuffleAll(questionsTheme, questionsTexts, questionsChoices, questionsAnswers);

    questionsTheme = shuffleResult.shuffledTheme;
    questionsTexts = shuffleResult.shuffledQuestions;
    questionsChoices = shuffleResult.shuffledChoices;
    questionsAnswers = shuffleResult.shuffledAnswers;

    // console.log("--------------------------------------------------")
    // console.log(questionsTheme)
    // console.log(questionsTexts)
    // console.log(questionsChoices)
    // console.log(questionsAnswers)

    if (questionsTexts.length < 5){
        alert("Les questions des thèmes " + themeSelect + " ne sont pas encore implementé, ca Arrive ! " )
      }

    else {
      questionsChoices = shuffleChoices(questionsChoices)
      if (isMulti) {
        navigate("/room",{
          state: {
            questions:questionsTexts,
            choice:questionsChoices,
            answers:questionsAnswers,
            theme:questionsTheme,
            themeSelect:themeSelect
          }
        })
      }
      else {
        navigate("/games/quiz",{
          state: {
            questions:questionsTexts,
            choice:questionsChoices,
            answers:questionsAnswers,
            theme:questionsTheme,
            multi:false,
            usersData:null
          }
        })
      }  
  }
  }
    return(

      <>
        <div className="items-center justify-center flex flex-col py-8 space-y-8 sm:space-x-8 sm:space-y-0 sm:flex-row ">
          <p className="font-bold text-2xl sm:text-4xl text-[#070707] text-shadow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Choisis ton Quiz
          </p>
          <button className={`mt-1 px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#3db967]  bg-opacity-60`} onClick={() => setIsMulti(!isMulti)}>{isMulti ? "Multijoueur" : "Solo"}</button>
          <button className="mt-1  px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#99458b]" onClick={onClick}>Créer la partie</button>
          {isMulti && 
            <form className="space-x-6">
                <input type="text" placeholder="ID de la room"
                {...register("RoomID",{required: true,maxLength:30})}
                />
                  <button type="submit" className="mt-1 px-5 py-2.5 border border-[#b3abab] rounded-lg bg-[#ce81c1]">Rejoindre</button>
            </form>
          }
          
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="m-4  items-center justify-center py-16 px-10 flex flex-wrap ml-20 ">
            <img src="/images/Themes/histoire.png" alt="bug" className={`w-[200px]  rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10  ${themeSelect.includes("histoire") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("histoire")}/>
            <img src="/images/Themes/musique.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("musique") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("musique")}/>
            <img src="/images/Themes/culture.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("culture") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("culture")}/>
            <img src="/images/Themes/geographie.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300  mr-12 cursor-pointer mb-10 ${themeSelect.includes("geographie") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("geographie")}/>
            <img src="/images/Themes/animaux.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("animaux") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("animaux")}/>
            <img src="/images/Themes/celebrites.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("celebrites") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("celebrites")}/>
            <img src="/images/Themes/cinema.png" alt="bug" className={`w-[200px]  rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("cinema") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("cinema")}/>
            <img src="/images/Themes/informatique.png" alt="bug" className={`w-[200px] rounded-2xl hover:scale-105 duration-300 mr-12 cursor-pointer mb-10 ${themeSelect.includes("informatique") && "border-4 border-[#48ff70]" }`} onClick={() => handleThemeSelected("informatique")}/>
        </div>

        </div>
        </>

       
    );
}

export default GamesChoice