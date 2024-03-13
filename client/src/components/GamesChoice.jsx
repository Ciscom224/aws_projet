import React,{useState} from "react";


// Ceci represente le composant pour notre choix de jeu qui sera dans la page de menu represente par les images/
const GamesChoice = () => {
    const [Clicked,setClicked] = useState("")
    const games = [
        {
            url: "/images/Quiz_Games.jpg"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        
    ];

    const gameSelected = (url) => {
        setClicked(url)
    }

   
    return(
        <>
        {Clicked === "" &&
        <div className="fixed left-3 top-20 py-5 px-8"><p className="text-[#050505] font-bold text-2xl  rounded-lg p-4  hover:shadow-xl transition duration-300">Liste des jeux</p>
        <div className="fixed  left-3 top-20  h-full w-full m-auto py-24 px-10 flex flex-wrap ">
            
            {games.map((game, index) => (
        <div key={index} className="w-1/4 h-1/3 px-2 py-2" onClick={() => gameSelected(game.url)}>
            <img src={game.url} alt={`Game ${index}`} className="w-full h-full rounded-2xl object-cover hover:scale-105 duration-300" />
        </div>
    ))}
        </div>
        </div> }
        {Clicked !== "" && <>
        <div className="fixed left-[47%] top-20 py-5 "><p className="text-[#050505] font-bold text-2xl  rounded-lg p-4  hover:shadow-xl transition duration-300">REGLES DU JEU </p>
        <div className="fixed  left-3 top-20  h-full w-full m-auto py-24 px-10 flex flex-wrap ">
        
            
            
        <div  className="w-full h-full px-2 py-2" >
            <img src={Clicked} alt="e" className="w-full h-3/4 rounded-2xl object-cover " />
        </div>
        
    
        </div>
        
        </div>
        <div className="fixed left-[40%] top-[80%] py-5 "><button className="bg-[#3B19E5] text-[#E8E8F2] w-[200px] sm:w-[300px] md:w-[400px] rounded-3xl font-medium py-3 mt-4 hover:bg-[#110e1f] hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"
        >
        JOUER
    </button></div> </>}
        </>
    );
}

export default GamesChoice