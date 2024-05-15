"use client";

import Notebook from "@/components/Notebook";
import Image from "next/image";


export default function Home() {
  return (
    <>
      
      <main className="bg-black text-white flex min-h-screen flex-col lg:flex-row items-center justify-between p-auto">
        <div className="text-center lg:text-left absolute lg:absolute items-center justify-center text-2xl lg:text-6xl font-telegraf h-auto pt-20 lg:pl-20">
          <h1 className="lg:w-[490px] lg:p-5">Conheça agora a melhor e mais <span className="font-bold text-darkgreen">confiável</span> conexão</h1>
          <p className="text-base lg:text-lg lg:p-5">Vai arriscar ficar desconectado?</p>
        </div>
        <div className="flex flex-1 items-center justify-center lg:pl-80">
          <div className="absolute w-full h-full rounded-full opacity-50"
            style={{
              transform: "scale(0.8)", 
              backgroundImage:
                "radial-gradient(ellipse at center, #01CF02 0%, transparent 70%, transparent 100%)",
              backgroundSize: "cover",
            }}

          ></div>
          <Notebook />
        </div>
      </main>
    </>
  );
}
