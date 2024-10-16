import Carrusel from "./carrusel";

export function Informacion_Cliente() {

    return (

        <div className="flex flex-col items-center space-y-6 sm:space-y-4 sm:justify-center sm:h-screen shadow-xl">

            <div className="w-full sm:w-auto sm:flex sm:justify-center">

                <Carrusel />

                <br />

                <h2 className="text-slate-950 font-bold text-center">
                    ¿ Cómo puedo{" "}
                    <span className="text-custom-blue-claro">Ayudarte ? </span>
                </h2>

                <br />
                <h2 className="text-slate-950 font-bold px-5">
                    Formuario{" "}
                    <span className="text-custom-blue-claro">LLena los campos </span>
                </h2>
                <br />
                <form className="flex flex-col space-y-2 sm:w-full sm:max-w-xs  bg-b-b p-4 rounded-lg">
                    <input
                        type="text"
                        placeholder="Nombres -----"
                        className="px-5 border border-gray-300"
                    />
                    <input
                        type="email"
                        placeholder="Correo -----"
                        className="px-5 border border-gray-300"
                    />
                    <textarea
                        placeholder="Mensaje -----"
                        className="px-5 border border-gray-300"
                        rows="3"
                    />
                    <button
                        type="submit"
                        className="h-8 transition-opacity duration-300 hover:opacity-75 bg-custom-blue font-bold rounded-tl-[30px] rounded-bl-[30px] border border-blue-100"
                    >
                        Enviar formulario
                    </button>
                </form>
            </div>


        </div>

    );
}
