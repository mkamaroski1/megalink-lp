import Image from "next/image";

import Server4 from "@/images/serverfourthfeature.png";

export default function FouthFeature() {
  return (
    <>
      <div className="bg-fourthbg lg:bg-cover min-w-screen min-h-screen text-white">
        {/*Desktop Responsive*/}
        <div className="hidden lg:block">
          <div className="lg:flex-row flex items-center justify-around h-screen w-screen">
            <p className="text-start font-normal text-3xl ml-10 hidden lg:block">
              Conheça nossa rede revolucionária,
              <br /> criada com total atenção à segurança,
              <br /> conectando 3 cidades em Curitiba e<br /> região.. Feito
              especialmente para você!
              <br /> Que prioriza a estabilidade e qualidade.
            </p>
            <Image
              src={Server4}
              alt="Server"
              className="w-[450px] mr-10 hidden lg:block"
            />
          </div>
        </div>
        {/*Mobile Responsive*/}
        <div className=" flex items-center justify-around h-screen w-screen lg:hidden">
          <div className="block lg:hidden">
            <p className="text-center pb-14">
              Conheça nossa rede revolucionária,
              <br /> criada com total atenção à segurança,
              <br /> conectando 3 cidades em Curitiba e<br /> região.. Feito
              especialmente para você!
              <br /> Que prioriza a estabilidade e qualidade.
            </p>
            <div className="flex items-center justify-center">
              <Image
                src={Server4}
                alt="Server"
                className="w-64 items-center justify-center block lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
