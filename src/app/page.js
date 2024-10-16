
import { Perfil } from "@/components/section_perfil";
import { Informacion } from "@/components/section_informacion";

export default function Home() {

  return (

    <div className="container mx-auto flex flex-col min-h-screen">
      
      <div className="flex  items-center gap-0 flex-wrap h-[720px]">

        <div className="lg:mt-0 lg:h-[740px] flex-shrink-0 w-full md:w-auto">
          <Perfil />
        </div>

        <div className=" sm:-mt-16 h-[680px] flex-shrink-0 w-full md:w-auto">
          <Informacion />
        </div>

      </div>

    </div>

  );
}
