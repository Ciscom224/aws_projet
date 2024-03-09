import React,{useState,useEffect} from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Boutons from '../components/Boutons';


// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {
  
  const [isRemoved,setIsRemoved] = useState(false)


useEffect(() => {
  const isRemovedFromStorage = localStorage.getItem('isRemoved') === 'true';
    setIsRemoved(isRemovedFromStorage);


}, []);

  return (
    
      <div className="w-full h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/menu_bg.jpg')"}}>

        <NavigBar setIsRemoved={setIsRemoved}/>
        {!isRemoved ? <div className='absolute left-[35%] top-[2%]'><Boutons/></div> :
        ""}
      </div>
      

  );
}

export default App;
