import React from 'react';
import NavigBar from '../components/NavigBar';
import ClassementComponent from '../components/ClassementComp'; 
import AmisComp from '../components/AmisComp';

function Amis() {
  return (
    <div className="fixed w-full h-full bg-cover bg-center " style={{backgroundImage: "url('/images/Background/classement_bg.png')"}}>
      <NavigBar /> 
      <div className="ml-2 mt-28" > 
        <AmisComp /> 
      </div>
    </div>
  );
}

export default Amis;