import DProcess from "@/app/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/component/PageTitleArea/page";
import Image from "next/image";
import {
  BsMegaphoneFill,
  BsOpencollective,
  BsRocketFill,
  BsShieldFillCheck,
  BsWrenchAdjustableCircleFill,
} from "react-icons/bs";
import { TbSettingsCode } from "react-icons/tb";
import QACard from "./QACard";
import image1 from "/public/Qa&Testing/one.png";
import engagement from "/public/Qa&Testing/services-engagement.png";
import fmodel from "/public/Qa&Testing/services-fte.png";
import pmodel from "/public/Qa&Testing/services-project.png";

const qaWorkflow = [
  {
    id: 1,
    title: "Requirements Analysis",
    description:
      "Understand and document product requirements to establish testing criteria.",
  },
  {
    id: 2,
    title: "Test Planning & Design",
    description:
      "Create a detailed test plan and design test cases to cover various scenarios.",
  },
  {
    id: 3,
    title: "Environment Setup & Execution",
    description:
      "Set up a test environment and execute test cases to identify defects and issues.",
  },
  {
    id: 4,
    title: "Defect Reporting & Management",
    description:
      "Report identified defects, prioritize, and manage resolution with a tracking system.",
  },
  {
    id: 5,
    title: "Re-testing & Regression Testing",
    description:
      "Verify defect fixes through re-testing and ensure new changes don't impact existing functionality.",
  },
  {
    id: 6,
    title: "Final Validation & Closure",
    description:
      "Conduct acceptance testing, validate readiness for deployment, and conclude with a test closure report.",
  },
];

const fakeData = [
  {
    icon: <BsRocketFill />,
    title: "Independent QA",
    description:
      "Enosis delivers application testing services for your software solutions to give you a better control over application quality and evaluate product compliance.",
    buttonText: "Learn More",
    style: "bg-orange100",
  },
  {
    icon: <BsShieldFillCheck />,
    title: "Integrated Testing",
    description:
      "Any development project at Enosis has an integral testing scope. Before releasing your software, it goes through rigorous testing to ensure that it is working properly.",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <BsMegaphoneFill />,
    title: "QA Consulting",
    description:
      "We do a documented analysis of your project along with facts and experience-oriented recommendations for a proactive process improvement.",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <BsOpencollective />,
    title: "Full-Cycle Testing",
    description:
      "Our QA teams render quality assurance services along with the development lifecycle, be it automated or manual.",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <BsWrenchAdjustableCircleFill />,
    title: "Custom Testing",
    description:
      "From web to desktop and mobile applications, we create a comprehensive mix for testing each application to ensure quality.",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <TbSettingsCode />,
    title: "Test Automation",
    description:
      "We identify the best automation tool and assist based on our client’s test automation goals.",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  // Add more items as needed
];
export default function AaTesting() {
  return (
    <div>
      <div className="bg-background service-bg">
        <PageTitleArea
          title="Quality Assurance & Testing"
          btnText="GET QUOTE"
          description="We built  modern web applications across numerous industry verticals. Whether it JAVASCRIPT."
        />
        <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 container mx-auto ">
          {/* first section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
            <div className="md:order-2    flex justify-center items-center md:p-10">
              <Image width="auto" height="auto" alt="ok" src={image1}></Image>
            </div>
            <div>
              <h1 className="text-3xl text-black font-semibold">
                {" "}
                Quality Assurance & Testing
              </h1>
              <p className="text-text font-xl font-medium pt-5 text-justify">
                Reliability, efficiency, and expertise are the core principles
                of our QA services. With over a decade of testing experience, we
                are able to ensure quality of software products with reduced
                time-to-market, managing risks and operational costs. QA experts
                of Enosis will develop a software testing strategy to test and
                check every component of your software to eliminate possible
                issues.
              </p>
            </div>
          </section>
          {/* second section */}
          <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto mb-5 lg:mx-0">
            Our QA & Testing Expertise
          </h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5   justify-center items-center md:p-5 p-5">
            {fakeData.map((item, index) => (
              <QACard
                key={index}
                title={item.title}
                description={item.description}
                buttonText={item.buttonText}
                style={item.style}
                icon={item.icon}
              />
            ))}
          </section>
          <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-14">
            OUR ENGAGEMENT MODEL
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 w-[50%]">
            Customers are our key stakeholders. We focus and value the
            priorities of our clients needs as their extended team. Based on the
            requirements we are able to provide a complete plan and dedicated
            engineers to complete the project. We are highly flexible in
            customizing our engagement model to satisfy client demands.
          </p>

          {/* Full Time Engagement Model */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
            <div className="md:order-2    flex justify-center items-center md:p-10">
              <Image width="auto" height="auto" alt="ok" src={fmodel}></Image>
            </div>
            <div>
              <h1 className="text-3xl text-black font-semibold">
                {" "}
                Full Time Engagement Model
              </h1>
              <p className="text-text font-xl font-medium pt-5 text-justify">
                For ongoing projects and continuous flow of work, we assign
                dedicated engineers for working exclusively on your projects.
                The team size can be augmented based on your workload and skill
                requirements. <br />
                <br />
                Weekly timesheets and status reports are submitted for your
                monitoring and review.
              </p>
            </div>
          </section>

          {/* Project Based Model */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
            <div className="md:order-1    flex justify-center items-center md:p-10">
              <Image width="auto" height="auto" alt="ok" src={pmodel}></Image>
            </div>
            <div>
              <h1 className="text-3xl text-black font-semibold">
                {" "}
                Project Based Model
              </h1>
              <p className="text-text font-xl font-medium pt-5 text-justify">
                For fixed scope projects, we provide time and cost estimates
                after thoroughly analyzing your requirements. A detailed project
                plan is prepared for you to have a firm understanding of
                delivery milestones, time, and budget. <br /> <br />
                The necessary resources are assigned based on the time and
                complexity requirements of the project. We are fully committed
                to quality deliverables and meeting all deadlines.
              </p>
            </div>
          </section>

          {/* enagement */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 bg-background">
            <div className="   flex justify-center items-center md:p-10">
              <Image
                width="auto"
                height="auto"
                alt="ok"
                src={engagement}
              ></Image>
            </div>
            <div>
              <h1 className="  text-3xl text-black font-semibold flex justify-center items-center md:p-10">
                {" "}
                We provide the opportunity to evaluate our services before any
                formal engagement.
              </h1>
            </div>
          </section>

          {/* WorkFlow Section */}
          <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-14">
            Our way of working
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
            A digital marketing agency well known for providing efficient
            support when your digital marketing needs are concerned in a
            systematic and methodical way.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-6 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto ">
            {qaWorkflow.map((item, index) => {
              let customClass = "";
              if (item.id === 1 || item.id === 3 || item.id === 5) {
                customClass = "border-[#48cae4] md:-translate-y-10";
              } else if (item.id === 2 || item.id === 4 || item.id === 6) {
                customClass = "border-[#ffc2d1]";
              }

              return (
                <DProcess key={index} item={item} customClass={customClass} />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
