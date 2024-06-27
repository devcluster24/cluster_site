import Image from "next/image";
import heroimage from "../../../public/hero1.png";
import PrimaryBtn from "../PrimaryBtn/page";

export default function Hero() {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 md:p-10 mt-20 lg:mt-10 md:mt-0 Container">
        <div className="flex flex-col  items-center lg:items-start mt-20 mb-6 lg:mb-0 md:pl-20">
          <h1 className="text-[#202647] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left mb-4 xl:mb-6">
            We create innovative tools to simplify the{" "}
            <span className="text-primary">
              empowerment of businesses globally
            </span>
          </h1>

          <p className="font-sans font-semibold text-text text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left">
            We specialize in end-to-end maintenance services aimed at helping
            clients resolve persistent issues and enhance the performance of
            their business-critical legacy systems
          </p>
          <div className="mt-5">
            <PrimaryBtn label={"Get Quote"} />
          </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 lg:px-0">
          <Image src={heroimage} width="auto" height="auto" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
