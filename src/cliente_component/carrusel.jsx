"use client"

import { useState, useEffect } from "react";
import { Cart } from './cart';
import Image from "next/image";

export default function Carrusel() {

    // const images = [
    //     "/assets/img1.png",
    //     "/assets/img2.png",
    //     "/assets/img3.png",
    // ];

    const data = [
        { id: 1, name: 'Herramienta 1', description: 'Conoce más', image: '/assets/cart/img1.png' },
        { id: 2, name: 'Herramienta 2', description: 'Conoce más', image: '/assets/cart/img2.png' },
        { id: 3, name: 'Herramienta 3', description: 'Conoce más', image: '/assets/cart/img3.png' },
        { id: 4, name: 'Herramienta 4', description: 'Conoce más', image: '/assets/cart/img4.png' },
        { id: 5, name: 'Herramienta 5', description: 'Conoce más', image: '/assets/cart/img5.jpg' },
        { id: 6, name: 'Herramienta 6', description: 'Conoce más', image: '/assets/cart/img6.jpg' },
        { id: 7, name: 'Herramienta 7', description: 'Conoce más', image: '/assets/cart/img7.png' },
        { id: 8, name: 'Herramienta 8', description: 'Conoce más', image: '/assets/cart/img8.jpg' },
        { id: 9, name: 'Herramienta 9', description: 'Conoce más', image: '/assets/cart/img9.jpg' },
        { id: 10, name: 'Herramienta 10', description: 'Conoce más', image: '/assets/cart/img10.jpg' },
    ];

    const [ide_car, setIde_cart] = useState(0);
    const [selectedId, setSelectedId] = useState(data[0].id);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    const handleCardClick = (id) => {
        setSelectedId(id);
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < data.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedData = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex justify-center mx-40 items-center bg-b-b">

            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 0} className="transform transition-transform duration-300">
                    <Image src={'/assets/atras.png'} width={40} height={40} className="w-auto h-8" alt="Botón para ir a la página anterior" />
                </button>
            </div>

            <div className="flex gap-1 justify-center w-full mt-5" style={{ minHeight: '100px', paddingBottom: '20px' }}>
                {selectedData.map(opcion => (
                    <Cart
                        key={opcion.id}
                        opcion={opcion}
                        isSelected={selectedId === opcion.id}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

            <div>
                <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= data.length} className="transform transition-transform duration-300">
                    <Image src={'/assets/delantero.png'} width={40} height={40} className="w-auto h-8 rotate-90" alt="Botón para ir a la página siguiente" />
                </button>
            </div>
        </div>

    );
}

