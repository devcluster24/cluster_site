import Image from "next/image";

export default function IndCard({ imageSrc, title }) {
  return (
    <div className="relative w-[280px] h-[400px] overflow-hidden  hover:scale-110 transition-transform duration-300 ease-in-out">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="s" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 z-10  ">
        <p className="bg-primary text-[#fff] font-bold  text-2xl text-center mt-[300px]">
          {title}
        </p>
      </div>
    </div>
  );
}
