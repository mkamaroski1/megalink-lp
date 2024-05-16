import Image from "next/image";

import Fade from "@/images/FADE.png";
import BorderNeon from "@/images/bordaneon.png";

export default function PrimaryFeature() {
  return (
    <div className="relative bg-greenfade bg-cover border-b-4 border-green-900 text-white lg:pt-0 pt-64 flex min-h-screen flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={Fade}
          alt="Fade"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="p-0 m-0"
        />
      </div>
      <div className="flex-row absolute font-poppins lg:pl-20 p-0 w-[55%] items-center justify-center">
        <h1 className="text-center lg:text-start text-xl lg:pt-0 lg:text-4xl lg:font-medium lg:pb-10 lg:pl-10">
          FIBRA ÓPTICA SUBTERRÂNEA
        </h1>
        <p className="lg:text-2xl text-base lg:w-[85%] w-[100%] lg:pl-10 hidden lg:block">
          Não deixe que a falta de conexão
          <br />
          atrapalhe sua vida.
          <br />
          Com nossa inovadora infra-estruturade fibra óptica subterrânea, você
          nunca ficará sem internet!
          <br />
          Permitindo o crescimento seguro e contínuo de seu negócio em 2024.
        </p>
        <p className="text-center w-screen h-[300px] justify-center items-center text-sm pt-5 block lg:hidden">
          Não deixe que a falta de conexão atrapalhe sua vida. Com nossa
          inovadora infra-estruturade fibra óptica subterrânea, você nunca
          ficará sem internet! Permitindo o crescimento seguro e contínuo de seu
          negócio em 2024.
        </p>
      </div>
      <div className="absolute lg:p-64 pt-48 w-72 lg:w-full items-center justify-between overflow-hidden">
        <Image
          src={BorderNeon}
          alt="Neon Border"
          className="relative lg:pl-52 ml-3 lg:ml-48  z-10"
        />
      </div>
    </div>
  );
}
