"use client";

import Notebook from "@/components/Notebook";
import Image from "next/image";
import PrimaryFeature from "./PrimaryFeature";

export default function Home() {
  return (
    <>
      <main className="bg-black text-white min-h-screen flex-col lg:flex-row items-center justify-between overflow-hidden">
        <div className="text-center lg:text-left absolute lg:absolute items-center justify-center text-2xl lg:text-6xl font-telegraf h-auto lg:pt-24 top-28 lg:pl-20">
          <h1 className="lg:w-[490px] lg:p-5">
            Conheça agora a melhor e mais{" "}
            <span className="font-bold text-darkgreen">confiável</span> conexão
          </h1>
          <p className="text-base lg:text-lg lg:p-5">
            Vai arriscar ficar desconectado?
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center lg:pl-96 lg:relative">
          <div
            className="absolute w-full h-full rounded-full opacity-50 lg:left-72 "
            style={{
              transform: "scale(0.8)",
              backgroundImage:
                "radial-gradient(ellipse at center, #01CF02 0%, transparent 70%, transparent 100%)",
              backgroundSize: "cover",
            }}
          ></div>
          <Notebook />
        </div>
        <section className="w-full min-h-screen">
          <PrimaryFeature />
        </section>
      </main>
    </>
  );
}
