import Image from "next/image";

import Fibra2 from "@/images/fibra2.png";
import Monitor from "@/images/monitor.png";
import Success from "@/images/success.png";
import Server from "@/images/server.png";

export default function SecondFeature() {
  return (
    <>
      <div className="bg-secondbg lg:bg-cover bg-top font-sans text-white items-center justify-center min-w-screen h-auto">
        {/*First Title */}
        <div className="lg:flex-row text-center items-center justify-center lg:pt-28">
          <h1 className="lg:text-4xl text-xl font-sans font-normal px-7 lg:px-72 py-28 lg:py-24">
            IMAGINE DESFRUTAR DAS
            <span className="lg:font-extrabold font-bold"> VANTAGENS</span> DO
            LINK DEDICADO
          </h1>
          <div className="lg:grid lg:grid-cols-3 lg:flex-row">
            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h3 className="lg:font-medium text-xl lg:text-2xl lg:ml-[450px] mb-5 lg:mb-5">
                LIVRE DE PREJUÍZOS
              </h3>
              <p className="lg:text-end lg:font-semibold lg:text-lg lg:w-[400px] w-[320px] lg:ml-96 hidden lg:block">
                Pensando no seu sucesso nós
                <br className="" />
                desenvolvemos uma exclusiva fibra óptica
                <br /> e Rádio Digital que proporciona segurança e
                tranquilidade.
              </p>
              <p className="text-center font-medium text-base w-[320px] pb-10 block lg:hidden">
                Pensando no seu sucesso nós desenvolvemos uma exclusiva fibra
                óptica e Rádio Digital que proporciona segurança e
                tranquilidade.
              </p>
            </div>
            <div className="lg:grid-rows-3 items-center justify-center lg:w-56 w-[200px] lg:ml-0 ml-[25%] ">
              <Image src={Fibra2} alt="Fibra" className="" />
            </div>
          </div>
        </div>
        {/*Second Title*/}
        <div className="lg:flex-row text-center items-center justify-center lg:pt-28">
          <div className="lg:grid grid-cols-3 flex-row lg:mb-20">
            <div className="lg:grid-rows-3 items-center justify-center lg:w-56 w-[200px] lg:ml- ml-[25%] hidden lg:block ">
              <Image src={Monitor} alt="Monitor" className="lg:ml-24" />
            </div>
            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h3 className="lg:font-medium lg:text-2xl lg:mr-[450px] lg:mb-5 hidden lg:block">
                MONITORAMENTO 24 HORAS
              </h3>
              <h3 className="text-center w-[300px] text-lg mt-10 mb-5 block lg:hidden">
                MONITORAMENTO 24 HORAS
              </h3>
              <p className="lg:text-start lg:font-semibold lg:text-lg lg:w-[400px] w-[320px] lg:mr-96 hidden lg:block">
                Nossa equipe monitora seu link 24 horas por dia, todos os dias,
                resolvendo interrupções rapidamente e de forma discreta.
              </p>
              <p className="text-center font-medium text-base w-[320px] pb-10 block lg:hidden">
                Nossa equipe monitora seu link 24 horas por dia, todos os dias,
                resolvendo interrupções rapidamente e de forma discreta.
              </p>
              <div className="items-center justify-center w-[200px] block lg:hidden ">
                <Image src={Monitor} alt="Monitor" className="pb-10" />
              </div>
            </div>
          </div>
        </div>
        {/*Third title */}
        <div className="lg:grid lg:grid-cols-3 lg:flex-row lg:mb-20">
          <div className="flex flex-col lg:col-span-2 justify-center items-center ">
            <h3 className="lg:font-medium text-xl lg:text-2xl lg:ml-[450px] mb-5 lg:mb-5">
              EMPRESA IMPARÁVEL
            </h3>
            <p className="lg:text-end lg:font-semibold lg:text-lg lg:w-[400px] w-[320px] lg:ml-96 hidden lg:block">
              Nós cuidamos da conectividade de sua
              <br />
              empresa para que assim gere foco na
              <br />
              lucratividade e crescimento.
            </p>
            <p className="text-center font-medium text-base w-[320px] pb-10 block lg:hidden">
              Nós cuidamos da conectividade de sua empresa para que assim gere
              foco na lucratividade e crescimento.
            </p>
          </div>
          <div className="lg:grid-rows-3 items-center justify-center lg:w-56 w-[200px] lg:ml-0 ml-[25%] ">
            <Image src={Success} alt="Success" className="" />
          </div>
        </div>

        {/*Fourth title */}
        <div className="lg:flex-row text-center items-center justify-center">
          <div className="lg:grid grid-cols-3 flex-row lg:my-20">
            <div className="lg:grid-rows-3 items-center justify-center lg:w-56 w-[200px] lg:ml- ml-[25%] hidden lg:block ">
              <Image src={Server} alt="Server" className="lg:ml-24" />
            </div>
            <div className="flex flex-col lg:col-span-2 justify-center items-center">
              <h3 className="text-center lg:font-medium text-lg lg:text-2xl pt-10 pb-1  lg:mr-[550px] lg:mb-5">
                CONEXÃO DEDICADA
              </h3>
              <p className="lg:text-start lg:font-semibold lg:text-lg lg:w-[400px] w-[320px] lg:mr-96 hidden lg:block">
                Nossa equipe monitora seu link 24 horas por dia, todos os dias,
                resolvendo interrupções rapidamente e de forma discreta.
              </p>
              <p className="text-center font-medium text-base w-[320px] pb-10 block lg:hidden">
                Nossa equipe monitora seu link 24 horas por dia, todos os dias,
                resolvendo interrupções rapidamente e de forma discreta.
              </p>
              <div className="items-center justify-center w-[200px] block lg:hidden ">
                <Image src={Server} alt="Server" className="pb-14" />
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-header text-white lg:h-20 md:h-12 z-10">
          <div className="flex items-center justify-center p-5 font-bold ">
            <h1 className="text-center lg:text-3xl md:text-2xl shadow-sm">
              ATENÇÃO!! TEMPO LIMITADO 29:59:59
            </h1>
          </div>
        </footer>
      </div>
    </>
  );
}
