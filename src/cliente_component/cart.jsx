"use client"

import { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import "../css/cart.css";


export function Cart({ opcion, isSelected, onCardClick }) {

    const [cod, setCod] = useState('');

    const handleClick = () => {
        onCardClick(opcion.id);
    };

    const handleButtonClick = (e) => {
        e.stopPropagation();
        onCardClick(opcion.id);
        setCod(opcion.id);
        
    };
    const cardClassName = `px-2 flex flex-col justify-start divide-y-2 space-y-2 pb-2 border-solid border-2 border-indigo-600 p-1 rounded-md pt-1 w-40 h-52 ${isSelected ? 'custom-shadow' : ''}`;

    return (

        <div>
            <div onClick={handleClick} className={cardClassName}>

                <img src={opcion.image} alt={opcion.name} className="h-32 w-full object-cover rounded-t-md" />

                <div className="space-y-3 mx-2 pt-2">

                    <p className="text-black font-semibold">{opcion.name}</p> 
                    <p className="text-gray-600">{opcion.description}</p>

                    <button className="mx-auto" onClick={handleButtonClick}>
                        <FaEllipsisV className="h-6 w-6 text-gray-500 transition duration-300 transform hover:scale-110" />
                    </button>
                    
                </div>

            </div>
        </div>


    );
}
