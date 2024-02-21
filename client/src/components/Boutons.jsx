import React from "react"

const Boutons = () => {

    const jouer = () => {
        alert("Connectez vous d'abord sss! ")
      }
    return (
        <div className="flex  items-center">
            <button className="bg-[#e0c758] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 hover:bg-[#8f7c27] hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
            onClick={jouer}>Jouer</button>
            <div className="absolute top-2 right-14">

            </div>
        </div>
        
    )
}

export default Boutons
