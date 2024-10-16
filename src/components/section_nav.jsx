

export function Nav({ onButtonClick }) {



  return (

    <div className="sm:w-[550px] px-10 mx-5 h-[70px] relative">

      <div className="w-full h-full rounded-[30px] bg-b-b flex items-center justify-center">

        <div className="flex justify-center space-x-20 px-2 sm:space-x-20">

          <button  onClick={() => onButtonClick('informacion')} // Llama a la función al hacer clic
            className="focus:outline-none transition-opacity duration-300 hover:opacity-75"
          >
            <img className="block mx-auto w-12 h-auto" src="/assets/casa.png" alt="Casa" />
          </button>

          <button  onClick={() => onButtonClick('persona')} // Cambia esto según el componente que desees mostrar
            className="focus:outline-none transition-opacity duration-300 hover:opacity-75"
          >
            <img className="block mx-auto w-14 h-auto" src="/assets/person.png" alt="Persona" />
          </button>

          <button  onClick={() => onButtonClick('estudios')} // Puedes agregar más componentes aquí
            className="focus:outline-none transition-opacity duration-300 hover:opacity-75"
          >
            <img className="block mx-auto w-12 h-auto" src="/assets/graduacion.png" alt="Graduación" />
          </button>

          <button onClick={() => onButtonClick('experiencias')} // Y aquí también
            className="focus:outline-none transition-opacity duration-300 hover:opacity-75"
          >
            <img className="block mx-auto w-12 h-auto" src="/assets/libro.png" alt="Libro" />
          </button>

        </div>
      </div>
    </div>




    // <div className="sm:w-[550px] px-10 mx-5 h-[70px] relative">
    //   <div className="w-full h-full rounded-[30px] bg-b-b flex items-center justify-center">

    //     <div className="flex justify-center space-x-20 px-2 sm:space-x-20">

    //       <button className="focus:outline-none transition-opacity duration-300 hover:opacity-75">
    //         <img className="block mx-auto w-12 h-auto" src="/assets/casa.png" alt="Casa" />
    //       </button>

    //       <button className="focus:outline-none transition-opacity duration-300 hover:opacity-75">
    //         <img className="block mx-auto w-14 h-auto" src="/assets/person.png" alt="Persona" />
    //       </button>

    //       <button className="focus:outline-none transition-opacity duration-300 hover:opacity-75">
    //         <img className="block mx-auto w-12 h-auto" src="/assets/graduacion.png" alt="Graduación" />
    //       </button>

    //       <button className="focus:outline-none transition-opacity duration-300 hover:opacity-75">
    //         <img className="block mx-auto w-12 h-auto" src="/assets/libro.png" alt="Libro" />
    //       </button>

    //     </div>

    //   </div>
    // </div>

  );
}
