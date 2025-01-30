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
    <Link href={address}>
      <div className="bg-[#ffff] cardContainer p-5 flex flex-col justify-center items-center lg:space-y-2 mb-10 border rounded-lg shadow-md border-gray group   lg:w-[330px] h-[250px]  ">
        <div
          className={`text-3xl ${bgColor} ${textColor} p-4 mb-2 lg:mb-0 rounded-full  shadow-2xl group-hover:text-primary`}
        >
          {icon}
        </div>
        <div className="text-[18px] text-black   font-bold group-hover:text-[#fff] ">
          {title}
        </div>
        <p className="text-center text-[#6a6c72] text-sm pb-2 group-hover:text-[#fff]  font-semibold">
          {description}
        </p>
      </div>
    </Link>
  );
}
