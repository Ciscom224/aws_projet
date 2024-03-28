import { useState,useEffect } from "react"
import { useForm } from "react-hook-form"
import { useQuizStore } from "../../../store"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { FormControlLabel, Radio, styled} from '@mui/material';
import Profile from "../../PictureManag/Profile";
import { useNavigate } from "react-router-dom";
//import HeighPage from "../../HeighPage";



const QuizForm = () => {
  

    //const distancePy = HeighPage()

  const {
      handleSubmit,
  } = useForm()
  const navigate = useNavigate()
 

  const theme = useQuizStore((state) => state.theme)
  const questions = useQuizStore((state)=> state.questions)
  const choice = useQuizStore((state)=> state.choices)
  const points = useQuizStore((state)=> state.points)
  const answers = useQuizStore((state)=> state.answers)
  const setPoints = useQuizStore((state)=> state.setPoints)
  const resetPoints = useQuizStore((state)=> state.resetPoints)
  const [progressValue,setProgressValue] = useState(1)
  const [selectedValues, setSelectedValues] = useState([]);
  const [countdown, setCountdown] = useState(20);
  const [inGame,setInGame] = useState(true)


    
    // Pour mettre a jour le temps 
    useEffect(() => {
      const timer = setTimeout(() => {
          if (countdown > 0) {
              setCountdown(countdown - 1);
          }
          else {
            if (progressValue!=5)
            {
            setProgressValue(progressValue+1)
            setCountdown(20);
            }
          }
      }, 1000);

      // Nettoie le timer lorsque le composant est démonté
      return () => clearTimeout(timer);
  }, [countdown]);
    
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

    const handleOnClick = (button) => {
        resetPoints()
        if (button ==="menu") {navigate("/")}
        else {navigate("/games")}
    }
    const handleChange =(value) => {
        //console.log(selectedValues)
        if (selectedValues.includes(value)) {
            setSelectedValues(selectedValues.filter((item) => item !== value));
          } else {
            setSelectedValues([...selectedValues, value]);
          }
    }
    const onSubmit =  () => {
       
        setCountdown(20);
        if (progressValue !== 5) {
          setProgressValue(progressValue+1)
          if (JSON.stringify(selectedValues) === JSON.stringify(answers[progressValue-1])) {
            setPoints(countdown)
          }
        }
        else {
          setInGame(false)
          // IcI le axios pour envoyé les points au BackEnd
        }
        setSelectedValues([])
        

    }

    // const navigate = useNavigate()
      return(
        <div className="fixed inset-0 flex py-5">
        
        <div className="flex flex-col items-center justify-center  sm:mt-5 mx-auto  sm:max-w-md  lg:py-0  w-full ">
        {inGame ? <> 
            <div className="w-full bg-white sm:rounded-lg shadow dark:border  dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent h-full sm:h-auto mt-[95px] ">
            
                <h2 className="font-bold px-3 py-5 text-md text-x sm:text-xl text-[#070707] text-shadow">Thème : {theme}</h2>
                <p className="font-bold px-3 py-5 text-md sm:text-xl text-[#070707] text-shadow hidden sm:block">Question {progressValue} / 5 </p>
                <div className="px-5 w-[80%] "><BorderLinearProgress variant="determinate" value={100 - Math.floor((20 - countdown) / 20 * 100)} />
                {/* {progressValue === 5 && <p>Score : {points} </p>} */}
                
                <p className=" sm:hidden">{progressValue} / 5 </p>
                </div>
                
                <div className="p-8 space-y-4 md:space-y-6 sm:p-8 relative ">
                <p className="font-bold text-md sm:text-xl text-[#070707] text-shadow h-12">{questions[progressValue-1]} </p>
                
                <div 
                    className="absolute top-0 right-0  flex  justify-center  translate-x-1/2 -translate-y-[130%] ">
                         <img src="/images/HibouQuizWiz.png" alt="bug" className="w-1/3 cursor-pointer hidden sm:block "/>
                </div>
               
              
              <form className= "flex flex-wrap" action="#"  onSubmit={handleSubmit(onSubmit)} >
             
                <FormControlLabel className="mt-5 border-2 rounded-lg border-black w-full" value="b" control={<Radio sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][0])} checked={selectedValues.includes(choice[progressValue-1][0])}/>} label={choice[progressValue-1][0]} />
                <FormControlLabel className="mt-5 border-2 rounded-lg border-black w-full" value="c" control={<Radio sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][1])} checked={selectedValues.includes(choice[progressValue-1][1])}/>} label={choice[progressValue-1][1]} />
                <FormControlLabel className="mt-5 border-2 rounded-lg border-black w-full" value="a" control={<Radio sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][2])} checked={selectedValues.includes(choice[progressValue-1][2])}/>} label={choice[progressValue-1][2]} />
                <FormControlLabel className="mt-5 border-2 rounded-lg border-black w-full" value="d" control={<Radio sx={{ color: "black",'&.Mui-checked': { color: '#1e0554',}}} onClick={() => handleChange(choice[progressValue-1][3])} checked={selectedValues.includes(choice[progressValue-1][3])}/>} label={choice[progressValue-1][3]} />
           
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
            <div className="mr-10"><Profile navig={false} /></div>
            <p className="font-bold mt-3 text-xl text-[#070707] text-shadow ">Votre Score : {points} </p>
            
          </div>
          <div className="sm:flex sm:flew-wrap">
            <button
                  onClick={() => handleOnClick("menu")}
                  className=" w-full text-black bg-[#d86666] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000] hover:scale-105 duration-300 hover:bg-[#6b744e]   sm:mr-2 sm:mt-2 sm:w-1/2"
                >
                  Revenir au menu
                </button>
                <button
                  onClick={() => handleOnClick("")}
                  className=" w-full text-black bg-[#37768f] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000] hover:scale-105 duration-300 hover:bg-[#afb9b0]    mt-5 sm:mt-2 sm:w-1/2"
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