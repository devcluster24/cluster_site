import DProcess from "@/app/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/component/PageTitleArea/page";
import Image from "next/image";
import image1 from "/public/app-development/one.png";
import image2 from "/public/app-development/two.png";
const dataArray = [
  {
    id: 1,
    title: "Android App Development Services",
    description:
      "Our android mobile application developers build apps that perfectly blend in with your android device",
  },
  {
    id: 2,
    title: "iOS App Development Services",
    description:
      "As an iOS app development company, our iOS mobile application developers help in giving the right shape to your iOS apps which resonate well with all your Apple devices.",
  },
  {
    id: 3,
    title: "Cross-Platform Mobile App Development Services",
    description:
      "Our cross-platform mobile app development services take into account several factors like compatibility of technology, cost-effectiveness as well as easy updates and deliver high-performing apps.",
  },
  {
    id: 4,
    title: "Native Mobile App Development Services",
    description:
      "Being a leading platform for native mobile app development, our mobile app developers are equipped with the technical expertise to deliver the finest of apps possible.",
  },
  {
    id: 5,
    title: "Hybrid Mobile App Development Services",
    description:
      "Our hybrid mobile application developers ensure that the fruition of the apps gets reflected in the very success of your business.",
  },
  {
    id: 6,
    title: "Enterprise Mobile App Development Services",
    description:
      "Our custom mobile app development solutions ensure that your purpose related to apps get served in the best way that is possible.",
  },
  {
    id: 7,
    title: "Business Mobile Application Development Services",
    description:
      "As a premier custom mobile app development company, we ensure that the entire process of mobile app development right from ideation to ongoing support is delivered in a seamless way.",
  },
  {
    id: 8,
    title: "Wearable App Development Services",
    description:
      "At Weavers Web Solutions we have the talent and the expertise that could give an app that blends in well with your wearable device.",
  },
  {
    id: 9,
    title: "Mobile App Support and Consultation Services",
    description:
      "Our proficient mobile app developers are always at your service to guide you through the right process that gives you the desired and the best results revolving around mobile app and development",
  },
];
const worlflow = [
  {
    id: 1,
    title: "Blending in well with your demands",
    description:
      "Our process begins with the careful understanding of your expectations related to the mobile app.",
  },
  {
    id: 2,
    title: "Your feedback is valuable to us",
    description:
      "Before we enter into the design and development phases, we go through a thorough consultation and attain your valuable feedback.",
  },
  {
    id: 3,
    title: "Designing phase",
    description:
      "Wireframes and designs of the concerned app fill this phase up.",
  },
  {
    id: 4,
    title: "Development",
    description:
      "This phase is all about coding and bringing your ideas to life and also about gathering your valuable feedback.",
  },
  {
    id: 5,
    title: "The Final Phase",
    description:
      "This phase marks the end where the deployment of the app takes place after the final testing of the app and a final approval from your side.",
  },
];
export default function AppDevelopment() {
  return (
    <div className="bg-background service-bg">
      <PageTitleArea
        title="App Development"
        btnText="GET QUOTE"
        description="We have built  modern web applications across numerous industry verticals. Whether it JAVASCRIPT."
      />
      <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 Container mx-auto">
        {/* first section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
          <div className=" ">
            <Image width="auto" height="auto" alt="ok" src={image1}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              {" "}
              Best Mobile App Development Company
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              Smartphones are incredibly popular, with Android and iOS leading
              the market. DevCluster meets this demand with a professional team
              that delivers top web design and development services in
              Bangladesh. Our responsive team creates unique web designs that
              reflect your brand identity. <br /> As gadgets shape our lives,
              mobile apps offer reliable solutions to everyday problems.
              DevCluster provides iOS and Android app development services for
              gaming, note-taking, productivity, social media, and organization,
              helping you leverage mobile technology to its fullest potential.
            </p>
          </div>
        </section>

        {/* second section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
          <div className="order-2 overflow-hidden ">
            <Image
              width="auto"
              height="auto"
              className="-translate-y-28"
              alt="ok"
              src={image2}
            ></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              {" "}
              Why Android Application Development
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              Mobile apps are essential for connecting with family, friends, and
              brands. They make sharing photos, monitoring health, and managing
              payments effortless. As we move towards a cashless economy, mobile
              payment systems are spreading globally. Retail stores offer
              advanced apps for online purchasing and payments. Businesses are
              adopting Enterprise Mobility Management (EMM) tools for enhanced
              capability and client support, integrating security, productivity,
              and IT management. Android apps, being affordable and accessible,
              are becoming increasingly popular among business users for their
              convenience in daily tasks.
            </p>
          </div>
        </section>
        {/* custom app type section */}
        <h1 className="lg:text-[30x] md:text-[30px] sm:text-[28px] text-[28px] text-black font-semibold  text-center  mx-auto lg:mx-0 md:mt-14">
          Custom Mobile App Development Services
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 w-[50%]">
          We engineer and enhance mobile apps or create new ones tailored to
          your specific needs.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center md:p-5 p-5 mt-5 mb-20">
          {dataArray.map((item, index) => (
            <div key={index} className="card p-5 h-[300px]">
              <h1 className="text-black border-b-2 border-[#a8a8ad] pb-5 text-xl font-bold">
                0 {item.id}
              </h1>
              <h3 className="text-black mt-5 mb-5 font-bold text-xl">
                {item.title}
              </h3>
              <p className="text-text font-medium">{item.description}</p>
            </div>
          ))}
        </section>

        {/* WorkFlow Section */}
        <h1 className="lg:text-[30px] md:text-[30px] sm:text-[28px] text-[28px] text-black font-semibold  text-center  mx-auto lg:mx-0 md:mt-14">
          Our Process of Development
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
          DevCluster has earned valuable customer trust, with a proven process
          ensuring solutions that satisfy unique demands
        </p>

        <section className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto ">
          {worlflow.slice(0, 5).map((item, index) => {
            let customClass = "";
            if (item.id === 1 || item.id === 3 || item.id === 5) {
              customClass = "border-[#48cae4] md:-translate-y-10";
            } else if (item.id === 2 || item.id === 4) {
              customClass = "border-[#ffc2d1]";
            }

            return (
              <DProcess key={index} item={item} customClass={customClass} />
            );
          })}
        </section>
      </div>
    </div>
  );
}
