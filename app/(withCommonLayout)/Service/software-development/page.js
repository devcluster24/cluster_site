import DProcess from "@/app/(withCommonLayout)/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/(withCommonLayout)/component/PageTitleArea/page";
import Image from "next/image";
import image4 from "/public/software-development/four.png";
import image1 from "/public/software-development/one.png";
import image3 from "/public/software-development/thre.png";
import image2 from "/public/software-development/two.png";
const dataArray = [
  {
    id: 1,
    title: "Financial Software Development Services",
    description:
      "Our diligent team of developers are equipped with the skills and expertise to build custom applications for your businesses belonging to the financial industry like banks, investment firms and insurance companies.",
  },
  {
    id: 2,
    title: "Healthcare Management Software Development Services",
    description:
      "Years of experience have made us experts in the field of development of custom software for healthcare organisations. Our solutions bring about improvements in the process of patient care, efficient management of medical and streamline operations of medical professionals.",
  },
  {
    id: 3,
    title: "Retail Software Development Services",
    description:
      "Retailers have been benefited to a great extent by our custom solutions which help them in processes like inventory management, order processing and also gives customers a great shopping experience.",
  },
  {
    id: 4,
    title: "Elearning Software Development Services",
    description:
      "We come up with solutions that facilitate a learning experience that is both engaging as well as personalised and they are integrated with features like progress tracking, interactive content and also adaptive learning.",
  },
  {
    id: 5,
    title: "Food and Beverage Software Development Services",
    description:
      "Headed by an expert team of developers, we are adept in the creation of custom software solutions for restaurants and food delivery services that help them in the perfect management of their orders, menus, valuable feedback from the customers and lots more.",
  },
  {
    id: 6,
    title: "Logistics and Transportation Software Development Services",
    description:
      "Now management of your logistics and supply chain operations which also includes tracking of shipments and optimisation of delivery routes should be an easy task with our smart logistics software solutions.",
  },
  {
    id: 7,
    title: "Sports and Fitness Software Development Services",
    description:
      "The sports and fitness industry reaps great benefits from our solutions. Be it individual athletes or fitness clubs and sports teams. Our solutions have proven their worth in providing excellent services like managing schedules, providing training and so on.",
  },
  {
    id: 8,
    title: "Real Estate Software Development Services",
    description:
      "Weavers Web Solutions is a leading name when it comes to development of real estate software. We provide solutions that help real estate agencies in the management of property listings, streamlining of transactions and much more.",
  },
  {
    id: 9,
    title: "Social Networking Software Development Services",
    description:
      "Our solutions come in handy specifically for niche communities and help them to get connected, share ideas and also build relationships. Social networking platforms are our creations that serve the purposes of various interest groups.",
  },
];
const worlflow = [
  {
    id: 1,
    title: "Meeting Requirements",
    description:
      "In the initial stages, we begin our process by discussing the requirements which would help us set the definitive goals.",
  },
  {
    id: 2,
    title: "Feasibility Study",
    description:
      "We move on to check the feasibility of the various technologies that would be appropriate for the project keeping the project goals in mind.",
  },
  {
    id: 3,
    title: "Creating Strategies",
    description:
      "Weavers Web Solutions is a custom web application development company that takes into account the market requirements of your product and all the challenges before diving into the process of creation.",
  },
  {
    id: 4,
    title: "Design and Development",
    description:
      "Our highly skilled team of designers and developers give the right shape to the impeccable product that awaits you at the further end.",
  },
  {
    id: 5,
    title: "Final Updates",
    description:
      "This is the stage where you can actually get a demo and track the progress of your product and also provide your valuable feedback.",
  },
];
export default function SoftwareDevelopment() {
  return (
    <div>
      <div className="bg-background service-bg ">
        <PageTitleArea
          title="Software Development Service"
          btnText="GET QUOTE"
          description="Weve built  modern web applications across numerous industry verticals. Whether its JAVASCRIPT."
        />
        <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 Container mx-auto">
          {/* first section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className=" ">
              <Image alt="ok" width="auto" height="auto" src={image1}></Image>
            </div>
            <div>
              <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                Best Custom Software Development Services
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                In today&apos;s tech-savvy world, globalization is rapidly
                transforming our lives. Whether you run a small or large
                business, software usage simplifies operations and facilitates
                effective business management, leading to greater success.{" "}
                <br />
                Similar to leading software development firms worldwide,
                DevCluster offers innovative software development services. We
                empower your business or organization to remain innovative,
                agile, and efficient in upholding corporate values.
              </p>
            </div>
          </section>

          {/* second section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className="lg:order-2 overflow-hidden ">
              <Image
                className=""
                alt="ok"
                width="auto"
                height="auto"
                src={image2}
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                Areas of Expertise
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                <ul>
                  <li>&#8226; Custom Web Application Development</li>
                  <li>&#8226; Custom Mobile App Development</li>
                  <li>&#8226; User Experience and Design</li>
                  <li>&#8226; Custom Database Development</li>
                  <li>&#8226; Big Data Solutions</li>
                  <li>&#8226; Artificial Intelligence (AI) Integration</li>
                </ul>
              </p>
            </div>
          </section>
          {/* Third section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className=" overflow-hidden ">
              <Image width="auto" height="auto" alt="ok" src={image3}></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                Software Types
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                <ul>
                  <li>&#8226; Enterprise resource and process management</li>
                  <li>&#8226; Digital channels to customers</li>
                  <li>&#8226; Industrial solutions</li>
                  <li>&#8226; Connected and smart solutions</li>
                  <li>&#8226; Artificial Intelligence</li>
                  <li>&#8226; Knowledge and productivity</li>
                  <li>&#8226; Industry-specific software</li>
                </ul>
              </p>
            </div>
          </section>
          {/*four section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className=" overflow-hidden ">
              <Image
                width="auto"
                height="auto"
                className="order-2"
                alt="ok"
                src={image4}
              ></Image>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                {" "}
                We Eagerly Put in Use IT Innovations
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                <p>
                  We bring smart solutions that enhance software efficiency,
                  exceeding expectations:
                </p>
                <ul>
                  <li>&#8226; Internet of Things (IoT)</li>
                  <li>&#8226; Artificial Intelligence (AI)</li>
                  <li>&#8226; Big Data</li>
                  <li>&#8226; Data Science</li>
                  <li>&#8226; Blockchain</li>
                  <li>&#8226; Augmented Reality</li>
                  <li>&#8226; Computer Vision</li>
                </ul>
              </p>
            </div>
          </section>
          {/* custom software type section */}
          <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
            Custom Software Development Services
          </h1>
          <p className=" font-medium text-[#6a6c72] text-justify text-sm">
            Our dedicated team delivers tailored software solutions that meet
            your business needs effectively
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 justify-center items-center md:p-5 p-5 mt-5 mb-20">
            {dataArray.map((item, index) => (
              <div key={index} className="card p-5 h-[300px]">
                <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                  0 {item.id}
                </h1>
                <h3 className="text-black mt-5 mb-5 font-bold text-xl">
                  {item.title}
                </h3>
                <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </section>

          {/* WorkFlow Section */}
          <h1 class="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
            Our Process of Development
          </h1>
          <p className=" font-medium text-[#6a6c72] text-justify text-sm">
            Devcluster has earned customer trust, ensuring tailored solutions
            that meet unique demands
          </p>

          <section className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto  mb-20">
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
