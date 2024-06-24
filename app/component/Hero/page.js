import Image from "next/image";
import heroimage from "../../../public/hero1.png";

export default function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 md:p-10 mt-20 md:mt-0">
      <div className="flex flex-col  items-center lg:items-start mb-6 lg:mb-0 md:pl-20">
        <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left mb-4 xl:mb-6">
          Transforming Ideas into{" "}
          <span className="text-primary">Digital Masterpieces</span>
        </h1>

        <p className="text-text text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left">
          Achieve your business milestones with our proactive and strategic
          digital support
        </p>
      </div>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 lg:px-0">
        <Image src={heroimage} width="auto" height="auto" alt="Hero Image" />
      </div>
    </div>
  );
}
