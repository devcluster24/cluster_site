import { FaCircleCheck } from "react-icons/fa6";
import PrimaryBtn from "../PrimaryBtn/page";
const ChooseUs = () => {
  return (
    <div>
      <div className="lg:flex px-[10%] lg:pt-24 md:pt-5">
        <div className="lg:w-1/2">
          <h4 className="text-[#ff5400] font-semibold text-xl font-sans">
            WHY CHOOSE US
          </h4>
          <h2 className="font-bold lg:text-4xl md:text-2xl text-xl lg:w-10/12 text-[#202647] pt-3">
            Outstanding Digital Experience
          </h2>
          <p className="text-text font-sans text-sm pt-10 w-11/12 text-justify">
            We believe that our transparency with our clients is what sets us
            apart from our competition.If you are looking for a trusted IT
            partner and your company shares similar standards to our company we
            would really like to hear from you
          </p>
          <div className="mt-5 space-y-2">
            <h1 className="text-xl text-black font-sans font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              CUSTOMER FOCUSED
            </h1>
            <p className="text-text font-sans text-sm  w-11/12 text-justify">
              We simply listen to our clients. Our dedicated account management
              team is in constant contact with our customers to ensure that we
              deliver in every aspect of our dealings.
            </p>
          </div>
          <div className="mt-5 space-y-2">
            <h1 className="text-xl text-black font-sans font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              PROCESS ORIENTED
            </h1>
            <p className="text-text font-sans text-sm  w-11/12 text-justify">
              We are a process oriented organization. This ensures prompt and
              high quality delivery from simple helpdesk tasks to complex multi
              vendor projects with strict timeframes.
            </p>
          </div>
          <div className="mt-5 space-y-2">
            <h1 className="text-xl text-black font-sans font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              CUTTING EDGE TOOLS
            </h1>
            <p className="text-text font-sans text-sm  w-11/12 text-justify">
              We believe in investing in our “tools of the trade”. Our company
              has made some significant investments in the most advanced tools
              that enable us to deliver in the most demanding environments.
            </p>
          </div>
          <div className="my-6">
            <PrimaryBtn label={"Discover More"} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-primary">Image</h2>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
