import { FaHandBackFist } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";

export default function AboutUs() {
  return (
    <div className="pt-20 bg-white">
      <div>
        <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
          About Us
        </h2>
      </div>
      <div className=" lg:grid grid-cols-2 justify-center items-center px-[10%] lg:pt-20 md:pt-5 gap-10 lg:pr-[15%]  Container">
        <div className="flex gap-1 lg:block  lg:text-end  lg:border-r-2 lg:border-primary pr-2 pt-10 lg:pt-0 ">
          <h1 className="lg:text-6xl text-primary font-sans font-bold">WHO</h1>
          <h1 className="lg:text-6xl text-[#202647] font-sans font-bold">WE</h1>
          <h1 className="lg:text-6xl text-[#202647] font-sans font-bold">
            ARE
          </h1>
        </div>
        <div className="mb-10 pt-3 lg:pt-0 lg:mb-0">
          <p
            className="text-[#6a6c72] font-medium text-sm   lg:w-11/12 
         text-pretty"
          >
            DevCluster stands out as a premier software development and testing
            service provider, supported by a talented team of software
            engineers. We excel in creating impactful web, desktop, and mobile
            applications tailored to our clients diverse needs.
            <br />
            Since our inception, we have forged valuable partnerships with
            numerous companies, bringing tangible operational improvements to
            startups, emerging enterprises, and established organizations across
            Bangladesh and India.
          </p>
        </div>
      </div>

      <div className=" pt-10 lg:pt-28 pb-20 Container">
        <div className="text-center">
          <h4 className="text-[#ff5400] font-semibold text-xl">
            OUR CORE VALUES
          </h4>
          <h2 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
            Delivering Exceptional Service <br />
            Through Innovative Tools
          </h2>
        </div>
        <div className="lg:flex  justify-center gap-5  lg:px-[10%] text-center pt-14 lg:pb-20 pb-10 ">
          <div className="shadow-md bg-[#f0fffc]  rounded-md  py-5 lg:mb-0 mb-5 lg:h-[280px] flex flex-col items-center justify-center group">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white  group-hover:border-primary ">
              <span>
                <FaHandBackFist />
              </span>
            </div>
            <h4 className="pt-4  font-semibold text-xl text-[#3b3663]">
              Commitment
            </h4>
            <p className="px-[10%] py-3 text-[#6a6c72] text-sm text-pretty">
              We uphold the highest standards in every aspect of service
              delivery, ensuring exceptional quality and satisfaction.
            </p>
          </div>
          <div className=" shadow-md bg-[#f1eff8] rounded-md  py-5 lg:mb-0 mb-5 lg:h-[280px] flex flex-col justify-center items-center group">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white  group-hover:border-primary ">
              <span>
                <RiCustomerServiceFill />
              </span>
            </div>
            <h4 className="pt-4  font-semibold text-xl text-[#3b3663]">
              Customer-Centric
            </h4>
            <p className="px-4 lg:px-[10%] py-3 text-[#6a6c72] text-sm  text-pretty">
              Our focus is understanding client needs deeply and surpassing
              their expectations through personalized service.
            </p>
          </div>
          <div className=" shadow-md bg-[#f8e1eb] rounded-md bg-slate-50 pt-5  lg:mb-5 lg:h-[280px] group flex flex-col items-center justify-center">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white flex justify-center items-center group-hover:border-primary ">
              <span>
                <GiFruitTree />
              </span>
            </div>
            <h4 className="pt-4  font-semibold text-xl text-[#3b3663]">
              Improvement
            </h4>
            <p className="px-4 lg:px-[10%] py-3 text-[#6a6c72] text-sm  text-pretty">
              We embrace continuous learning and adaptation, striving to stay
              ahead by evolving with industry trends and innovations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
