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
      <div className="flex flex-col items-center justify-center bg-black bg-cover container text-white min-w-full min-h-full ">
        <div className="py-10">
          <h1 className="text-center lg:text-5xl">
            DÚVIDAS
            <br /> FREQUENTES
          </h1>
        </div>
        <div className="min-w-full px-10 overflow-hidden">
          <Accordion
            type="single"
            collapsible
            className="min-w-screen pb-14"
          >
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
        <footer className="bg-header text-white w-full lg:h-20 md:h-12 z-10">
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
