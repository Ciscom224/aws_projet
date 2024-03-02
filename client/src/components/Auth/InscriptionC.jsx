import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { sendAuthMail } from "../SendMailConfirm";
import { initial } from "../Initiale";
import EmailConfirmation from "../../pages/EmailConfirmation";

// notre page d'inscription, qui ressemble beaucoup a celle du Login.
const InscriptionC = (props) => {

    const [login,setLogin] = useState(true)
    const [pseudo,setPseudo] = useState("")
    const [codeVal,setCodeVal] = useState(0)

    // Watch ici permet de vérifier une valeur de notre register
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()

    const handleLogin = () => {
        setLogin(!login)
    }

    // Fonction du submit de l'inscription qui envoie un mail avec un code généré aléatoirement au mail de l'inscription et qui doit le vérifier pour s'inscrire 
    const onSubmit = async (data) => {
        initial()
        console.log("ICI")
        try {
        const code = Math.floor(Math.random() * 1000000);
        await sendAuthMail(data.email,code);
        setCodeVal(code)
        setPseudo(data.pseudonyme)
        handleLogin()
        } catch(err) {
            console.log(err)
        }
    }
    return props.trigger ?
    <>
        {login && <div className="fixed inset-0 flex items-center justify-center ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto max-w-md md:h-screen lg:py-0">
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-[#e0c758]">
                Inscription
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#0c0c0c] dark:border-[#e0c758]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)} >
                  <div>
                      <label htmlFor="pseudonyme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Pseudonyme</label>
                      <input type="text" name="pseudonyme" id="pseudonyme"
                      aria-invalid={errors.name ? "true" : "false"}
                      {...register("pseudonyme",{required: true,maxLength:30})} 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant"/>
                   {errors.pseudonyme && errors.pseudonyme.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Pseudonyme Requis</span>
                        )}
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Email</label>
                      <input type="text" name="email" id="email" 
                      {...register("email",{required: true,maxLength:30})} placeholder="nom.prenom@email.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "/>
                    {errors.email && errors.email.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Email requis</span>
                        )}
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Mot de Passe</label>
                      <input type="password" name="password" id="password" 
                      {...register("password",{required: true,maxLength:30})} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.password && errors.password.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Mot de Passe requis</span>
                        )}
                  </div>
                  <div>
                      <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Confirmer Mot de Passe</label>
                      <input type="password" name="confirmpassword" 
                      {...register("confirmpassword",{required: true,maxLength:30})} id="Confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.confirmpassword && errors.confirmpassword.type === "required" && (
                            <span role="alert" className="text-red-500 text-sm ">Confirmation du mot de passe requis</span>
                        )}
                     {!errors.confirmpassword && watch("password") !== watch("confirmpassword") && (
                            <span role="alert" className="text-red-500 text-sm ">Les mots de passe ne correspondent pas</span>
                        )}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-[#e0c758]">Se souvenir de moi</label>
                          </div>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#e0c758]"  >Inscription</button>
              </form>
          </div>
      </div>
  </div>
  </div>
}
{!login && <EmailConfirmation code = {codeVal} pseudonyme = {pseudo}/>}
  </>
     : "";
}

export default InscriptionC