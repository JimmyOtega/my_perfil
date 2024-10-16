"use client"

import { useState } from 'react';
import { Localizacion } from "@/cliente_component/localizacion";
import { Nav } from './section_nav';
import { Informacion_Cliente } from "@/cliente_component/section_informacion_cliente";
import { Persona } from './persona';
import { Estudios } from './estudios';
import { Experiencias } from './experiencias';

export function Informacion() {

    const [activeComponent, setActiveComponent] = useState('informacion');


    const handleButtonClick = (component) => {
        setActiveComponent(component);
    };


    return (

        <div className="rounded-tl-[30px] rounded-bl-[30px] w-[900px] h-auto bg-custom-white m-0  pt-6 mx-auto">
            <div className="flex sm:justify-center mb-4">
                <Nav className="h-10" onButtonClick={handleButtonClick} />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-0 px-5">
                <div className="hidden md:block w-56 mt-5">
                    <Localizacion />
                </div>

                <div className="-mx-48 w-[630px] h-[570px]">

                    {activeComponent === 'informacion' && <Informacion_Cliente />}

                    {activeComponent === 'persona' && <Persona />} 

                    {activeComponent === 'estudios' && <Estudios />} 

                    {activeComponent === 'experiencias' && <Experiencias />} 

                    {/* <Informacion_Cliente/> */}

                </div>

            </div>
        </div>
    );
}
