import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  title,
  description,
  image,
  address,
  bgColor,
  textColor,
}) {
  return (
    <div className="bg-[#ffff] product_card  p-5 flex flex-col justify-center items-center lg:space-y-2  border rounded-lg shadow-md group   lg:w-[330px] h-[250px]  ">
      <div
        className={`text-3xl ${bgColor} ${textColor} p-4 mb-4  rounded-full  shadow-2xl group-hover:text-primary`}
      >
        <Link href={address}>
          <Image width={100} height={100} src={image} alt="image" />
        </Link>
      </div>
      <p className="text-center w-[85%] leading-6 text-[#4F5B6D] text-sm pb-2  font-normal">
        {description}
      </p>
      {/* learn more button  */}
      <Link
        href={address}
        className="text-[16px] text-[#7270f7]  font-normal hover:text-[#008bcc] "
      >
        Learn More
        <span className="text-[#7270f7] ml-3  font-normal hover:text-[#008bcc]">
          →
        </span>
      </Link>
    </div>
  );
}
