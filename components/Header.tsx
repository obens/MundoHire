import Image from "next/image";
import HeaderIllustration from "../assets/header-illustration.svg";

export default function Hero() {
  return (
    <div className="bg-sky-900 text-white min-h-[400px] flex items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="ml-20 p-4 justify-center flex flex-col">
          <h2 className="text-4xl font-bold">
            Vagas de empregos para estrangeiros
          </h2>
          <p className="text-2xl mt-4">
            Encontre oportunidades de trabalho em diversos setores.
          </p>
        </div>
        <div className="p-4 flex justify-center items-center">
          <Image
            src={HeaderIllustration}
            alt="Header Illustration"
            width={0}
            height={0}
            className="w-full h-[80%]"
          />
        </div>
      </div>
    </div>
  );
}
