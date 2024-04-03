import React, { useState } from "react";
<<<<<<< HEAD
import {useForm} from "react-hook-form";
import InscriptionC from "./InscriptionC";
import { SpanAlerte } from "../SpanAlert";
import { GrClose } from "react-icons/gr";
=======
import { useForm } from "react-hook-form";
import InscriptionC from "./InscriptionC";
import { SpanAlerte } from "../SpanAlert";
import { GrClose } from "react-icons/gr";
import axios from 'axios';
>>>>>>> 1c11198992ed75602840032cf0cf270afd9ca570
// import AlertVariousStates from "./AlerteAuth"
import { useAuthStore, useRemovedMenu } from "../../store";



const ConnexionC = (props) => {

<<<<<<< HEAD
    const [login,setLogin] = useState(true)
    const setFalse = useRemovedMenu((state)=> state.setFalse);
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
=======
    const [login, setLogin] = useState(true)
    const setFalse = useRemovedMenu((state) => state.setFalse);
    const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated)
    const [errors,setErrors]=useState({
        email:"",
        password:""
    })
>>>>>>> 1c11198992ed75602840032cf0cf270afd9ca570


    const handleLogin = () => {
        setLogin(!login)
    }

    // Permet de gérer les formulaires (register pour enregistrer,handleSubmit pour soumettre et formState pour les erreurs )
    const {
        register,
        handleSubmit,
<<<<<<< HEAD
        formState: {errors},
    } = useForm()

    // Fonction du submit de notre formulaire avec data les données enregistré par useForm 
    const onSubmit = (data) => {
    
        
        setIsAuthenticated(true);
        localStorage.setItem('name',data.pseudonyme)
        props.onClose()
        setFalse()
        alert("Connexion reussi !!!!!!!!!!!!")

    }

    const handleOnClose= ()=> {
=======
    } = useForm()

    // Fonction du submit de notre formulaire avec data les données enregistré par useForm 
    const onSubmit =  (data) => {

         axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: data
        }).then((res) => {
            if(res.status !== 200){
                setIsAuthenticated(true);
                localStorage.setItem('name', res.data.user.surName)
                props.onClose()
                setFalse( )
            }else{
                setErrors({
                    email:res.data.email,
                    password:res.data.password
                })
            }
         
           
        }).catch((res) => {
            console.log(res)
            // redirection vers la page erreur
        })
      
    }

    const handleOnClose = () => {
>>>>>>> 1c11198992ed75602840032cf0cf270afd9ca570
        props.onClose()
        setFalse()
    }

    return props.trigger ?
<<<<<<< HEAD
    <>
        {login && <div className="fixed inset-0 flex items-center justify-center ">
        
        <div className="flex flex-col w-full items-center justify-center mx-auto max-w-md md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#FFFFFF] dark:bg-opacity-10 dark:border-transparent">
           
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
                <button onClick={handleOnClose} className="absolute top-0 right-0 rounded-full bg-[#FFFFFF] bg-opacity-10 w-10 h-10 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 hover:bg-[#a84040]"
                ><GrClose className="text-[#ffffff]"/></button>
              <form className="space-y-4 md:space-y-6" action="/" onSubmit={handleSubmit(onSubmit)} >
                  <div>
                      {/* <label htmlFor="pseudonyme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Pseudonyme</label> */}
                      <input type="text" name="pseudonyme" id="pseudonyme"
                      {...register("pseudonyme",{required: true,maxLength:30})} // on enregistre la donné pseudonyme qui est required et doit faire une taille max de 30 
                      className="bg-gray-50 border border-gray-300 text-[#313030] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Identifiant"/>
                        {errors.pseudonyme && errors.pseudonyme.type === "required" && ( // Ici par exemple on vérifieque si le label pseudo est required et que rien n'a été écris alors on affiche un message en rouge en dessous
                            <SpanAlerte message = "Pseudonyme requis"/>
                        )}
                  </div>
                  <div>
                      {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Mot de Passe</label> */}
                      <input type="password" name="password" id="password"
                        {...register("password",{required: true,maxLength:30})} 
                        placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        {errors.password && errors.password.type === "required" && (
                           <SpanAlerte message = "Mot de passe requis"/>
                        )}
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" 
                            {...register("remember")}
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-[#fcfafa]">Se souvenir de moi</label>
                          </div>
                      </div>
                      <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#fffefc]" >Mot de passe oublié ?</a>
                  </div>
                  <p className="text-sm font-light text-gray-500  dark:text-[#fffffe]">
                      Créer un compte? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#f0efec]" onClick={handleLogin} >Cliquez ici</a>
                  </p>
                  <button type="submit" className="w-full text-white bg-[#2f9421] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#eeeeed] hover:scale-105 duration-300
                  hover:bg-[#245e2c]"
                  >Connexion</button>
                  
              </form>

          </div>
      </div>
  </div>
</div>
}
{!login && <InscriptionC trigger={!login} onClose={props.onClose} toLogin={handleLogin} /> }

</>
: "";



                        }
=======
        <>
            {login && <div className="fixed inset-0 flex items-center justify-center ">

                <div className="flex flex-col w-full items-center justify-center mx-auto max-w-md md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-[#FFFFF] dark:bg-opacity-10 dark:border-transparent">

                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
                            <button onClick={handleOnClose} className="absolute top-0 right-0 rounded-full bg-[#FFFFFF] bg-opacity-10 w-10 h-10 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 hover:bg-[#a84040]"
                            ><GrClose className="text-[#ffffff]" /></button>
                            <form className="space-y-4 md:space-y-6" action="/" onSubmit={handleSubmit(onSubmit)} >
                                <div>
                                    {/* <label htmlFor="pseudonyme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Pseudonyme</label> */}
                                    <input type="email" name="Email " id="pseudonyme"
                                        {...register("email", { required: true, maxLength: 30 })} // on enregistre la donné pseudonyme qui est required et doit faire une taille max de 30 
                                        className="bg-gray-50 border border-gray-300 text-[#313030] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre email" />
                                    {errors.email !==""?( // Ici par exemple on vérifieque si le label pseudo est required et que rien n'a été écris alors on affiche un message en rouge en dessous
                                        <SpanAlerte message={errors.email} />
                                    ):null}
                                </div>
                                <div>
                                    {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#e0c758]">Mot de Passe</label> */}
                                    <input type="password" name="password" id="password"
                                        {...register("password", { required: true, maxLength: 30 })}
                                        placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#FFFFFF] dark:border-gray-600 dark:placeholder-[#474444] dark:text-[#474444] dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    { errors.password !== "" ? (
                                        <SpanAlerte message={errors.password} />
                                    ):null}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                {...register("remember")}
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-[#fcfafa]">Se souvenir de moi</label>
                                        </div>
                                    </div>
                                    <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#fffefc]" >Mot de passe oublié ?</a>
                                </div>
                                <p className="text-sm font-light text-gray-500  dark:text-[#fffffe]">
                                    Créer un compte? <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 dark:text-[#f0efec] cursor-pointer" onClick={handleLogin} >Cliquez ici</a>
                                </p>
                                <button type="submit" className="w-full text-white bg-[#2f9421] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#eeeeed] hover:scale-105 duration-300
                  hover:bg-[#245e2c]"
                                >Connexion</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
            }
            {!login && <InscriptionC trigger={!login} onClose={props.onClose} toLogin={handleLogin} />}

        </>
        : "";



}
>>>>>>> 1c11198992ed75602840032cf0cf270afd9ca570


export default ConnexionC