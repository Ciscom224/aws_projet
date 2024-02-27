import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { useNavigate,useLocation } from "react-router-dom";
import NavigBar from "../components/NavigBar";

// Represente la page de vérification d'email apres inscription afin de pouvoir se connecter
const EmailConfirmation = () => {

    // location va nous permettre de récupérer les (props) de notre EmailConfirmation et afin de pouvoir les appeler dans les fonctions en dessous (voir la page Inscription pour les props)
    const location = useLocation()

    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        // On appelle ici location pour récuperer le props code 
        if (data.code == location.state.code) {
            alert("Inscription reussi")
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('name',location.state.pseudonyme) // On stocke le nom de l'utilisateur pour l'afficher a gauche de dans notre navigBar
            navigate("/")
        }
        else {
            alert("Code mauvais veuillez ressayer")
        }

    }

    return (
        <div>
            <NavigBar/>
        <section className="bg-gray-50 dark:bg-[#000300]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-[#e0c758]">
          Le code a été envoyé a votre email
            
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#0c0c0c] dark:border-[#e0c758]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)} >
                  <div>
                      <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Code de vérification</label>
                      <input type="text" name="code" id="code"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("code",{required: true,maxLength:30})} 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple : 54286"/>
                   {errors.code && errors.code.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Code Requis</span>
                        )}
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#e0c758]" >Confirmation</button>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
    );
};

export default EmailConfirmation
