import React, { useState } from "react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { initial } from "../Initiale";
import InscriptionC from "./InscriptionC";

const ConnexionC = (props) => {

    const [login,setLogin] = useState(true)

    const handleLogin = () => {
        setLogin(!login)
    }
    // fonction de navigation pour naviguer entre différentes pages 
    const navigate = useNavigate();

    // Permet de gérer les formulaires (register pour enregistrer,handleSubmit pour soumettre et formState pour les erreurs )
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    // Fonction du submit de notre formulaire avec data les données enregistré par useForm 
    const onSubmit = (data) => {
        initial()
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('name',data.pseudonyme)
        window.location.reload();

    }

    return props.trigger ?
    <>
        {login && <div className="fixed inset-0 flex items-center justify-center ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto max-w-md md:h-screen lg:py-0">
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-[#e0c758]">
                Connexion
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#0c0c0c] dark:border-[#e0c758]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="/" onSubmit={handleSubmit(onSubmit)} >
                  <div>
                      <label htmlFor="pseudonyme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Pseudonyme</label>
                      <input type="text" name="pseudonyme" id="pseudonyme"
                      {...register("pseudonyme",{required: true,maxLength:30})} // on enregistre la donné pseudonyme qui est required et doit faire une taille max de 30 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant"/>
                        {errors.pseudonyme && errors.pseudonyme.type === "required" && ( // Ici par exemple on vérifieque si le label pseudo est required et que rien n'a été écris alors on affiche un message en rouge en dessous
                            <span role="alert" className="text-red-500 text-sm ">Pseudonyme requis</span>
                        )}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Mot de Passe</label>
                      <input type="password" name="password" id="password"
                        {...register("password",{required: true,maxLength:30})} 
                        placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        {errors.password && errors.password.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Mot de passe requis</span>
                        )}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-[#e0c758]">Se souvenir de moi</label>
                          </div>
                      </div>
                      <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#83794f]" >Mot de passe oublié ?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#e0c758]">Connexion</button>
                  <p className="text-sm font-light text-gray-500  dark:text-[#423d28]">
                      Créer un compte? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#83794f]" onClick={handleLogin} >Cliquez ici</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</div>
}
{!login && <InscriptionC trigger={!login}/> }
</>
: "";



                        }


export default ConnexionC