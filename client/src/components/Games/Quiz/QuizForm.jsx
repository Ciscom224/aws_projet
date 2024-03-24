import { useState } from "react"
import { useForm } from "react-hook-form"
import { useQuizStore } from "../../../store"

const QuizForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const theme = useQuizStore((state) => state.theme)

    const onSubmit =  (data) => {
        setNumber(number+1)
    }

    const [number,setNumber] = useState(1)

    // const navigate = useNavigate()
      return(
        <div className="fixed inset-0 flex  ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto sm:max-w-md  lg:py-0 ">
        
            <div className="w-full bg-white sm:rounded-lg shadow dark:border  xl:p-0 dark:bg-[#FFFFFF] dark:bg-opacity-50 dark:border-transparent h-full sm:h-auto mt-[95px]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative ">
                <div 
                    className="absolute top-6 right-6  flex  justify-center  translate-x-1/2 -translate-y-1/2 ">
                         <img src="/images/HibouQuizWiz.png" alt="bug" className="w-1/3 cursor-pointer mb-10 md:mb-0 hidden sm:block "/>
                </div>
              
              <form className="space-y-4 md:space-y-6  " action="#" onSubmit={handleSubmit(onSubmit)} >
                  <h2 className="font-bold text-xl sm:text-2xl text-[#070707] text-shadow">{theme}</h2>
                  <div>
                      <input type="text" name="pseudonyme" id="pseudonyme"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("pseudonyme",{required: true,maxLength:30})} 
                      className="bg-gray-50 border border-gray-300 text-[#313030] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant"/>
                
                  </div>
                  <div>
                      
                      <input type="text" name="email" id="email" 
                      {...register("email",{required: true,maxLength:30})} placeholder="Email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    
                  </div>
                  <div>
                      
                      <input type="password" name="password" id="password" 
                      {...register("password",{required: true,maxLength:30})} placeholder="Mot de passe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  
                  </div>
                  <div>
                      
                      <input type="password" name="confirmpassword" 
                      {...register("confirmpassword",{required: true,maxLength:30})} id="Confirmpassword" placeholder="Confirmation du mot de passe" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                 
                     
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-[#fcfafa]">Se souvenir de moi</label>
                          </div>
                      </div>
                  </div>
                  <p className="text-sm font-light text-gray-500  dark:text-[#fffffe]">
                      Déja inscris ? <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#fffefc]"  >Cliquez ici</a>
                  </p>
                  <button type="submit"    className="w-full text-white bg-[#2f9421] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#eeeeed] hover:scale-105 duration-300
                  hover:bg-[#245e2c]"  >Inscription</button>
              </form>
          
          </div>
      </div>
  </div>
  </div> )
  }

  export default QuizForm