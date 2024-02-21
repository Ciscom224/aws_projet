import { useState } from 'react';
import Axios from 'axios';
import NavigBar from './components/NavigBar';
import Boutons from './components/Boutons';
import GamesChoice from './components/GamesChoice';

// style= {{backgroundImage: `url(${"https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`}}className='w-full h-full rounded-2xl bg-center'
function App() {

  const jouer = () => {
    alert("Connectez vous d'abord sss! ")
  }
  return (
    <div>
      <div>
        <NavigBar/>
        <GamesChoice/>
        <Boutons/>
      </div>
      </div>
  );
}

export default App;
