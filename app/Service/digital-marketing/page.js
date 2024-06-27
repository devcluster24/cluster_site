import DProcess from "@/app/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/component/PageTitleArea/page";
import Image from "next/image";
import image2 from "/public/digital marketing/one.png";
import image1 from "/public/digital marketing/onee.png";
const dataArray = [
  {
    id: 1,
    title: "Search Engine Optimization",
    description:
      "SEO is crucial in digital marketing, driving potential customers to your website effectively",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Social Media Marketing transforms platforms for product promotion, trust-building, and targeting large customer bases",
  },
  {
    id: 3,
    title: "Pay-Per-Click Marketing",
    description:
      "PPC marketing broadens your customer base with targeted ads, maximizing ROI and overall revenue",
  },
  {
    id: 4,
    title: "Social Media Paid Ads",
    description:
      "We promote your brands across social media platforms like Facebook, Instagram, and Twitter, enhancing brand awareness and follower engagement, and driving effective conversions",
  },
  {
    id: 5,
    title: "Online Reputation Management",
    description:
      "Building a strong online reputation is crucial for maintaining industry credibility and a solid online presence. Our specialists excel in implementing effective strategies to secure your position",
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Content marketing is a powerful tool in today's market, crucial for building trust and confidence that drive conversions. Our agency's strategies ensure instilling faith in your potential customers",
  },
];
const worlflow = [
  {
    id: 1,
    title: "Research",
    description:
      "We gather crucial information on business, target customers, products, and online competition",
  },
  {
    id: 2,
    title: "Create",
    description:
      "We set goals, create strategies (brand, content, digital marketing channels), and develop detailed plans with timelines and activities",
  },
  {
    id: 3,
    title: "Promotion",
    description:
      "We effectively utilize digital channels like search engines, social media, and email for promotion, generating relevant traffic.",
  },
  {
    id: 4,
    title: "Analysis",
    description:
      "In this phase, we monitor and analyze the outcomes of our digital marketing efforts using efficient digital analytics",
  },
  {
    id: 5,
    title: "Optimization and Reporting",
    description:
      "Based on analysis reports, necessary changes are implemented to enhance performance and inform future decisions",
  },
];
export default function DigitalMarketing() {
  return (
    <div>
      <div className="bg-background service-bg">
        <PageTitleArea
          title="Digital Marketing"
          btnText="GET QUOTE"
          description="Weve built  modern web applications across numerous industry verticals. Whether its JAVASCRIPT."
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
                Digital Marketing Service
              </h1>
              <p className="text-text font-xl font-medium pt-5 text-justify">
                In today&apos;s digital era, the term &quot;Digital&quot;
                pervades every aspect of our lives, transforming our world
                significantly. Digitalization has revolutionized marketing,
                expanding it beyond traditional boundaries. Digital marketing is
                no longer just a subset but a comprehensive strategy that
                transcends local markets, establishing international reach.
              </p>
            </div>
          </section>

          {/* second section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className="order-2 overflow-hidden ">
              <Image width="auto" height="auto" alt="ok" src={image2}></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl text-black font-semibold">
                {" "}
                Best Digital Marketing Company in Bangladesh
              </h1>
              <p className="text-text font-xl font-medium pt-5 text-justify">
                DevCluster is a comprehensive digital service provider in
                Bangladesh, renowned for its strong international presence. Our
                expert team specializes in professional search engine
                optimization and digital marketing, adept at creating,
                delivering, and managing effective social media and search
                engine campaigns for your business <br />
                Advertising across various social media platforms significantly
                impacts and converts leads. Our targeted, optimized advertising
                methods ensure optimal results for your marketing and sales
                efforts
              </p>
            </div>
          </section>

          {/* custom ui/ux type section */}
          <h1 className="lg:text-[30px] md:text-[30px] sm:text-[28px] text-[28px] text-black font-semibold  text-center  mx-auto lg:mx-0 md:mt-14">
            Digital Marketing Services
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 w-[50%]">
            Our digital marketing services enable round-the-clock brand
            promotion affordably
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center md:p-5 p-5 mt-5 ">
            {dataArray.map((item, index) => (
              <div key={index} className="card p-5">
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
            Our way of working
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
            Efficient digital marketing support, delivered systematically and
            methodically
          </p>

          <section className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto mb-20 ">
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
    </div>
  );
}
