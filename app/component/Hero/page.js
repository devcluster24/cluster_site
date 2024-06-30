import Image from "next/image";
import Link from "next/link";
import heroimage from "../../../public/homepage/WithoutBGHomePageHeader.png";

export default function Hero() {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 md:p-10 mt-20 lg:mt-10 md:mt-0 Container">
        <div className="flex flex-col  items-center lg:items-start mt-20 mb-6 lg:mb-0 md:pl-20">
          <h1 className="text-[#202647] text-xl  lg:text-4xl font-bold w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left mb-4 xl:mb-6">
            We create innovative tools to simplify the{" "}
            <span className="text-primary">
              empowerment of businesses globally
            </span>
          </h1>

          <p className=" font-medium text-[#6a6c72] text-justify lg:text-pretty text-sm ">
            We specialize in end-to-end maintenance services aimed at helping
            clients resolve persistent issues and enhance the performance of
            their business-critical legacy systems
          </p>
          <div className="mt-5">
            <span className="px-5 py-2 text-xs lg:text-[15px] font-medium bg-primary text-[#fff]  hover:bg-transparent border border-primary rounded-2xl hover:text-primary transition duration-500 ease-in-out">
              <Link href="/Quote">Get Quote</Link>
            </span>
          </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 lg:px-0">
          <Image src={heroimage} width="auto" height="auto" alt="Hero Image" />
        </div>
      </div>
    </div>
  );
}
