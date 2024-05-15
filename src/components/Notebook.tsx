import Image from "next/image";
import notebook from "@/images/notebook.png";
import { ReactNode } from "react";

interface NotebookProps {
  children?: ReactNode;
}

export default function Notebook({ children }: NotebookProps) {
  return (
    <div className="relative lg:w-[1080px] w-[570px] lg:h-[608px] h-[350px] top-20 lg:top-0 lg:left-24 lg:p-10 py-20 z-10 mx-auto overflow-hidden">
      <Image src={notebook} alt="Notebook" layout="fill" objectFit="contain" />
      <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] flex justify-center items-center">
        <iframe
          className="lg:w-[475px] w-[245px] mb-5 lg:h-[300px] h-[157px] self-center mx-10"
          width="565"
          height="350"
          src="https://www.youtube.com/embed/gZZufWvsD7I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        {children}
      </div>
    </div>
  );
}
