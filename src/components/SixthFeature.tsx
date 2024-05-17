import Image from "next/image";

import Stamp from "@/images/stamp100porc.png";

export default function SixthFeature() {
  return (
    <>
      <div className="bg-sixthbg bg-cover text-white min-w-screen min-h-screen ">
        <div className="w-screen h-screen px-36 items-center justify-center content-center ">
          <Image src={Stamp} alt="" className="absolute w-[350px] ml-[750px]" />
          <div className="container content-center h-[50%] border-greenml border-4 rounded-full items-center justify-center mx-auto pt-10 ">
            <p className="text-center content-center font-sans font-bold text-[31px] p-20 w-[85%] ml-[50px] mb-[20px]">
              O código de defesa consumidor (Art. 49) garante 7 dias para
              solicitar reembolso em caso de insatisfação com o serviço. Nós
              confiamos tanto em nossos serviços que as contratações até ?/?/?
              será sem Fidelidade garantia incondicional!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
