import React, { useState } from "react";
import Profile from "./PictureManag/Profile";

const ClassementComponent = () =>  {
  const [selectedTab, setSelectedTab] = useState('Quiz');
  const [quizLB,setQuizLB] = useState([["Avatar","UserQuiz1","2018"],["Avatar","UserQuiz2","2010"],["Avatar","UserQuiz3","1855"],["Avatar","UserQuiz4","1630"],["Avatar","UserQuiz5","1520"],["Avatar","UserQuiz6","430"]])
  const [quiz60LB,setQuiz60LB] = useState([["Avatar","UserQuiz60-1","2018"],["Avatar","UserQuiz60-2","2010"],["Avatar","UserQuiz60-3","1855"],["Avatar","UserQuiz60-4","1630"],["Avatar","UserQuiz60-5","1520"],["Avatar","UserQuiz60-6","430"],["Avatar","UserQuiz60-1","2018"],["Avatar","UserQuiz60-2","2010"],["Avatar","UserQuiz60-3","1855"],["Avatar","UserQuiz60-4","1630"],["Avatar","UserQuiz60-5","1520"],["Avatar","UserQuiz60-6","430"]])
  const [guessRLB,setguessRLB] = useState([["Avatar","UserguessR1","2018"],["Avatar","UserguessR2","2010"],["Avatar","UserguessR3","1855"],["Avatar","UserguessR4","1630"],["Avatar","UserguessR5","1520"],["Avatar","UserguessR6","430"]])
  const [selectedLB, setSelectedLB] = useState(quizLB);

  // On fera un UseEffect pour récuperer les classements depuis le serveur et appliquer les 3 set 
  const handleOnClick = (selected) => {
    setSelectedTab(selected)
    if (selected === 'Quiz') {setSelectedLB(quizLB)}
    if (selected=== '60 Sec') {setSelectedLB(quiz60LB)}
    if (selected === 'GuessR') {setSelectedLB(guessRLB)}
  }
    return (
      <div className="sm:flex ">
        <div className="sm:w-[200px] mr-4  bg-[#292727] h-full  bg-opacity-55 ">
            <div className={`p-4 text-white cursor-pointer hover:bg-[#4b4848] ${selectedTab === 'Quiz' && 'bg-[#afa9a9] bg-opacity-55'}`} onClick={() => handleOnClick('Quiz')}>Quiz </div>
            <div className={`p-4 text-white cursor-pointer hover:bg-[#4b4848] ${selectedTab === '60 Sec' && 'bg-[#afa9a9] bg-opacity-55'}` } onClick={() => handleOnClick('60 Sec')}>60 Sec! </div>
            <div className={`p-4 text-white cursor-pointer hover:bg-[#4b4848] ${selectedTab === 'GuessR' && 'bg-[#afa9a9] bg-opacity-55'}`} onClick={() => handleOnClick('GuessR')}>GuessR </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-[#2c2c2c] bg-opacity-60 rounded-lg mt-4 mr-4 sm:mt-0 ">
        <div className="p-4">
          <div className="h-[80vh] overflow-y-auto">
            <div className="flex mb-2 p-4">
                <p className="text-sm  text-gray-400 min-w-[60px]">Rank</p>
                <p className="text-sm  text-gray-400 min-w-[80px]">Avatar</p>
                <p className="text-sm  text-gray-400 min-w-[120px] ">User</p>
                <p className="text-sm  text-gray-400 w-[100px] ml-auto">Score</p>
            </div>
            <div className="border border-gray-700 mt-2"></div>
            <div className="mt-4"></div>
            {selectedLB.map((userData, index) => (
              <div key={index} className="mb-2 p-4 rounded-md bg-[#4b4848] flex bg-opacity-55 items-center justify-center">
                   <p className="text-sm text-gray-400 min-w-[60px] ">{index +1 }</p>
                   <p className="text-sm text-gray-400 min-w-[80px]"><Profile navig={false} classment={true} /></p>
                   <p className="text-sm  text-gray-400 min-w-[120px] ">{userData[1]}</p>
                   <p className="text-sm  text-gray-400 w-[100px] ml-auto">{userData[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }

export default ClassementComponent