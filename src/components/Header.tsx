import Image from "next/image";
import Logo from "@/images/logo.png"



export default function Header() {
    return (
        <>
            <header className= "bg-header text-white lg:h-20 md:h-12 z-10">
                <div className="flex items-center justify-center p-5 font-bold ">
                    <h1 className="text-center lg:text-3xl md:text-2xl shadow-sm">
                        ATENÇÃO!! TEMPO LIMITADO 29:59:59
                    </h1>
                </div>
            </header>
        </>
    )
}