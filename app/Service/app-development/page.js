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
      <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 container mx-auto">
        {/* first section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
          <div className=" ">
            <Image width="auto" height="auto" alt="ok" src={image1}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              {" "}
              Best Mobile App Development Company in Bangladesh
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              Smartphone has gained a good reputation among peoples. Today
              android and iOS have become the most popular mobile-based
              operating systems across the world. <br /> To put out this fire,
              Tech Dyno BD has come with a professional creative website
              development team that can deliver the best web design &
              development services in Bangladesh. <br />
              Our proficient and responsive team always tries to ensure a unique
              webpage developing functionality for making the best web designs
              that reflect your brand identity very well.As we all love using
              gadgets, smartphones and iPhones have become the best ways to tap
              into our potential and bring a new dimension to our lives. We have
              already passed multiple generations in mobile phone technology, so
              now mobile apps have become an excellent platform to bring some
              reliable solutions to our day-to-day problems. <br />
              Therefore, Tech Dyno BD comes with iOS and android application
              development services to help you adopt mobile app usage in
              gamming, note-taking, productivity, social media, and
              organization.
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
              Nowadays, the mobile app becomes an important element to connect
              with family, friends, and brands yet. Through social media apps,
              posting personal photos and updates becomes effortless and
              time-saving yet. Besides, you can also monitor your heart rate,
              calories, physical activity, and other health statistics through
              these mobile apps. <br /> As we all know, at present, we are going
              to enter into a cashless economy worldwide. So the mobile payment
              system is widely spreading across the world. Using our card
              information, now we can quickly pay our payments through our
              mobile apps. Therefore retail stores and super shop owners offer
              advanced mobile apps to their customers, including online
              purchasing and mobile payment facilities. <br /> Besides, many
              business organizations are now adopting Enterprise Mobility
              Management (EMM) tools to improve enterprise capability and
              provide better support to their clients. By adding security
              techniques, productivity features, and IT management tool
              integrations, an android application is gradually gaining
              tremendous popularity in the enterprise. <br /> Overall, the
              smartphone is usually a handy device. As android smartphones come
              in a smaller size and are more affordable and an easy-access
              device than computers, business users are getting in love with
              android apps to perform their regular work smoothly.
            </p>
          </div>
        </section>
        {/* custom app type section */}
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-14">
          Custom Mobile App Development Services
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 w-[50%]">
          Built with carefully engineered ideas that either refurbish your
          existing mobile app with ideal features or develop a completely new
          product right from the scratch that well suits your purpose.
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
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-14">
          Our Process of Development
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
          Weavers Web Solutions has successfully gained the valuable trust of
          its customers and we have chalked out a process that shall ensure the
          development of solutions that satisfy your unique demands.
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
