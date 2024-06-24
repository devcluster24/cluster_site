import Image from "next/image";

export default function Offercard({ imageSrc, title, description }) {
  return (
    <div className="md:w-[450px] md:h-[510px] ">
      <div className="h-[350px]">
        <Image width="auto" height="auto" alt="ok" src={imageSrc}></Image>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        <p className="text-text pt-3 font-medium text-justify">{description}</p>
      </div>
    </div>
  );
}
