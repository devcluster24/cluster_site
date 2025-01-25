import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";
import image from "../../../../public/homepage/Choose Us.png";
const ChooseUs = () => {
  return (
    <div className="bg-[#f6f5fb] w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:pt-24 md:pt-5 Container ">
        <div className=" mb-10 ">
          <h4 className="text-[#ff5400] font-semibold pt-10 lg:pt-0 lg:text-xl ">
            WHY CHOOSE US
          </h4>
          <h2 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pt-2">
            Elevating Digital Engagement
          </h2>
          <p className="text-text  text-sm pt-5 lg:pt-10 lg:w-11/12 text-left">
            At DevCluster, transparency isn&apos;t something we just talk
            about—it&apos;s at the heart of everything we do. We believe in
            keeping the lines of communication wide open and being honest with
            our clients. We know that trust isn&apos;t given, it&apos;s earned
            through transparency. If your company values integrity and
            reliability in an IT partner, we&apos;d be thrilled to connect.
            Let&apos;s have a chat about how we can help your business grow with
            our trusted solutions. Get in touch with us today!
          </p>
          <div className="mt-5 space-y-2">
            <h1 className=" lg:text-xl text-black  font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              Client Satisfaction
            </h1>
            <p className="text-text  text-sm  lg:w-11/12 text-left">
              Listening is key at our company. Our dedicated account managers
              stay connected to ensure every client&apos;s needs are met. Trust
              us to deliver excellence in every interaction. Let&apos;s discuss
              how we can support your business goals today.
            </p>
          </div>
          <div className="mt-5 space-y-2">
            <h1 className="lg:text-xl text-black  font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              Quality Deliverables
            </h1>
            <p className="text-text  text-sm  lg:w-11/12 text-left">
              We prioritize processes to ensure prompt and top-quality results,
              from basic helpdesk tasks to intricate multi-vendor projects with
              tight deadlines. Count on us for efficiency and excellence in
              every project. Let&apos;s discuss how we can assist your
              initiatives today.
            </p>
          </div>
          <div className="mt-5 space-y-2">
            <h1 className="lg:text-xl text-black  font-semibold flex gap-5 items-center">
              <span className="text-primary">
                <FaCircleCheck />
              </span>{" "}
              Demanding Environments
            </h1>
            <p className="text-text  text-sm  lg:w-11/12 text-left">
              Investing in cutting-edge tools is our commitment. These
              advancements empower us to excel in challenging environments,
              ensuring top-notch performance. Let&apos;s explore how we can
              elevate your projects with our technological edge.
            </p>
          </div>
        </div>
        <div className=" mb-10 lg:mb-0 flex justify-center items-center lg:ml-10">
          <Image className="lg:w-fit lg:h-fit" src={image} alt="Hero Image" />
        </div>
      </div>

      <div className="bg-[#f0fffc] w-full lg:flex gap-10 items-center justify-center py-10 lg:py-20">
        <h1 className="text-[#202647] font-semibold  text-center lg:text-[30px]">
          Have an Exciting Project in Mind? Let&apos;s Discuss!
        </h1>
        <div className="text-center  py-3">
          <a
            className="text-primary  font-medium text-sm lg:text-[20px]  border border-primary text-center px-6 py-1 rounded-md"
            href="/Quote"
          >
            START PROJECT
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
