import Image from "next/image";

import Fade from "@/images/FADE.png";
import BorderNeon from "@/images/bordaneon.png"

export default function PrimaryFeature() {
  return (
    <div className="relative bg-greenfade text-white flex min-h-screen flex-col lg:flex-row items-center justify-between overflow-hidden">
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
      <div className="flex-row absolute font-poppins lg:pl-20 w-[55%] items-center justify-center">
        <h1 className="text-4xl font-medium lg:pb-10 lg:pl-10">
          FIBRA ÓPTICA SUBTERRÂNEA
        </h1>
        <p className="text-2xl w-[85%] lg:pl-10">
          Não deixe que a falta de conexão
          <br />
          atrapalhe sua vida.
          <br />
          Com nossa inovadora infra-estruturade fibra óptica subterrânea, você
          nunca ficará sem internet!
          <br />
          Permitindo o crescimento seguro e contínuo de seu negócio em 2024.
        </p>
      </div>
      <div className="absolute lg:p-64 items-center justify-center overflow-hidden">
        <Image
          src={BorderNeon}
          alt="Neon Border"
          className="relative lg:pl-52 lg:ml-48 z-10"
        />
      </div>
    </div>
  );
}
