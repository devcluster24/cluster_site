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
      "Search Engine Optimization happens to be a crucial part of digital marketing strategy. It has proved its worth as a powerful tool associated with marketing and that which helps in bringing potential customers to your website.",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Social Media Marketing helps to convert various social media platforms into a place where promotion of products and services, trust building and a whole lot of other activities are possible and a very big customer base can be targeted. As a digital marketing agency our SMM services helps your business achieve fruitful results as with time this form of marketing gets converted to the organic segment of your business which drives in the right people for the right reasons.",
  },
  {
    id: 3,
    title: "Pay-Per-Click Marketing",
    description:
      "PPC marketing enables you to reach out to a wider base of potential customers by means of targeted ads. Our PPC campaigns ensure that you achieve better results with respect to your return on investment and the overall revenue.",
  },
  {
    id: 4,
    title: "Social Media Paid Ads",
    description:
      "Through social media paid advertising we help in the promotion of your brands in the different social media platforms, for instance, Facebook, Instagram, Twitter and the fruition of this process leads to an increase in the awareness of your brands, the number of followers and in best cases it also results in effective conversions.",
  },
  {
    id: 5,
    title: "Online Reputation Management",
    description:
      "It is important to build online reputation through various means so that your position in the industry does not go haywire and you get to have a firm hold over your online presence. We help you out in this regard and our specialists are well-known for implementing the required skills.",
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Content marketing happens to be a very powerful tool of marketing in the current market conditions. Trust and confidence are two most important elements that affect conversion to a great extent and content marketing helps to generate the same. As a digital marketing agency and with our content marketing strategies you are sure to instil the much coveted faith and trust in the minds of your potential customers.",
  },
];
const worlflow = [
  {
    id: 1,
    title: "Research",
    description:
      "Significant information to make necessary decisions is gathered covering segments like business, target customers, product that you wish to market and the online competition.",
  },
  {
    id: 2,
    title: "Create",
    description:
      "Goals and objectives are set followed by creation of strategies like brand, content and digital marketing channel strategies. Next a plan is created with all the timelines and activities chalked out in it.",
  },
  {
    id: 3,
    title: "Promotion",
    description:
      "The best use of digital channels, for instance, search engines, social media, email and so on are made in an effective way for the purpose of promotion. Relevant traffic is also generated in this phase.",
  },
  {
    id: 4,
    title: "Analysis",
    description:
      "Monitoring is done in this phase to analyse the outcome of the digital marketing work done so far. Digital analytics is efficiently used for the purpose of monitoring the performance.",
  },
  {
    id: 5,
    title: "Optimization and Reporting",
    description:
      "As per the reports of the analysis phase, changes are made as required to improve the performance. In this phase information is collected that forms the basis of future decisions.",
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
        <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 container mx-auto">
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
                The word Digital is now probably the most common and overused
                term of this era. At present, this single terminology covers
                almost each and every part of our life. With the concept of
                digitalization, today, the world is now changing drastically and
                bringing a new dimension into our lifestyle. <br />
                As we have already entered the digital era, marketing has become
                far different from earlier. Digital marketing service or online
                marketing is not just a particular component of marketing.
                Actually, it is more than marketing yet. Nowadays, local
                companies and other service offering agencies are not stuck
                within the local market; they also have an international
                presence yet. <br />
                Through the internet, the world now becomes a global village
                yet. It brings marketing into our hands and helps us to engage
                more people through search engines. Today, digital marketing is
                the most effective and cost-efficient way to turn our online
                visitors into our customers.
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
                Tech Dyno BD is a complete and compact digital service provider
                in Bangladesh with a strong international presence. Our
                Professional Search engine optimization and digital marketing
                team are skilled and experienced enough to create, deliver, and
                manage social media and search engine campaigns for your
                business. <br />
                Besides, advertising through different social media platforms
                offers a great impact and influence people to turn into leads.
                Our targeted and optimized advertisement methods are well
                capable of showing the best result in your marketing and sales.
              </p>
            </div>
          </section>

          {/* custom ui/ux type section */}
          <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-14">
            Digital Marketing Services
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 w-[50%]">
            As a popular digital marketing company, our digital marketing
            services provide an opportunity to businesses of varying sizes to
            market their products or brands round the clock at a very low cost.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center md:p-5 p-5 mt-5 mb-20">
            {dataArray.map((item, index) => (
              <div key={index} className="card p-5 h-[400px]">
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
            Our way of working
          </h1>
          <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
            A digital marketing agency well known for providing efficient
            support when your digital marketing needs are concerned in a
            systematic and methodical way.
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
    </div>
  );
}
