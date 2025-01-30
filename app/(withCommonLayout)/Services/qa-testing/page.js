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
import PageTitleArea from "../../component/PageTitleArea/page";
import DProcess from "../../component/DevelopmentProcess/page";

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
      "DevCluster delivers application testing services to ensure superior software quality and compliance evaluation",
    buttonText: "Learn More",
    style: "bg-orange100",
  },
  {
    icon: <BsShieldFillCheck />,
    title: "Integrated Testing",
    description:
      "At DevCluster, every development project includes thorough testing to ensure proper functionality before software release",
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
      "We conduct detailed project analysis, providing evidence-based recommendations for proactive process improvement",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <BsWrenchAdjustableCircleFill />,
    title: "Custom Testing",
    description:
      "We ensure quality across web, desktop, and mobile applications with comprehensive testing for each",
    buttonText: "Learn More",
    style: "bg-blue200",
  },
  {
    icon: <TbSettingsCode />,
    title: "Test Automation",
    description:
      "We identify the optimal automation tool and provide tailored assistance aligned with our clients' test automation objectives",
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
        />
        <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 Container mx-auto ">
          {/* first section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
            <div className="md:order-2    flex justify-center items-center md:p-10">
              <Image className="w-[80%]" alt="ok" src={image1}></Image>
            </div>
            <div>
              <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                Quality Assurance & Testing
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
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
          <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
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

          {/* enagement */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 bg-background">
            <div className="   flex justify-center items-center md:p-10">
              <Image className="w-[80%]" alt="ok" src={engagement}></Image>
            </div>
            <div>
              <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                We provide the opportunity to evaluate our services before any
                formal engagement.
              </h1>
            </div>
          </section>

          {/* WorkFlow Section */}
          <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-20 ">
            Our way of working
          </h1>
          <p className=" font-medium text-[#6a6c72] text-justify text-sm">
            A digital marketing agency well known for providing efficient
            support when your digital marketing needs are concerned in a
            systematic and methodical way.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-6 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto pb-20">
            {qaWorkflow.map((item, index) => {
              let customClass = "";
              if (item.id === 1 || item.id === 3 || item.id === 5) {
                customClass = "border-[#48cae4] md:-translate-y-10";
              } else if (item.id === 2 || item.id === 4 || item.id === 6) {
                customClass = "border-[#ffc2d1]";
              }

              return (
                <DProcess
                  key={index}
                  item={item}
                  customclassName={customClass}
                />
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
