import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";
export default function ServiceCard({
  title,
  description,
  buttonText,
  icon,
  address,
  style,
}) {
  return (
    <div>
      <div className="bg-[#ffff] cardContainer p-5 flex flex-col justify-center items-center space-y-2  mb-10  border  rounded-lg shadow-md     h-[300px] border-gray">
        <div className="text-3xl bg-primary p-5 rounded-full text-[#FFF] shadow-2xl shadow-primary ">
          {icon}
        </div>
        <h1 className="text-[18px] text-black  font-bold">{title}</h1>
        <p className="text-center text-text text-sm pb-2">{description}</p>
        {address ? (
          <button className="border transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-1 flex items-center gap-1 rounded-full ">
            <Link className="flex items-center gap-2" href={address}>
              {buttonText} <FaHandPointRight />
            </Link>
          </button>
        ) : (
          <button className="border transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-1 flex items-center gap-1 rounded-full ">
            {buttonText} <FaHandPointRight />
          </button>
        )}
      </div>
    </div>
  );
}
