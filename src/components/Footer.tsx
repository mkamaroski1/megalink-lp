import Image from "next/image";

import Home from "@/images/home.png";
import Phone from "@/images/phone.png";
import Email from "@/images/email.png";
import LogoMegaLink from "@/images/megalinklogofooter.png";
import Facebook from "@/images/facebook.png";
import X from "@/images/x.png";
import Instagram from "@/images/instagram.png";
import Linkdin from "@/images/linkdin.png";

export default function Footer() {
  return (
    <>
    {/*Desktop Responsive*/}
      <header className="lg:block hidden">
        <div className="flex bg-greenml items-center justify-between text-white w-full h-16">
          <div className="flex px-44 font-telegraf font-bold">
            <h2 className="">Fique conectado conosco nas redes sociais!</h2>
          </div>
          <div className="flex flex-row px-44">
            <a href="">
              <Image src={Facebook} alt="Facebook Icon" className="w-[45px] mx-3" />
            </a>
            <a href="">
              <Image src={X} alt="Twitter/X Icon" className="w-[45px] mx-3" />
            </a>
            <a href="">
              <Image src={Instagram} alt="Instagram" className="w-[45px] mx-3" />
            </a>
            <a href="">
              <Image src={Linkdin} alt="Linkdin" className="w-[45px] mx-3" />
            </a>
          </div>
        </div>
      </header>
      <footer className="min-w-screen bg-black text-white m-auto lg:block hidden ">
        <div className="lg:flex font-sans text-center min-w-screen min-h- hidden">
          <div className="flex flex-row w-full items-center justify-around px-48">
            <a href="/">
              <h3 className="p-10">Gerenciamento de Cookies</h3>
            </a>
            <a href="/">
              <h3 className="p-10">Segurança e Privacidade</h3>
            </a>
            <a href="/">
              <h3 className="p-10">Declaração de Acessibilidade</h3>
            </a>
          </div>
        </div>
        <div className="flex font-sans w-screen items-center justify-between">
          <div className="flex-col w-[50%] w-px-36 pb-16 px-36">
            <h3 className="border-b-2 font-telegraf font-bold w-[30%] border-darkgreen">
              Contato
            </h3>
            <a href="/">
              <Image src={Home} alt="Home" className="absolute w-10 pt-2 " />
              <h4 className=" p-5 ml-6">Endereço Fisico - CEP</h4>
            </a>
            <a href="/">
              <Image src={Phone} alt="Phone" className="absolute w-10 pt-2" />
              <h4 className=" p-5 ml-6">(41) 99999-9999</h4>
            </a>
            <a href="/">
              <Image src={Email} alt="Email" className="absolute w-10 pt-2" />
              <h4 className=" p-5 ml-6">megalinktelecom@gmail.com</h4>
            </a>
          </div>
          <div className="w-full h-full items-center justify-center pb-10">
            <Image
              src={LogoMegaLink}
              alt="Logo MegaLink"
              className="ml-[340px] pb-5 w-[200px]"
            />
            <p className="text-center text-gray-400">
              ©2024 - Todos os direitos reservados a DEVCORE®
            </p>
          </div>
        </div>
      </footer>
      <footer className="bg-header text-white w-full lg:h-20 md:h-12 z-10 lg:block hidden">
        <div className="flex items-center justify-center p-5 font-bold ">
          <h1 className="text-center lg:text-3xl md:text-2xl shadow-sm">
            ATENÇÃO!! TEMPO LIMITADO 29:59:59
          </h1>
        </div>
      </footer>
    {/*Mobile Responsive*/}
    <header className="lg:hidden flex">
        <div className="flex bg-greenml items-center justify-between text-white w-full h-16">
          <div className="font-telegraf font-bold">
            <h2 className="w-[150px] text-center ml-5 text-[10px]">Fique conectado conosco nas redes sociais!</h2>
          </div>
          <div className="flex flex-row mr-5">
            <a href="">
              <Image src={Facebook} alt="Facebook Icon" className="w-[30px] mr-3" />
            </a>
            <a href="">
              <Image src={X} alt="Twitter/X Icon" className="w-[30px] mr-3" />
            </a>
            <a href="">
              <Image src={Instagram} alt="Instagram" className="w-[30px] mr-3" />
            </a>
            <a href="">
              <Image src={Linkdin} alt="Linkdin" className="w-[30px] mr-3" />
            </a>
          </div>
        </div>
      </header>
      <footer className="min-w-screen bg-black text-white m-auto lg:hidden block ">
        <div className="lg:flex text-[10px] font-sans text-center min-w-screen min-h-full">
          <div className="flex flex-row w-full items-center justify-around ">
            <a href="/">
              <h3 className="px-5 py-10">Gerenciamento de Cookies</h3>
            </a>
            <a href="/">
              <h3 className="px-5 py-10">Segurança e Privacidade</h3>
            </a>
            <a href="/">
              <h3 className="px-5 py-10">Declaração de Acessibilidade</h3>
            </a>
          </div>
        </div>
        <div className="flex font-sans text-[10px] w-screen items-center justify-between">
          <div className="flex-col w-[50%] pb-10 px-5">
            <h3 className="border-b-2 font-telegraf font-bold w-[30%] ml-3 border-darkgreen">
              Contato
            </h3>
            <a href="/">
              <Image src={Home} alt="Home" className="absolute w-5 pt-1 ml-2 " />
              <h4 className=" p-2 ml-6">Endereço Fisico - CEP</h4>
            </a>
            <a href="/">
              <Image src={Phone} alt="Phone" className="absolute w-5 pt-1 ml-2" />
              <h4 className=" p-2 ml-6">(41) 99999-9999</h4>
            </a>
            <a href="/">
              <Image src={Email} alt="Email" className="absolute w-5 pt-1 ml-2" />
              <h4 className=" p-2 ml-6">megalinktelecom@gmail.com</h4>
            </a>
          </div>
          <div className="w-full h-full items-center justify-center pb-10">
            <Image
              src={LogoMegaLink}
              alt="Logo MegaLink"
              className="ml-[50px] pb-5 w-[100px]"
            />
            <p className="text-center pr-5 w-full text-[8px] text-gray-400">
              ©2024 - Todos os direitos reservados a DEVCORE®
            </p>
          </div>
        </div>
      </footer>
      <footer className="bg-header text-white w-full lg:h-20 md:h-12 z-10 lg:hidden">
        <div className="flex items-center justify-center p-5 font-bold ">
          <h1 className="text-center lg:text-3xl md:text-2xl shadow-sm">
            ATENÇÃO!! TEMPO LIMITADO 29:59:59
          </h1>
        </div>
      </footer>
    </>
  );
}
