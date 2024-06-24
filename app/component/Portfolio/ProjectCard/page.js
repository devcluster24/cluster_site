import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";

// components/ProjectCard.js
export default function ProjectCard({ title, description, imageUrl }) {
  return (
    <div className="max-w-lg rounded overflow-hidden  m-4 hover:shadow-xl ease-in duration-100 border border-gray shadow-md">
      <div className="relative border border-gray h-[300px] w-[500px] overflow-hidden  hover:scale-110 ease-in-out duration-500 rounded hover:border-none ">
        <Image
          src={imageUrl}
          alt={title}
          fill // This makes the image fill the container
          objectFit="cover" // This makes the image cover the area
          objectPosition="center" // This positions the image at the center
        />
      </div>
      <div className="py-10 px-5 flex flex-col items-center  justify-center">
        <div className="font-bold text-xl text-black mb-2">{title}</div>

        <button className="border transition ease-in-out   hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-2 flex items-center gap-1  mt-2">
          Details <FaHandPointRight />
        </button>
      </div>
    </div>
  );
}
