import Image from "next/image";

import UserPhoto from "@/images/userclient.png";
import LogoGoogle from "@/images/logogoogle.png";
import Points from "@/images/points.png";
import Iphone from "@/images/iphone.png";
import ArrowDown from "@/images/arrowdown.png";
import Fiber from "@/images/fibrafifth.png";
import ArrowUp from "@/images/arrowup.png";
import BorderNeonF from "@/images/borderneonfifth.png";

export default function () {
  return (
    <>
      <div className="lg:block bg-black bg-cover text-white min-w-screen min-h-screen z-30 hidden">
        {/*Desktop Responsive*/}
        <div className="lg:flex lg:flex-col text-center items-center justify-center hidden">
          <h1 className="font-poppins text-6xl font-semibold pt-20 pb-5">
            Depoimento de Clientes
          </h1>
          <h2 className="font-telegraf text-2xl font-semibold">
            FAÇA COMO ELES E NÃO FIQUE DESCONECTADO!
          </h2>
        </div>
        <div className="lg:flex flex-col items-center justify-around pt-16 hidden">
          <div className="flex justify-around">
            <div className="w-52 h-72 items-center justify-center mx-5 rounded-xl bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-52 h-72 items-center justify-center mx-5 rounded-xl bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-52 h-72 items-center justify-center mx-5 rounded-xl bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src={Points}
              alt="Points BG"
              className="relative w-full h-full bottom-16"
            />
            <div className="flex items-center justify-center mb-10 z-20">
              <button className="relative bg-greenml items-center justify-center rounded-xl flex w-[300px] h-[70px] bottom-[110px]">
                <p className="text-black font-extrabold uppercase ">
                  Descubra agora mesmo a melhor conexão!
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-greenfadefifth bg-cover text-white lg:flex lg:flex-col text-center items-center justify-center hidden">
        <div className="font-poppins text-6xl font-bold">
          <h1 className="pt-10 pb-20">
            Oferta
            <br />
            Imperdível!
          </h1>
        </div>
        <div className="flex flex-col text-white w-[400px] items-center justify-center pb-20">
          <div className=" items-center justify-center">
            <h2 className="absolute font-bold text-greenml ml-[155px] mt-16 z-20">
              POR TEMPO
              <br /> LIMITADO
            </h2>
            <div className="items-center justify-center gap-1">
              <h2 className="absolute font-bold text-center text-black ml-[140px] mt-[150px] text-[20px] z-20 pr-10">
                DE
              </h2>
              <h2 className="absolute font-bold line-through text-header z-20 ml-[175px] mt-[150px] text-[20px]">
                R$397,00
              </h2>
              <Image
                src={ArrowDown}
                alt="Arrow Down"
                className="absolute w-[150px] ml-[126px] mt-[160px] z-20"
              />
            </div>
            <div className="items-center justify-center gap-1">
              <h2 className="absolute font-bold text-black text-[20px] ml-[150px] mt-[260px] z-20">
                A partir de
              </h2>
              <h2 className="absolute font-bold text-black text-[15px] ml-[130px] mt-[315px] z-20">
                R$
              </h2>
              <h2 className="absolute font-bold text-greenml text-[32px] ml-[150px] mt-[300px] z-20">
                247,00
              </h2>
              <h2 className="absolute font-bold text-black text-[20px] ml-[163px] mt-[350px] z-20">
                Mensal!
              </h2>
            </div>
            <div className="">
              <Image
                src={Fiber}
                alt="Fiber"
                className="absolute w-[500px] ml-[172px] mt-[80px] z-20"
              />
            </div>
            <Image src={Iphone} alt="iPhone" className="relative z-10" />
            <div className="mt-10 font-bold">
              <h1 className="h-[100%] font-bold text-xl">
                Já imaginou ter a<span className="font-extrabold"> MELHOR</span>{" "}
                internet por
                <br /> menos de R$8 reais por dia?
              </h1>
            </div>
            <div className="flex items-center justify-center mt-14 z-20">
              <button className="relative bg-greenml items-center justify-center rounded-xl flex w-[300px] h-[70px]">
                <p className="text-black font-extrabold uppercase ">
                  QUERO GARANTIR ESSE SERVIÇO AGORA NA PROMOÇÃO
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className=" text-white lg:flex lg:flex-col text-center items-center justify-center hidden">
          <div className="lg:flex flex-row items-center justify-center md:hidden">
            <h1 className="font-bold font-sans text-greenml text-[300px] mr-[380px] ">
              3
            </h1>
            <h1 className="absolute font-bold text-start leading-none font-poppins text-greenml text-[40px] ml-[10px] mt-5">
              SUPER
              <br /> BÔNUS
              <br /> EXCLUSIVOS
            </h1>
            <Image
              src={ArrowUp}
              alt="Arrow Up"
              className="absolute w-[450px] ml-[550px] mb-[300px] hidden lg:block"
            />
          </div>
        </div>
        <div className="text-white py-5">
          <div className="flex flex-col text-center items-center justify-center py-5 ">
            <h1 className="font-bold font-poppins text-[90px] py-5">1</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[200px] mb-24"
            />
            <h2 className="font-bold font-poppins text-[40px] py-5">
              Redundância no rádio sem custo mensal
            </h2>
          </div>
          <div className="flex flex-col text-center items-center justify-center py-5">
            <h1 className="font-bold font-poppins text-[90px] py-5">2</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[200px] mb-24"
            />
            <h2 className="font-bold text-greenml font-poppins text-[40px] py-5">
              Instalação GRATUITA!
            </h2>
          </div>
          <div className="flex flex-col text-center items-center justify-center py-5">
            <h1 className="font-bold font-poppins text-[90px] py-5">3</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[200px] mb-[220px]"
            />
            <h2 className="font-bold font-poppins text-[40px] pt-5 pb-20">
              Roteador que permite mudanças
              <br /> automática entre os links
            </h2>
          </div>
        </div>
        <footer className="lg:block lg:w-full bg-header text-white lg:h-20 z-30 hidden">
          <div className="items-center justify-center p-5 font-bold ">
            <h1 className="text-center lg:text-3xl shadow-sm">
              ATENÇÃO!! TEMPO LIMITADO 29:59:59
            </h1>
          </div>
        </footer>
      </div>

      {/*Mobile Responsive*/}
      <div className="bg-black bg-cover text-white min-w-screen min-h-screen z-30 lg:hidden">
        <div className="flex flex-col text-center items-center justify-center lg:hidden">
          <h1 className="font-poppins text-2xl font-semibold pt-20 pb-5">
            Depoimento de Clientes
          </h1>
          <h2 className="font-telegraf text-lg font-semibold">
            FAÇA COMO ELES E NÃO FIQUE DESCONECTADO!
          </h2>
        </div>
        <div className="flex flex-col items-center justify-around pt-16 lg:hidden">
          <div className="flex flex-col justify-around">
            <div className="w-[208px] h-[144] items-center justify-center mx-5 rounded-xl mb-10 bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[208px] h-[144] items-center justify-center mx-5 rounded-xl mb-10 bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[208px] h-[144] items-center justify-center mx-5 rounded-xl mb-10 bg-white z-20">
              <div className="grid grid-rows-3 w-full h-full">
                <div className="rows-span-1 rounded-t-xl bg-greenml z-10">
                  <h3 className="text-black text-lg font-poppins ml-10 mt-9 font-bold">
                    COMENTÁRIO
                  </h3>
                </div>
                <div className="rows-span-2  mr-2">
                  <div className="flex-col text-center items-center justify-center">
                    <Image
                      src={UserPhoto}
                      alt="User Photo"
                      className="w-14 ml-[75px] mt-3"
                    />
                    <p className="text-gray-600 text-[9px] mt-3 px-2">
                      COMENTÁRIO DO CLIENTE, COMENTÁRIO DO CLIENTECOMENTÁRIO DO
                      CLIENTE, COMENTÁRIO DO CLIENTE
                    </p>
                  </div>
                </div>
                <div className="flex rows-span-3 items-center justify-center ">
                  <div className="w-[80px]">
                    <Image src={LogoGoogle} alt="Google" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10">
            <Image
              src={Points}
              alt="Points BG"
              className="relative w-full h-full bottom-16"
            />
            <div className="flex items-center justify-center mb-10 z-20">
              <button className="relative bg-greenml items-center justify-center rounded-xl flex w-[250px] h-[50px] bottom-[15px] p-6">
                <p className="text-black text-[10px] font-extrabold uppercase ">
                  Descubra agora mesmo a melhor conexão!
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-greenfadefifth bg-cover text-white flex flex-col text-center items-center justify-center lg:hidden">
        <div className="font-poppins text-4xl font-bold">
          <h1 className="pt-10 pb-20">
            Oferta
            <br />
            Imperdível!
          </h1>
        </div>
        <div className="flex flex-col text-white w-full items-center justify-center pb-20">
          <div className=" items-center justify-center">
            <h2 className="absolute font-bold text-greenml ml-[140px] mt-16 z-20">
              POR TEMPO
              <br /> LIMITADO
            </h2>
            <div className="items-center justify-center gap-1">
              <h2 className="absolute font-bold text-center text-black ml-[125px] mt-[150px] text-[20px] z-20 pr-10">
                DE
              </h2>
              <h2 className="absolute font-bold line-through text-header z-20 ml-[160px] mt-[150px] text-[20px]">
                R$397,00
              </h2>
            </div>
            <div className="items-center justify-center gap-1">
              <h2 className="absolute font-bold text-black text-[20px] ml-[138px] mt-[190px] z-20">
                A partir de
              </h2>
              <h2 className="absolute font-bold text-black text-[15px] ml-[120px] mt-[250px] z-20">
                R$
              </h2>
              <h2 className="absolute font-bold text-greenml text-[32px] ml-[140px] mt-[235px] z-20">
                247,00
              </h2>
              <h2 className="absolute font-bold text-black text-[20px] ml-[150px] mt-[300px] z-20">
                Mensal!
              </h2>
            </div>
            <Image src={Iphone} alt="iPhone" className="relative z-10 overflow-hidden" />
            <div className="mt-10 font-bold ">
              <h1 className="h-[100%] font-bold text-base">
                Já imaginou ter a<span className="font-extrabold"> MELHOR</span>{" "}
                internet por
                <br /> menos de R$8 reais por dia?
              </h1>
            </div>
            <div className="flex items-center justify-center mt-14 z-20">
              <button className="relative bg-greenml items-center justify-center rounded-xl flex w-[250px] h-[50px]">
                <p className="text-black text-[10px] font-extrabold uppercase ">
                  QUERO GARANTIR ESSE SERVIÇO AGORA NA PROMOÇÃO
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className=" text-white flex flex-col text-center items-center justify-center lg:hidden">
          <div className="flex flex-row items-center justify-center">
            <h1 className="font-bold font-sans text-greenml text-[200px] mr-[180px] ">
              3
            </h1>
            <h1 className="absolute font-bold text-start leading-none font-poppins text-greenml text-[30px] ml-[100px] mt-5">
              SUPER
              <br /> BÔNUS
              <br /> EXCLUSIVOS
            </h1>
            <Image
              src={ArrowUp}
              alt="Arrow Up"
              className="absolute w-[450px] ml-[550px] mb-[300px] hidden lg:block overflow-hidden"
            />
          </div>
        </div>
        <div className="text-white py-5">
          <div className="flex flex-col text-center items-center justify-center py-5 ">
            <h1 className="font-bold font-poppins text-[70px] py-5">1</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[150px] mb-[190px]"
            />
            <h2 className="font-bold font-poppins text-[30px] p-7">
              Redundância no rádio sem custo mensal
            </h2>
          </div>
          <div className="flex flex-col text-center items-center justify-center py-5">
            <h1 className="font-bold font-poppins text-[70px] py-5">2</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[150px] mb-[145px]"
            />
            <h2 className="font-bold text-greenml font-poppins text-[30px] p-7">
              Instalação GRATUITA!
            </h2>
          </div>
          <div className="flex flex-col text-center items-center justify-center py-5">
            <h1 className="font-bold font-poppins text-[70px] py-5">3</h1>
            <Image
              src={BorderNeonF}
              alt=""
              className="absolute w-[150px] mb-[260px]"
            />
            <h2 className="font-bold font-poppins text-[30px] px-7 pb-20">
              Roteador que permite mudanças
              <br /> automática entre os links
            </h2>
          </div>
        </div>
        <div className="z-30">
          <footer className="block bg-header text-white w-screen z-10 lg:hidden">
            <div className="items-center justify-center p-5 font-bold ">
              <h1 className="text-center text-base shadow-sm">
                ATENÇÃO!! TEMPO LIMITADO 29:59:59
              </h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
