import Image from 'next/image';
import notebook from '@/images/notebook.png';
import { ReactNode } from 'react'; 

interface NotebookProps {
  children?: ReactNode; 
}

export default function Notebook({ children }: NotebookProps) { 
  return (
    <div className="relative w-[1280px] h-[720px] z-10 mx-auto">
      <Image src={notebook} alt="Notebook" layout="fill" objectFit="contain" />
      <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] flex justify-center items-center">
        <iframe
          className="max-w-[800px] mt-[-30px] max-h-[450px] self-center mx-auto"
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