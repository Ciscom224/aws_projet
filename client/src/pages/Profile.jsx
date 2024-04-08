import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Profile_joeur from '../components/Profile_joueur';



// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function Profile() {
  

  return (
    
    <div className=" w-full h-screen bg-cover bg-center overflow-y-auto" style={{backgroundImage: "url('/images/Background/menu_bg.jpg')"}}>
        <NavigBar />
        <Profile_joeur />
      </div>
      

  )
}

export default Profile;
