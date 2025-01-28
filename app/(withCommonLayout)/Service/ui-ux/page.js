import DProcess from "@/app/(withCommonLayout)/component/DevelopmentProcess/page";
import PageTitleArea from "@/app/(withCommonLayout)/component/PageTitleArea/page";
import Image from "next/image";
import image1 from "/public/ui-ux/one.png";
import image2 from "/public/ui-ux/two.png";
const worlflow = [
  {
    id: 1,
    title: "Defining the needs",
    description:
      "Our process begins with the identification of the needs and demands of the project concerned.",
  },
  {
    id: 2,
    title: "Research",
    description:
      "This is an important step as it includes doing a thorough research revolving around the competition in the market and the scope of the product to be developed.",
  },
  {
    id: 3,
    title: "Strategising ways",
    description:
      "Next we define the different ways that would be undertaken during the entire process of designing.",
  },
  {
    id: 4,
    title: "Execution",
    description:
      "This phase involves working with the wireframes and the prototypes and finally we give shape to your ideas",
  },
  {
    id: 5,
    title: "The Final Result",
    description:
      "At the end we have the final product, ready to be delivered to you.",
  },
];
const dataArray = [
  {
    id: 1,
    title: "Accurate Architecture",
    description:
      "Our careful and thoughtful plans ensure efficient optimization that facilitates perfect navigation and systematic flow of information that at the end meet the desired goals.",
  },
  {
    id: 2,
    title: "Mobile Application Design Solutions",
    description:
      "Creative UI/UX design services that exceed your expectations and our design solutions represent a fine fusion of mobile UI/UX and other elements that deliver seamless user experiences",
  },
  {
    id: 3,
    title: "User Interaction Design Services",
    description:
      "We cover various aspects of user experience design and ensure that products so developed serve their very purpose and users are able to achieve the very objectives in the finest way possible, that is precisely what interaction design services are associated with.",
  },
  {
    id: 4,
    title: "Compatible Solutions",
    description:
      "Our design solutions are compatible with different platforms and the fruition of the web and mobile application design solutions lets you connect with potential customers that ultimately result in valuable conversions.",
  },
  {
    id: 5,
    title: "Functional Wireframes",
    description:
      "Our wireframes are neatly built that gives the perfect illustration of the layout of the page to be developed. Our UI/UX design solutions make way where early feedback about the design solutions and whether the placement of the functionality and content is in the correct position or not is possible.",
  },
  {
    id: 6,
    title: "Prototyping",
    description:
      "You get to have the feel and the look of the final solution with the help of the prototypes that we develop. Web and mobile application design that fulfils your business requirements are developed by experts at Weavers Web Solutions.",
  },
  {
    id: 7,
    title: "Website Design",
    description:
      "Responsive web design, that is precisely what our experts engage in while designing and it also satisfies your branding needs, driving in leads that enhance the rate of conversions.",
  },
  {
    id: 8,
    title: "Web Application Design Services",
    description:
      "Web application designs that are delivered from Weavers Web Solutions completely adapt to your mobile screens.",
  },
  {
    id: 9,
    title: "Social Media Design Services",
    description:
      "With our design services we ensure that your digital presence outshines others and that your business has better reach.",
  },
];
export default function UiUx() {
  return (
    <div>
      <div className="bg-background service-bg ">
        <PageTitleArea title="Ui / Ux" btnText="GET QUOTE" />
        <div className="flex flex-col items-center justify-center w-full  p-5 md:p-0 Container mx-auto">
          {/* first section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
            <div>
              <Image alt="ok" className="w-[80%]" src={image1}></Image>
            </div>
            <div>
              <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                UI/UX Design
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                Designing the product is the first step of taking action. To
                ensure the best user experience, you need to work from the very
                beginning, which is designing. Our expert team designs with a
                vision and ensures that the design is beautiful, user friendly,
                up-to-date with the trend and unique.
              </p>
            </div>
          </section>

          {/* second section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5 ">
            <div className="lg:order-2 overflow-hidden ">
              <Image className="w-[80%]" alt="ok" src={image2}></Image>
            </div>
            <div>
              <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
                The Value of UI/UX Design
              </h1>
              <p className=" font-medium text-[#6a6c72] text-justify text-sm">
                UI/UX guarantees a return on your investment. Some research
                shows that you get $100 for spending every $1 after UI/UX
                design. It helps your customers feel safe and confident while
                using your website and application. Want to create an impression
                on the first visit? That is what UI/UX does. <br />
                Bad user experience is one of the primary reasons most startups
                and businesses fail. You can avoid this risk with a proper UI/UX
                design.
              </p>
            </div>
          </section>

          {/* custom ui/ux type section */}
          <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
            UI/UX Design Services
          </h1>
          <p className=" font-medium text-[#6a6c72] text-justify text-sm ">
            Creative UI/UX design solutions adding value to your brand
          </p>
          <section className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 justify-center items-center md:p-5 p-5 mt-5 lg:mb-20">
            {dataArray.map((item, index) => (
              <div key={index} className="card p-5 lg:h-[300px]">
                <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
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
          <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold  pt-5 lg:pt-0">
            Unfurling the entire story behind designing
          </h1>
          <p className=" font-medium text-[#6a6c72] text-justify text-sm lg:mb-10">
            The UI/UX design process is systematic, requiring detailed study and
            logical steps
          </p>

          <section className="grid grid-cols-1 md:grid-cols-5 gap-5 justify-center items-center md:p-5 p-5 mt-14 service-bg container mx-auto lg:mb-10">
            {worlflow.slice(0, 5).map((item, index) => {
              let customClass = "";
              if (item.id === 1 || item.id === 3 || item.id === 5) {
                customClass = "border-[#48cae4] md:-translate-y-10";
              } else if (item.id === 2 || item.id === 4) {
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
