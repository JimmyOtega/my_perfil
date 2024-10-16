import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export function Perfil() {
  return (

    <div className="relative flex flex-col px-2  sm:flex-row justify-center sm:space-x-4">

      <div className="relative w-full rounded-tl-[50px] rounded-bl-[50px] sm:w-[300px] h-[680px] bg-b-b m-0 shadow-xl">

        <img
          className="block mx-auto rounded-full w-32 h-32 sm:w-36 sm:h-36 top-16 mt-20 sm:mt-28"
          src="/assets/jimmy.png"
          alt="imagen"
        />

        <h2 className="text-center text-custom-black text-lg sm:text-xl mt-5">Jimmy Ortega Rodriguez</h2>
        <p className="text-center text-custom-black  text-sm sm:text-base">Ingeniero de sistemas</p>

        <div className="flex justify-center space-x-4 mt-10 sm:mt-10">
          <h1 className="flex items-center text-3xl sm:text-4xl">
            <FaWhatsapp className="text-4xl sm:text-5xl" />
          </h1>
          <h1 className="flex items-center text-3xl sm:text-4xl">
            <FaInstagram className="text-4xl sm:text-5xl" />
          </h1>
        </div>
        <p className="text-center text-custom-black mt-20 text-xs sm:text-base">15 - sept - 2024 - Jimmy Ortega - web</p>
      </div>

    </div>

  );
}
