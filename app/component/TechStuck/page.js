import Industries from "../Industries/page";
import Techlogies from "../Technologies/page";

export default function TechStuck() {
  return (
    <div className="tech-stuck-bg max-h-full max-w-full ">
      <Techlogies />
      <div className="2xl:max-w-[1420px] xl:max-w-6xl lg:max-w-4xl sm:max-w-xl md:max-w-2xl max-w-[390px] mx-auto flex flex-col md:flex lg:flex-row items-center justify-between mt-[49px] lg:mt-[56px] xl:mt-[120px]">
        <Industries />
      </div>
    </div>
  );
}
