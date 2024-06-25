import Image from "next/image";
import heroimage from "../../../public/hero1.png";
import PrimaryBtn from "../PrimaryBtn/page";

export default function Hero() {
  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center p-4 md:p-10 mt-20 md:mt-0 Container">
        <div className="flex flex-col  items-center lg:items-start mb-6 lg:mb-0 md:pl-20">
          <h1 className="text-[#202647] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-black w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left mb-4 xl:mb-6">
            Transforming Ideas into{" "}
            <span className="text-primary">Digital Masterpieces</span>
          </h1>

          <p className="font-sans font-semibold text-text text-sm md:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left">
            Achieve your business milestones with our proactive and strategic
            digital support
          </p>
          <div className="mt-5">
            <PrimaryBtn label={"Get Quote"} />
          </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl px-4 lg:px-0">
          <Image src={heroimage} width="auto" height="auto" alt="Hero Image" />
        </div>
      </div>
      <div className="Container grid grid-cols-3 gap-4 justify-center items-center">
        <div className="pl-16 space-y-5">
          <h5 className="text-primary font-sans text-sm font-semibold">
            HOW WE WORKS
          </h5>
          <h1 className="text-[#202647] font-sans text-4xl font-bold">
            Solve Business Challenges With Us
          </h1>
          <p className="text-[#6a6c72] font-sans text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            libero architecto labore qui autem, maiores rerum, accusantium
            voluptatem quisquam quis ea? Saepe ipsa ratione qui autem, tempore
            dolorem ab sint fugiat expedita natus reiciendis cum ea maiores
            repellat, distinctio sit voluptatibus excepturi? Quidem, alias illo
            quisquam eius recusandae quo id.
          </p>
          <PrimaryBtn label={"More Details"} />
        </div>
        <div className="col-span-2 flex items-center justify-center gap-5 my-24">
          <div className="flex flex-col gap-5 ">
            <div className="h-[300px] w-[280px] bg-[#f1eff8] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center ">
              <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3 ">
                Agile Software Development
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                All of our teams follow Scrum methodology, which has proven to
                give great results and keep all the project stakeholders in
                sync.
              </p>
            </div>
            <div className="h-[280px] w-[280px] bg-[#f0fffc] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
              <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                Best Development Practices
              </h1>
              <p className="text-[#6a6c72] text-sm font-sans">
                With us, you can rely on a stable demo environment, adept QA and
                testing, always accessible and secure code, and fast deploying.
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-5 translate-y-10">
              <div className="h-[280px] w-[280px] bg-[#fbe6d4] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                  Regular calls and meetings
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  One of our top priorities is quick reaction time and
                  accessibility. Our team is always a phone call, skype call or
                  email away
                </p>
              </div>
              <div className="h-[300px] w-[280px] bg-[#f8e1eb] shadow-sm p-4 border hover:border-primary hover:bg-[#ffff] ease-in-out duration-150 rounded-md flex flex-col items-center justify-center text-center">
                <h1 className="text-[#3b3663] font-sans text-2xl font-bold my-3">
                  High Personal Involvement
                </h1>
                <p className="text-[#6a6c72] text-sm font-sans">
                  From leadership to teams on the ground, we’re all genuinely
                  passionate about what we do and are always striving to be
                  leaders in our field, instead of just keeping up. For us, the
                  client’s success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
