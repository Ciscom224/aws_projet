import React,{useState,useEffect} from 'react';
import NavigBar from '../components/NavigBar';
import {useForm} from "react-hook-form";
// Assurez-vous que SpanAlerte est utilisé si nécessaire
// import { SpanAlerte } from "/Users/charbeltouma/Desktop/aws_3/aws_projet/client/src/components/SpanAlert.jsx";
import Profile from "./PictureManag/Profile";
import { useLocation,useNavigate } from 'react-router-dom';
import { useAuthStore, useRemovedMenu } from "../store";

const Profile_joeur =  (props)=> {
  const setFalse = useRemovedMenu((state)=> state.setFalse);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const [pseudo, setPseudo] = useState(localStorage.getItem("name"));
  const [Email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const [pseudoMessage, setPseudoMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: {errors},
} = useForm()

  const onSubmitPseudo = () => {
    console.log(pseudo);
    localStorage.setItem('name', pseudo);
    setPseudoMessage("Vous avez changé votre pseudonyme")
    setEmailMessage("");
    setPasswordMessage("");

    
    setFalse();
  };

  const onSubmitEmail = () => {
    console.log(Email);
    localStorage.setItem('email', Email);
    setEmailMessage("Vous avez changé votre email")
    setPseudoMessage("");
    setPasswordMessage("");
    setFalse();
  };

  const onSubmitPassword = () => {
    console.log(password);
    localStorage.setItem('password', password);
    setPasswordMessage("Vous avez changé votre mot de passe")
    setPseudoMessage("");
    setEmailMessage("");
    setFalse();
  };

  

  const handleChangePseudo = (event) => {
    console.log("pseudotestttttttt",event.target.value);
    const value = event.target.value;
    setPseudo(value);
  };

  const handleChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  <div className="flex flex-col items-center justify-center  sm:mt-5 mx-auto  sm:max-w-md  lg:py-0  w-full "> 

  </div>
  return (
    <div className="flex ">
      <div className=" fixed w-full h-full  bg-cover bg-center overflow-y-auto" >
      <div className="flex items-center justify-center h-screen">
        
          <div className="fixed justify-center  bg-[#D9D9D9] opacity-95  w-full sm:w-1/3 h-3/4 items-center rounded-2xl mt-[100px] space-y-8 overflow-y-auto  ">

          <div class="absolute  sm:block hidden top-[170px]  sm:top-[160px]  right-0 justify-center  sm:translate-x-[69%] sm:-translate-y-[98%] ">
            <img src="/images/HibouQuizWiz.png" alt="bug" class="w-1/3"></img>
            </div>

            <div className="fixed  right-1/3 text-3xl top-[22%]  sm:text-4xl sm:left-[40%] font-['Carter_One'] font-bold md:text-3xl md:left-[42%]"> 
                Score: 30023
            </div>

            <p className="fixed top-[20%] left-[7%] text-sm text-gray-400 min-w-[80px] sm:left-[35%]"><Profile navig={false} classment={false} /></p>

            <form className="w-full px-8" action="/" onSubmit={handleSubmit(onSubmitPseudo)}>
              <div>
                <input
                  type="text" 
                  name="pseudonyme"
                  {...register("pseudonyme", { required: true, maxLength: 30 })}
                  className="absolute top-[150px] w-2/3  justify-between p-4 bg-white borderborder-[#E8DECF] rounded-2xl " 
                  value={pseudo}
                  onChange={handleChangePseudo}
                />
                <p className="absolute top-[115px] left-[40px] text-sm  text-[#383838] min-w-[60px] py-3 ">Pseudo</p>
              </div>
              <input type="submit" hidden />
              {pseudoMessage && <p className="absolute text[#000000] top-[215px] ml-3">{pseudoMessage}</p>}
            </form>

              <form className="w-full px-8" action="/" onSubmit={handleSubmit(onSubmitEmail)}>
   
              <div>
                <input 
                  type="text" 
                  name="email"
                  {...register("email", { required: true, maxLength: 50 })}
                  className="absolute top-[270px] w-2/3  justify-between p-4 bg-white border border-[#E8DECF] rounded-2xl " 
                  value={Email}
                  onChange={handleChangeEmail}
                />
                <p className="absolute top-[235px] left-[40px] text-sm  text-[#383838] min-w-[60px] py-3 ">Email</p>
              </div>
              <input type="submit" hidden />
              {emailMessage && <p className="absolute text[#000000] top-[330px] ml-3">{emailMessage}</p>}
            </form>

            <form className="w-full px-8" action="/" onSubmit={handleSubmit(onSubmitPassword)}>
              <div>
                <input 
                  type="password" 
                  name="Password"
                  {...register("password", { required: true, maxLength: 30 })}
                  className="absolute top-[390px] w-2/3 justify-between p-4 bg-white border border-[#E8DECF] rounded-2xl " 
                  value={password}
                  onChange={handleChangePassword}
                />
                <p className="absolute top-[355px] left-[40px] text-sm  text-[#383838] min-w-[60px] py-3 ">Mot de passe</p>
              </div>
              <input type="submit" hidden />
              {passwordMessage && <p className="absolute text[#000000] top-[450px] ml-3">{passwordMessage}</p>}
            </form>
            <button type="submit" className="absolute top-[450px] left-9 text-lg text-[#000000] bg-[#ffffff] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:text-[#000000] hover:scale-105 duration-300 hover:bg-[#38a446]" onClick={() => navigate("/amis")}
                  >List d'amis</button> 
                    

          </div>

          </div>
          


        </div>
      </div>
  );
};

export default Profile_joeur;