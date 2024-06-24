import Link from "next/link";

export default function ServiceCard({
  title,
  description,
  icon,
  address,

  bgColor,
  textColor,
}) {
  return (
    <div>
      <div className="bg-[#ffff] cardContainer p-5 flex flex-col justify-center items-center space-y-2  mb-10  border  rounded-lg shadow-md h-[250px] border-gray">
        <div
          className={`text-3xl ${bgColor} ${textColor} p-4 rounded-full text-[#FFF] shadow-2xl  `}
        >
          {icon}
        </div>
        <Link
          href={address}
          className="text-[18px] text-black hover:text-primary  font-bold"
        >
          {title}
        </Link>
        <p className="text-center text-text text-sm pb-2">{description}</p>
      </div>
    </div>
  );
}
