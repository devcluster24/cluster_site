import DProcess from "@/app/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/component/PageTitleArea/page";
import Image from "next/image";
import image4 from "/public/web-development/four.png";
import image1 from "/public/web-development/one.png";
import image3 from "/public/web-development/three.png";
import image2 from "/public/web-development/two.png";
const dataArray = [
  {
    id: 1,
    title: "Business Web Application Development Services",
    description:
      "As a web app development company we deliver impeccable software that fulfil all your business requirements satisfactorily.",
  },
  {
    id: 2,
    title: "Ecommerce Web App Development Solutions",
    description:
      "We are a web based app development agency and we ensure efficient user experience through our products and services.",
  },
  {
    id: 3,
    title: "Enterprise Web Application Development Services",
    description:
      "Our experienced web application developers render services that result in astounding outcomes as desired by our customers.",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Our testing procedures ensure you of products that are error-free as they undergo rigorous testing under conditions that are practically very challenging.",
  },
  {
    id: 5,
    title: "Quality Assurance",
    description:
      "You shall be faced with no issues as you move on to use our products and we assure you of the highest quality that is possible.",
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "We provide end-to-end maintenance services that assure you of flawless software products.",
  },
];

const worlflow = [
  {
    id: 1,
    title: "Product Discovery Stage",
    description:
      "In this stage we scrutinise the demands and the expectations associated with the software solution.",
  },
  {
    id: 2,
    title: "Software Design and Development",
    description:
      "This stage marks the phase where the software solution is designed and developed keeping in mind the product requirements.",
  },
  {
    id: 3,
    title: "Software Testing",
    description:
      "In this stage, the software solution undergoes rigorous testing processes to see to it that the software meets up to the user expectations.",
  },
  {
    id: 4,
    title: "Final Launch",
    description:
      "Finally, once all the essential processes are completed, the software solution goes through the deployment processes.",
  },
  {
    id: 5,
    title: "Software Maintenance",
    description:
      "We also provide maintenance services which take good care of the fact that the software solution is delivering services and is free from any kind of glitches and errors.",
  },
];
export default function WebDevelopment() {
  return (
    <div className="bg-background service-bg ">
      <PageTitleArea
        title="Web Development"
        btnText="GET QUOTE"
        description="We have built  modern web applications across numerous industry verticals. Whether it is JAVASCRIPT."
      />
      <div className="flex flex-col items-center justify-center w-full p-5 md:p-0 Container mx-auto ">
        {/* first section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
          <div className=" ">
            <Image alt="ok" width="auto" src={image1}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              {" "}
              Best Website Design and Development
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              In today&apos;s business world, growing your business with
              lead-driving websites that engage effectively with search engines
              is essential. A company&apos;s website serves as a digital
              landscape and a crucial marketing asset to achieve tangible
              business results. To address this need, DevCluster brings you a
              professional and creative website development team that delivers
              the best web design and development services in Bangladesh. Our
              proficient and responsive team ensures unique webpage development
              functionalities, creating exceptional web designs that accurately
              reflect your brand identity.
            </p>
          </div>
        </section>
        {/* second section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 mt-5">
          <div className="order-2 ">
            <Image width="auto" alt="ok" src={image2}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              {" "}
              Ecommerce Website Design
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              As online shopping saves time, the demand for e-commerce
              businesses in Bangladesh is increasing day by day. DevCluster is
              always by your side to help you succeed in today’s digital
              Bangladesh. We are here to assist you in offering a reliable,
              secure, and fast e-commerce system for your customers. <br />
              Let us help you create your corporate values and brand identity.
              With our top-quality eCommerce web design services in Bangladesh,
              you will be able to bring your customers closer and deliver a
              seamless and useful shopping experience.
            </p>
          </div>
        </section>
        {/* third  section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 mt-5">
          <div className=" ">
            <Image alt="ok" width="auto" src={image3}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              Mobile-friendly Responsive Website Design
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              The responsiveness of a website refers to its ability to
              automatically adjust to any screen size. Today, about 57% of
              online traffic in the USA comes from mobile phones and tablets.
              Google also emphasizes mobile-friendly sites, giving them higher
              rankings in search results. Therefore, creating responsive mobile
              web designs is crucial to attracting more online traffic from
              search engines <br />
              If you are a service provider or company owner looking for
              responsive web design services in Bangladesh, you have come to the
              right place. Our experienced and dedicated web development team at
              DevCluster has the expertise to design user-engaging web
              interfaces and provide top-notch responsive website design
              services <br />
              With our responsive web pages, you can enhance your website&apos;s
              efficiency by converting visitors into leads. Additionally, we
              offer software development services in Dhaka to streamline and
              expedite your business operations.
            </p>
          </div>
        </section>
        {/* fourth  section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 mt-5">
          <div className="order-2 ">
            <Image width="auto" alt="ok" src={image4}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              Pre-made Theme Setup & Customization
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              DevCluster also provides CMS development services on various
              platforms tailored to client requirements. Our proficient
              developers excel in custom Magento development and pre-made theme
              customization, boasting extensive experience in customizing
              high-converting templates. <br />
              Unlike other WordPress design service agencies in Bangladesh, we
              focus on delivering results rather than just making promises. We
              specialize in custom or designed themes for WordPress, Joomla,
              Shopify, and Magento, creating unique websites for our clients.{" "}
              <br />
              Whether your business is small or large, we can customize themes
              that best resonate with your brand. We strive to implement our
              clients&apos; visions and expectations with a 100% satisfaction
              guarantee.
            </p>
          </div>
        </section>
        {/* five  section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 mt-5 ">
          <div className=" ">
            <Image alt="ok" width="auto" src={image4}></Image>
          </div>
          <div>
            <h1 className="text-3xl text-black font-semibold">
              Superfast and Optimal Website Design
            </h1>
            <p className="text-text font-xl font-medium pt-5 text-justify">
              Here’s a revised version of the content for DevCluster: When a
              visitor clicks on your site URL, they expect it to load within
              seconds. If your web page delays for 2-3 seconds after 3 seconds,
              40% of visitors will leave your site and go elsewhere. Even once
              your page loads, users take only 0.5 seconds to decide whether to
              stay or leave. <br />
              Our site development services at DevCluster ensure excellent speed
              optimization for both mobile and desktop, so you don&apos;t need
              to worry about the loading speed of your web pages. <br />
              We guarantee that our Search Engine Optimization services will
              enhance your website&apos;s performance on search engines, both
              locally and internationally.
            </p>
          </div>
        </section>
        {/* web type section */}
        <h1 className=" lg:text-[30px] md:text-[30px] sm:text-[28px] text-[28px] text-black font-semibold  text-center  mx-auto lg:mx-0 md:mt-14">
          Custom Web Application Development Services
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5">
          Delivering web application development services, the fruition of which
          leave our happy customers ever-satisfied.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center md:p-5 p-5 mt-5  ">
          {dataArray.map((item, index) => (
            <div key={index} className="card p-5 h-[270px]">
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
        <h1 className=" lg:text-[30px] md:text-[30px] sm:text-[28px] text-[28px] text-black font-semibold  text-center  mx-auto lg:mx-0 md:mt-14">
          Our Process of Development
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5 md:w-[70%]">
          DevCluster has earned the valuable trust of its customers, with a
          process ensuring solutions that meet your unique demands
        </p>
        <section className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto ">
          {worlflow.map((item, index) => {
            let customClass = "";
            if (item.id === 1 || item.id === 3 || item.id === 5) {
              customClass = "border-[#48cae4] md:-translate-y-8";
            } else if (item.id === 2 || item.id === 4) {
              customClass = "border-[#ffc2d1]";
            }

            return (
              <DProcess key={item.id} item={item} customClass={customClass} />
            );
          })}
        </section>
      </div>
    </div>
  );
}
