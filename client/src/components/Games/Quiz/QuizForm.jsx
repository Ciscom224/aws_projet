import { useState,useEffect } from "react"
import { useForm } from "react-hook-form"
import { useQuizStore } from "../../../store"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FormControlLabel, Radio, styled} from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import Profile1 from "../../PictureManag/Profile1";
import HeighPage from "../../HeighPage";




const QuizForm = () => {
  
  //const distancePy = HeighPage() Ca nous aidera plus tard pour la responsive mais en hauteur et pas largeur
  const location = useLocation()
  const { questions, choice, answers, theme , multi , usersData } = location.state;
  const distancePy = HeighPage()
  const [messages,setMessages] = useState([])
  const [colorAnswer,setColorAnswer] = useState(null)

  const {
      register,
      handleSubmit,
  } = useForm()

  const { handleSubmit: handleSubmit2, register: register2 ,reset} = useForm();
  const navigate = useNavigate()
  

  // Appelle des variables et fonctions necessaire de notre Store

  const points = useQuizStore((state)=> state.points)
  const setPoints = useQuizStore((state)=> state.setPoints)
  const resetPoints = useQuizStore((state)=> state.resetPoints)

  // States permettant la gestion de notre jeu

  const [progressValue,setProgressValue] = useState(1)
  const [selectedValues, setSelectedValues] = useState([]);
  const [countdown, setCountdown] = useState(10);
  const [color,setColor] = useState("border-black")
  const [inGame,setInGame] = useState(true)
  const [isDisable,setIsDisable] = useState(false)

  

  

  // Pour mettre a jour le temps 
    useEffect(() => {
      // Si on recharge la page, on sera renvoyé au menu car theme vaudra 0 dans ce cas
      if (theme === "") {
        navigate("/games");
      }
      
      // on met en place un Timeout avec le countdown pour faire un useEffect toutes les secondes
      const timer = setTimeout(() => {
          if (countdown > 0) {
              setCountdown(countdown - 1);

          }
          else {
            setColor("border-[#008000]")
            setIsDisable(true)
            if (multi) {
              if (JSON.stringify(selectedValues) === JSON.stringify(answers[progressValue-1])) {
                setColorAnswer("border-[#21F214]");
              } else {setColorAnswer("border-[#F82205]");}}
            setTimeout(() => {
              setColor("border-black");
              setSelectedValues([])
              if (progressValue!=20)
              {
              setProgressValue(progressValue+1)
              setCountdown(10);
              }
              else {
                setInGame(false)
              }
              setIsDisable(false)
              if (multi) {setColorAnswer(null)}
            }, multi ? 5000 : 2000)
            
            
          
          }
     
      }
      
              , 1000);

      // Nettoie le timer lorsque le composant est démonté
      return () => clearTimeout(timer);
  }, [countdown]);
    
    // La barre de progression qui nous permet de gérer le temps restant des questions
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1e0554' : '#308fe8',
        },
      }));
    
    // Fonction pour le clique des boutons a la fin de la game ou on reset les points et on renvoie en fonction du choix
    const handleOnClick = (button) => {
        resetPoints()
        if (button ==="menu") {navigate("/")}
        else {navigate("/games")}
    }
    // cette fonction permet de gérer les values selectionnées dans notre formulaire (des Radio)
    const handleChange =(value) => {
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((item) => item !== value));
          } else {
            setSelectedValues([...selectedValues, value]);
          }
    }
    const onSubmit2 = (data) => {
      const updatedMessages = [...messages, ["Farouk", data.message]];
      setMessages(updatedMessages)
      reset()
    }
    // Fonction du submit, ou on met en place le submit pour chaque question et on calcule les points + le countdown 
    const onSubmit =  () => {
      setIsDisable(true)
      if (JSON.stringify(selectedValues) === JSON.stringify(answers[progressValue-1])) {
        setPoints(10 + countdown)
      }
      if (!multi) {
        setColor("border-[#008000]")
        setTimeout(() => {
        setCountdown(10);
        
        if (progressValue !== 20) {
          setProgressValue(progressValue+1)
        }
        else {
          setInGame(false)
          // IcI le axios pour envoyé les points au BackEnd
        }
        //setSelectedValues([])
        setColor("border-black");
        setIsDisable(false)
      }, 2000);
    } else {
      setColorAnswer("border-[#827C7B]")
    }
        

    }
    // MULTI
      return  (
        <>
        <div className="inset-0 flex">
        
        <div className="  sm:mt-5 mx-auto  sm:max-w-md  lg:py-0  w-full ">
        {inGame ? <> 
            <div className={`w-full sm:mt-10 h-screen ${distancePy < 73 ? "space-y-2" : "space-y-5"} bg-white sm:rounded-lg shadow dark:border  dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent  sm:h-auto `}>
            
                <h2 className="font-bold px-3  text-md text-x sm:text-xl text-[#070707] text-shadow">Thème : {theme[progressValue-1]}</h2>
                <p className="font-bold px-3  text-md sm:text-xl text-[#070707] text-shadow hidden sm:block">Question {progressValue} / 20</p>
                <div className="px-5 w-[80%] "><BorderLinearProgress variant="determinate" value={100 - Math.floor((10 - countdown) / 10 * 100)} />
                <p className=" sm:hidden">{progressValue} / 20</p>
                </div>
                
                <div className={`px-8 py-4 space-y-4 ${distancePy < 73 ? "space-y-0" : "space-y-5"}  relative `}>
                <p className={`font-bold ${distancePy < 73 ? "text-sm" : "text-md"} text-[#070707] text-shadow h-12`}>{questions[progressValue-1]} </p>
                
                <div 
                    className={`absolute  ${distancePy < 73 ? "top-16" : "top-8"} right-0  flex  justify-center  translate-x-1/2 -translate-y-[130%] `}>
                         <img src="/images/HibouQuizWiz.png" alt="bug" className="w-1/3 cursor-pointer hidden sm:block "/>
                </div>
               
              
              <form className={`flex flex-wrap sm:h-auto ${distancePy < 73 ? "space-y-2" : "space-y-6 py-10"}`} action="#"  onSubmit={handleSubmit(onSubmit)} >
             
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1][0].includes(choice[progressValue-1][0]) ? color : "border-black"} w-full`} value="b" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][0])} checked={selectedValues.includes(choice[progressValue-1][0])}/>} label={choice[progressValue-1][0]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1][0].includes(choice[progressValue-1][1]) ? color : "border-black"} w-full`} value="c" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][1])} checked={selectedValues.includes(choice[progressValue-1][1])}/>} label={choice[progressValue-1][1]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1][0].includes(choice[progressValue-1][2]) ? color : "border-black"} w-full`} value="a" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][2])} checked={selectedValues.includes(choice[progressValue-1][2])}/>} label={choice[progressValue-1][2]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1][0].includes(choice[progressValue-1][3]) ? color : "border-black"} w-full`} value="d" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][3])} checked={selectedValues.includes(choice[progressValue-1][3])}/>} label={choice[progressValue-1][3]} />
                <button
                  type="submit"
                  className="fixed bottom-[5%] w-[80%] text-black bg-[#b6af8f] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000] hover:scale-105 duration-300 hover:bg-[#afb9b0] sm:relative sm:block sm:left-[70%] sm:mt-10 sm:w-1/3"
                  disabled={isDisable}
                >
                  Submit
                </button>
           
              </form>
          
          </div> 
      </div> </>: <>
      <div className="w-full bg-white rounded-lg shadow dark:border  dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent h-auto mt-[95px] ">
          <div className=" flex  px-3 py-5 ml-10">
            <div className="mr-10"><Profile1 navig={false} classment={false} /></div>
            <p className="font-bold mt-3 text-xl text-[#070707] text-shadow ">Votre Score : {points} </p>
            
          </div>
          <div className="sm:flex sm:flew-wrap">
            <button
                  onClick={() => handleOnClick("menu")}
                  className=" w-full text-black bg-[#d86666] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000]  hover:bg-[#b85d5d]   sm:mr-2 sm:mt-2 sm:w-1/2"
                >
                  Revenir au menu
                </button>
                <button
                  onClick={() => handleOnClick("")}
                  className=" w-full text-black bg-[#37768f] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000]  hover:bg-[#305f68]    mt-5 sm:mt-2 sm:w-1/2"
                >
                  Choix de Jeu
                </button>
                </div>
         </div>
        </> }
  </div>

  {multi &&
  <>
  <div className="sm:w-[280px] h-screen bg-[#2c2c2c] mr-5">
  <div className=" h-[92vh] overflow-y-auto">
  
    {usersData.map((user, index) => (
      <div className={`mb-2 p-4 rounded-md bg-[#4b4848] flex flex-col bg-opacity-55 items-center justify-center border-4 ${colorAnswer ? colorAnswer : "border-transparent"}`}>
        <div className="flex flex-row items-center">
          <p className="text-sm text-gray-400 min-w-[60px] "><Profile1 navig={false} classment={true} /> </p>
          <p className="text-sm text-gray-400 min-w-[80px] font-bold ">{user[0]} </p>
        </div>
        <p className="text-sm text-gray-400 min-w-[80px] ml-[60px] font-bold "> Questions :  </p>
        <p className="text-sm text-gray-400 min-w-[80px] ml-[60px] font-bold "> Points :  </p>
      </div>
      ))}
  </div>
</div>
  <div className="h-screen bg-[#292727] w-[300px] overflow-hidden">
      <div className="h-[85vh] overflow-hidden">
      {messages.map((userData, index) => (
              <div key={index} className=" rounded-md mb-3 bg-transparent border-none flex">
                   <p className="text-md font-bold  text-gray-400 ml-2 break-normal">{userData[0]}: </p>
                   <p className="text-md text-gray-400 ml-2 break-normal">{userData[1]}</p>
              </div>
            ))}
      </div>
    <div className="fixed bottom-[64px] px-2 w-full border-b border-[#8a8b3d]"></div>
    <div className="fixed bottom-2">
      <form onSubmit={handleSubmit2(onSubmit2)} className="w-full">
        <div className="flex items-center border-b  px-2 border-[#8a8b3d] py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-[#FFFFFF] mr-3 py-1 px-2  focus:outline-none"
            type="text"
            placeholder="Entrez votre message..."
            {...register2("message",{required: true})}
          />
          <button
            className="flex-shrink-0 bg-[#8a8b3d] hover:bg-[#8a8b3d] border-[#8a8b3d] hover:border-[#8a8b3d] text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
  </>
  }
  </div>

</>)
  
  }

  export default QuizForm