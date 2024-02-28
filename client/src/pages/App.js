import React from 'react';
// import Axios from 'axios';
import NavigBar from '../components/NavigBar';
import Boutons from '../components/Boutons';
import GamesChoice from '../components/GamesChoice';

// Cette fonction represente notre page principale et fais appelle aux composants necessaire 
function App() {

  return (
    
      <div>
        <NavigBar/>
        <GamesChoice/>
        <Boutons/>
      </div>

  );
}

export default App;
