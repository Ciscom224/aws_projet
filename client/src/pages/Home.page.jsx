import React,{useState,useEffect,useContext} from 'react';
import Boutons from '../components/Boutons';
import { UidContext } from "../AppContext";
import NavBar from '../components/NavBar.component';


// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function Home() {
    const uid = useContext(UidContext);

  return (
    <div className="fixed w-full h-full bg-cover bg-center " >
          <Boutons uid={uid} />
    </div>
    

  )
}

export default Home;
