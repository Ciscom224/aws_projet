import React from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Boutons from '../components/Boutons';
import { useRemovedMenu } from '../store';


// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {
  

  const MenuRemoved = useRemovedMenu((state) => state.isRemoved)
  


  return (
    
      <div className="fixed w-full h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/menu_bg.jpg')"}}>

        <NavigBar />
        {!MenuRemoved ? <div className='absolute left-[35%] top-[2%]'><Boutons/></div> :
        ""}
      </div>
      

  );
}

export default App;
