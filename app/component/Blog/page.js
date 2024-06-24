import art1 from "../../../public/articles1.jpeg";
import art2 from "../../../public/articles2.jpeg";
import art3 from "../../../public/articles3.jpeg";
import Blogcard from "./blogcard/page";

const blog = [
  {
    id: 1,
    title: "Social Media",
    description:
      "In today's fast-paced digital era, social media has become the heartbeat of global communication. From Facebook and Instagram to Twitter and LinkedIn, these platforms have transformed the way we connect, share, and consume information. While social media opens doors to unprecedented connectivity, it also raises critical questions about its impact on society.",
    img: art1,
  },
  {
    id: 2,
    title: "Ai In Business",
    description:
      "Artificial Intelligence (AI) is revolutionizing the business landscape, reshaping the way organizations operate and make decisions. From streamlining processes to uncovering insights, AI is proving to be a game-changer in various industries.",
    img: art2,
  },
  {
    id: 3,
    title: "The Essential Need for a Business Website",
    description:
      "In the digital age, having a website is not just an option for businesses, but a necessity. Websites serve as the digital storefront for any organization, offering a multitude of benefits that are crucial for success in the current market landscape.",
    img: art3,
  },
];

export default function Blog() {
  return (
    <div id="blogs" className="flex justify-center items-center mt-10  w-full">
      <div>
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black  text-center  mx-auto lg:mx-0 md:mt-10">
          Recent Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mt-10 md:gap-10  m-5">
          {blog.map((data) => (
            <Blogcard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
