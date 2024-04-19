import { useState,useEffect } from "react"
import { useForm } from "react-hook-form"
import { useQuizStore } from "../../../store"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FormControlLabel, Radio, styled} from '@mui/material';
import { useNavigate } from "react-router-dom";
import Profile1 from "../../PictureManag/Profile1";
import HeighPage from "../../HeighPage";



const QuizForm = () => {
  
  //const distancePy = HeighPage() Ca nous aidera plus tard pour la responsive mais en hauteur et pas largeur 
  const distancePy = HeighPage()
  const {
      handleSubmit,
  } = useForm()
  const navigate = useNavigate()
 
  // Appelle des variables et fonctions necessaire de notre Store
  const theme = useQuizStore((state) => state.theme)
  const questions = useQuizStore((state)=> state.questions)
  const choice = useQuizStore((state)=> state.choices)
  const points = useQuizStore((state)=> state.points)
  const answers = useQuizStore((state)=> state.answers)
  const setPoints = useQuizStore((state)=> state.setPoints)
  const resetPoints = useQuizStore((state)=> state.resetPoints)

  // States permettant la gestion de notre jeu 
  const [progressValue,setProgressValue] = useState(1)
  const [selectedValues, setSelectedValues] = useState([]);
  const [countdown, setCountdown] = useState(20);
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
            setTimeout(() => {
             setColor("border-black");
             setSelectedValues([])
            if (progressValue!=5)
            {
            setProgressValue(progressValue+1)
            setCountdown(20);
            }
            else {
              setInGame(false)
            }
            setIsDisable(false)
            }, 2000)
            
          
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
    // Fonction du submit, ou on met en place le submit pour chaque question et on calcule les points + le countdown 
    const onSubmit =  () => {
      setColor("border-[#008000]")
      setIsDisable(true)
      setTimeout(() => {
        setCountdown(20);
        if (JSON.stringify(selectedValues) === JSON.stringify(answers[progressValue-1])) {
          setPoints(countdown)
        }
        if (progressValue !== 5) {
          setProgressValue(progressValue+1)
        }
        else {
          setInGame(false)
          // IcI le axios pour envoyé les points au BackEnd
        }
        setSelectedValues([])
        setColor("border-black");
        setIsDisable(false)
      }, 2000);
        

    }
      return theme !== "" && (
        <div className="inset-0 flex sm:py-5">
        
        <div className="  sm:mt-5 mx-auto  sm:max-w-md  lg:py-0  w-full ">
        {inGame ? <> 
            <div className={`w-full h-screen ${distancePy < 73 ? "space-y-2" : "space-y-5"} bg-white sm:rounded-lg shadow dark:border  dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent  sm:h-auto `}>
            
                <h2 className="font-bold px-3  text-md text-x sm:text-xl text-[#070707] text-shadow">Thème : {theme}</h2>
                <p className="font-bold px-3  text-md sm:text-xl text-[#070707] text-shadow hidden sm:block">Question {progressValue} / 5 </p>
                <div className="px-5 w-[80%] "><BorderLinearProgress variant="determinate" value={100 - Math.floor((20 - countdown) / 20 * 100)} />
                <p className=" sm:hidden">{progressValue} / 5 </p>
                </div>
                
                <div className={`px-8 py-4 space-y-4 ${distancePy < 73 ? "space-y-0" : "space-y-5"}  relative `}>
                <p className={`font-bold ${distancePy < 73 ? "text-sm" : "text-md"} text-[#070707] text-shadow h-12`}>{questions[progressValue-1]} </p>
                
                <div 
                    className={`absolute  ${distancePy < 73 ? "top-16" : "top-0"} right-0  flex  justify-center  translate-x-1/2 -translate-y-[130%] `}>
                         <img src="/images/HibouQuizWiz.png" alt="bug" className="w-1/3 cursor-pointer hidden sm:block "/>
                </div>
               
              
              <form className={`flex flex-wrap sm:h-auto ${distancePy < 73 ? "space-y-2" : "space-y-6 py-10"}`} action="#"  onSubmit={handleSubmit(onSubmit)} >
             
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1].includes(choice[progressValue-1][0]) ? color : "border-black"} w-full`} value="b" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][0])} checked={selectedValues.includes(choice[progressValue-1][0])}/>} label={choice[progressValue-1][0]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1].includes(choice[progressValue-1][1]) ? color : "border-black"} w-full`} value="c" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][1])} checked={selectedValues.includes(choice[progressValue-1][1])}/>} label={choice[progressValue-1][1]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1].includes(choice[progressValue-1][2]) ? color : "border-black"} w-full`} value="a" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][2])} checked={selectedValues.includes(choice[progressValue-1][2])}/>} label={choice[progressValue-1][2]} />
                <FormControlLabel className={` border-2 rounded-lg ${answers[progressValue-1].includes(choice[progressValue-1][3]) ? color : "border-black"} w-full`} value="d" control={<Radio disabled={isDisable} sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][3])} checked={selectedValues.includes(choice[progressValue-1][3])}/>} label={choice[progressValue-1][3]} />
                <button
                  type="submit"
                  className="fixed bottom-[5%] w-[80%] text-black bg-[#b6af8f] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000] hover:scale-105 duration-300 hover:bg-[#afb9b0] sm:relative sm:block sm:left-[70%] sm:mt-10 sm:w-1/3"
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
  </div> )
  }

  export default QuizForm