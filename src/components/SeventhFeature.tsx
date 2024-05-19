import { FAQ } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import ArrowR from "@/images/arrowright.png";

export default function () {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-seventhbg bg-cover container text-white min-w-full min-h-full ">
        <div className="py-10">
          <h1 className="text-center lg:text-5xl">
            DÚVIDAS
            <br /> FREQUENTES
          </h1>
        </div>
        <div className="min-w-full px-10 overflow-hidden">
          <Accordion type="single" collapsible className="min-w-screen pb-14">
            {FAQ.map((faq, index) => (
              <AccordionItem key={index} value={faq.value}>
                <AccordionTrigger>
                  <Image src={ArrowR} alt="Arrow Right" className="w-5 mr-5" />
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <button className="bg-greenml flex items-center justify-center rounded-xl w-[300px] h-[70px] bottom-[110px] mb-10">
          <p className="text-black font-extrabold uppercase ">
            Descubra agora mesmo a melhor conexão!
          </p>
        </button>
        <div className="lg:block text-center px-28 py-10 hidden">
          <p className="text-gray-400">
            <span className="font-bold text-white">Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook</span>. Depois que você sair do Facebook, a responsabilidade não é
            deles e sim do nosso site. Fazemos todos os esforços para indicar
            claramente e mostrar todas as provas do produto e usamos resultados
            reais. Nós não vendemos o seu e-mail ou qualquer informação para
            terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma
            dúvida, sinta-se à vontade para usar o link de contato e falar
            conosco em horário comercial de Segunda a Sextas das 08h00 ás 18h00.
            Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </div>
        <div className="lg:hidden text-center px-10 py-10 block">
          <p className="text-gray-400 text-[10px]">
            <span className="font-bold text-white">Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook</span>. Depois que você sair do Facebook, a responsabilidade não é
            deles e sim do nosso site. Fazemos todos os esforços para indicar
            claramente e mostrar todas as provas do produto e usamos resultados
            reais. Nós não vendemos o seu e-mail ou qualquer informação para
            terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma
            dúvida, sinta-se à vontade para usar o link de contato e falar
            conosco em horário comercial de Segunda a Sextas das 08h00 ás 18h00.
            Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </div>
      </div>
    </>
  );
}
