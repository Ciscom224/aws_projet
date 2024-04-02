import React from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Boutons from '../components/Boutons';
import { useRemovedMenu } from '../store';


// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {
  
  // On remove le Menu (image + catalogue) si on clique sur inscription et autre
  const MenuRemoved = useRemovedMenu((state) => state.isRemoved)
  


  return (
    
      <div className="fixed w-full h-full bg-cover bg-center " style={{backgroundImage: "url('/images/Background/menu_bg.jpg')"}}>

        <NavigBar />
        {!MenuRemoved ? <div className='fixed w-full h-1/3 m-auto '><Boutons/></div> :
        ""}
      </div>
      

  );
}

export default App;
