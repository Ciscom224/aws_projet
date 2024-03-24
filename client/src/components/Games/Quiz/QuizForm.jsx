import { useState } from "react"
import { useForm } from "react-hook-form"
import { useQuizStore } from "../../../store"
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const QuizForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const [progressValue,setProgressValue] = useState(20)
    
    
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

    const theme = useQuizStore((state) => state.theme)

    const onSubmit =  (data) => {
        if (progressValue != 100) {setProgressValue(progressValue+20)}
    }

    const [number,setNumber] = useState(1)

    // const navigate = useNavigate()
      return(
        <div className="fixed inset-0 flex  ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto sm:max-w-md  lg:py-0 ">
        
            <div className="w-full bg-white sm:rounded-lg shadow dark:border  xl:p-0 dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent h-full sm:h-auto mt-[95px]">
                <h2 className="font-bold px-3 py-5 text-xl sm:text-xl text-[#070707] text-shadow">Thème : {theme}</h2>
                <p className="font-bold px-3 py-5 text-xl sm:text-xl text-[#070707] text-shadow">Question {progressValue / 20 } / 5 </p>
                <div className="px-5 w-[80%]"><BorderLinearProgress variant="determinate" value={progressValue} /></div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative ">
                    
                <div 
                    className="absolute top-6 right-6  flex  justify-center  translate-x-1/2 -translate-y-1/2 ">
                         <img src="/images/HibouQuizWiz.png" alt="bug" className="w-1/3 cursor-pointer hidden sm:block "/>
                </div>
              
              <form className="space-y-4 md:space-y-6  " action="#" onSubmit={handleSubmit(onSubmit)} >
                  
                  <div>
                      <input type="text" name="pseudonyme" id="pseudonyme"
                  
                      {...register("pseudonyme",{maxLength:30})} 
                      className="bg-gray-50 border border-gray-300 text-[#313030] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant"/>
                
                  </div>
                  <div>
                      
                      <input type="text" name="email" id="email" 
                      {...register("email",{maxLength:30})} placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    
                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" 
                      {...register("password",{maxLength:30})} placeholder="Mot de passe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  
                  </div>
                  <div>
                      
                      <input type="password" name="confirmpassword" 
                      {...register("confirmpassword",{maxLength:30})} id="Confirmpassword" placeholder="Confirmation du mot de passe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                 
                     
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          
                      </div>
                  </div>
                  
                  <button type="submit"    className="w-full text-white bg-[#2f9421] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#eeeeed] hover:scale-105 duration-300
                  hover:bg-[#245e2c]"  >Soumettre </button>
              </form>
          
          </div>
      </div>
  </div>
  </div> )
  }

  export default QuizForm