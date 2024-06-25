import { BiLogoPlayStore } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa6";
import { GiAlienBug, GiLaptop } from "react-icons/gi";
import { VscGlobe } from "react-icons/vsc";
import ServiceCard from "./ServiceCard";
const fakeData = [
  {
    icon: <FaCode />,
    title: "Web App Development",
    description:
      "Web development encompasses a wide range of services, which include delivering websites or web apps, cybersecurity solutions, UX/UI design.",

    bgColor: "bg-[#faddd4]",
    textColor: "text-[#FF6969]",
    link: "/Service/web-development",
  },
  {
    icon: <BiLogoPlayStore />,
    title: "Mobile App Development",
    description:
      "Mobile app development services refer to the creation of software applications that are designed to run on mobile devices, such as smartphones and tablets.",
    textColor: "text-[#54B3AE]",
    bgColor: "bg-[#cafbf2]",
    link: "/Service/app-development",
  },
  {
    icon: <GiLaptop />,
    title: "Software Development",
    description:
      "Software development crafts applications for diverse needs, ensuring functionality, usability, and efficiency through coding and rigorous testing processes",
    textColor: "text-[#38ADD8]",
    bgColor: "bg-[#c5ebf9]",
    link: "/Service/software-development",
  },
  {
    icon: <GiAlienBug />,
    title: "Quality Assurance & Testing",
    description:
      "Quality assurance ensures flawless mobile apps by rigorous testing, ensuring reliability, security, and optimal performance for users",
    textColor: "text-[#F06AB7]",
    bgColor: "bg-[#fcdeee]",
    link: "/Service/qa-testing",
  },
  {
    icon: <FaArtstation />,
    title: "Ui/Ux",
    description:
      "Quality assurance ensures flawless mobile apps by rigorous testing, ensuring reliability, security, and optimal performance for users",

    bgColor: "bg-[#f8fbd5]",
    textColor: "text-[#FF8F00]",

    link: "/Service/ui-ux",
  },
  {
    icon: <VscGlobe />,
    title: "Digital Marketing",
    description:
      "Quality assurance ensures flawless mobile apps by rigorous testing, ensuring reliability, security, and optimal performance for users",
    bgColor: "bg-[#ddd5fb]",
    textColor: "text-[#8F7CDC]",
    link: "/Service/digital-marketing",
  },
];

export default function Service() {
  return (
    <div id="service" className=" px-4 sm:px-6 md:px-10 bg-[#f6f5fb] w-full">
      <div className="Container  mx-auto flex flex-col justify-center items-center space-y-2 my-10">
        <h1 className="text-primary font-mono font-semibold mt-5">SERVICES</h1>
        <p className="text-[#202647] font-bold text-sm md:text-base lg:text-[30px] mx-auto text-center mb-8 xl:mb-12">
          How We Can Help?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-8 xl:gap-10 pt-14">
          {fakeData.map((item, index) => (
            <ServiceCard
              key={index}
              address={item.link}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              bgColor={item.bgColor}
              textColor={item.textColor}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
