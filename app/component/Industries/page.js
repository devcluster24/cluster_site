import IndusSlider from "./Slider/page";

export default function Industries() {
  return (
    <div
      id="industry"
      className="grid grid-cols-1 md:grid-cols-5 md:gap-10 p-5 justify-center items-center"
    >
      <div className="md:col-span-2">
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0">
          Lead Indsutries
        </h1>
        <p className="text-gray-600 text-sm md:text-base xl:text-lg mx-auto text-text text-pretty  p-5">
          We cover a variety of industries, including Ecommerce, EdTech,
          FinTech, Food and Beverages, HealthTech, Logistics and Transportation,
          On-demand services, Real Estate, Social Networking, and Sports and
          Fitness.
        </p>
      </div>
      <div className=" md:col-span-3 p-5 ml-2 md:ml-0 ">
        <IndusSlider />
      </div>
    </div>
  );
}
