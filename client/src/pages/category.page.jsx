import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function GamePage({ changeBgImage }) {

    const navigate = useNavigate();


    useEffect(() => {
        changeBgImage("url('/images/category-bg.jpg')");
    }, [changeBgImage]);

    return (
<div className="flex justify-center items-center h-screen">
    <div className="grid grid-cols-4 grid-rows-2 gap-2">
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie1</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie2</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie3</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie4</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie5</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie6</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie7</div>
        <div className='bg-white w-32 h-40 md:w-40 md:h-40 shadow-lg rounded-md z-10 text-center cursor-pointer'>Categorie8</div>
    </div>
</div>



    );
}
