import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Boutons from '../components/Boutons';


// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {
  
  const [isRemoved,setIsRemoved] = useState(false)

  return (
    
      <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/games_bg.jpg')"}}>
        <NavigBar setIsRemoved={setIsRemoved} />
      </div>
      

  );
}

export default App;
