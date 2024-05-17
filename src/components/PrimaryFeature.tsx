import Image from "next/image";

import Fade from "@/images/FADE.png";
import BorderNeon from "@/images/bordaneon.png";

export default function PrimaryFeature() {
  return (
    <div className="bg-black bg-cover text-white lg:pt-0 pt-56 flex lg:min-h-screen min-h-screen flex-col lg:flex-row items-center justify-between content-center overflow-hidden">
      <div className="absolute inset-0 z-0 content-center">
      </div>
      <div className="flex-row absolute font-poppins lg:pl-20 items-center justify-center content-center">
        <h1 className="text-center lg:text-start text-xl lg:pt-0 lg:text-4xl lg:font-medium pb-10 lg:pb-10 lg:pl-5">
          FIBRA ÓPTICA SUBTERRÂNEA
        </h1>
        <p className="lg:text-2xl text-base lg:w-[55%] w-[100%] lg:pl-5 hidden lg:flex">
          Não deixe que a falta de conexão
          <br />
          atrapalhe sua vida.
          <br />
          Com nossa inovadora infra-estruturade fibra óptica subterrânea, você
          nunca ficará sem internet!
          <br />
          Permitindo o crescimento seguro e contínuo de seu negócio em 2024.
        </p>
        <p className="text-center h-[170px] w-[80%] justify-center items-center text-sm pt-5 ml-10 pb-28 flex lg:hidden">
          Não deixe que a falta de conexão atrapalhe sua vida. Com nossa
          inovadora infra-estruturade fibra óptica subterrânea, você nunca
          ficará sem internet! Permitindo o crescimento seguro e contínuo de seu
          negócio em 2024.
        </p>
      </div>
      <div className="items-center justify-center pt-0 w-[290px] z-10 ">
        <Image
          src={BorderNeon}
          alt="Neon Border"
          className="lg:ml-[1000px] lg:w-[400px] lg:h-full right-2 left-[10px] my-[150px] z-20"
        />
      </div>
    </div>
  );
}
