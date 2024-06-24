import image3 from "../../../public/home-collaboration.png";
import image1 from "../../../public/home-engineers.png";
import image4 from "../../../public/home-supervision.png";
import image2 from "../../../public/home-team.png";
import Offercard from "./OfferCard/page";
export default function WeOffer() {
  const offerlist = [
    {
      id: 1,
      title: "Qualified Engineers",
      description:
        "DevCluster is a team of 150+ software experts. We continue to strive in being the best in the industry by hiring engineers from renowned universities. Having team members experienced in a wide range of technology stacks enables us to meet different customers needs.",
      imageSrc: image1,
    },
    {
      id: 2,
      title: "Dedicated Team",
      description:
        "Our in-house team is yours too. We will jump in and ramp up quickly. Your goals become our goals. We will navigate the risks of software development together.",
      imageSrc: image2,
    },
    {
      id: 3,
      title: "Collaborative Process",
      description:
        "We work as an extension of your team, not as a vendor. We help you to participate in a deeply collaborative process to develop the desired product. We will be in constant communication with your team every step of the way.",
      imageSrc: image3,
    },
    {
      id: 4,
      title: "Continuous Supervision",
      description:
        "A project manager will be involved  in the entire lifecycle of your project to plan, organize, control, and deploy key deliverables according to your desired milestones, including process improvement analysis and implementation.",
      imageSrc: image4,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full service-bg p-5 md:p-0">
      <div className="text-center">
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] font-black text-black  text-center  mx-auto lg:mx-0">
          What We Offer
        </h1>
        <p className="text-text text-sm md:text-base xl:text-lg mx-auto my-4 md:my-6 xl:my-8 px-4 md:px-10 lg:px-20 w-full md:w-3/4 lg:w-1/2 ">
          Dev works as an extension of your development and testing team. We
          will work together to solve your business cases and get the maximum
          value of your budget.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 lg:gap-20 justify-center items-center md:p-5 p-5">
        {offerlist.map((item, index) => (
          <Offercard
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}
