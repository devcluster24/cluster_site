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
    <div className="bg-[#ffff] cardContainer p-5 flex flex-col justify-center items-center space-y-2 mb-10 border rounded-lg shadow-md border-gray group   w-[330px] h-[250px]  ">
      <div
        className={`text-3xl ${bgColor} ${textColor} p-4 rounded-full text-white shadow-2xl group-hover:text-primary`}
      >
        {icon}
      </div>
      <Link
        href={address}
        className="text-[18px] text-black   font-bold group-hover:text-[#fff] font-mono"
      >
        {title}
      </Link>
      <p className="text-center text-text text-sm pb-2 group-hover:text-[#fff] font-sans font-semibold">
        {description}
      </p>
    </div>
  );
}
