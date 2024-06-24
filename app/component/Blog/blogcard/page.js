import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";

export default function Blogcard({ data }) {
  if (!data || !data.description) {
    // Handle the case where data or data.description is not available
    return <div>Loading...</div>; // or any other fallback UI
  }

  // Function to limit the description to a certain number of words
  const truncateDescription = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  // Truncate the description to 30 words
  const truncatedDescription = truncateDescription(data.description, 25);

  return (
    <div className="shadow-sm hover:shadow-xl  hover:-translate-y-3 duration-300 ease-in-out w-[320px] h-[460px] border border-gray overflow-hidden  rounded-md mb-10">
      <div className="relative w-full h-[50%]">
        <Image src={data.img} alt="blogImage" fill objectFit="cover" />
      </div>
      <div className="p-2 px-5">
        <h1 className="font-semibold text-xl text-primary">{data.title}</h1>
        <p className="text-text  text-sm text-justify">
          {truncatedDescription}
        </p>
        <button className="border transition ease-in-out   hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-2 flex items-center gap-1  mt-3">
          Read More <FaHandPointRight />
        </button>
      </div>
    </div>
  );
}
