import React from 'react';
import NavigBar from '../components/NavigBar';
import ClassementComponent from '../components/ClassementComp'; 

function Classement() {
  return (
    <div className="fixed w-full h-full bg-cover bg-center " style={{backgroundImage: "url('/images/Background/classement_bg.png')"}}>
      <NavigBar /> 
      <div className="ml-2 mt-28" > 
        <ClassementComponent /> 
      </div>
    </div>
  );
}

export default Classement;