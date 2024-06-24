"use client";
import Link from "next/link";
import { useState } from "react";
import { LuMoveDownRight, LuMoveUpRight } from "react-icons/lu";
import dental from "../../../public/project/Dental.png";
import travel from "../../../public/project/Freedom-travel.png";
import kg from "../../../public/project/Kavg-home.png";
import watch from "../../../public/project/Watch-Box.png";
import demand from "../../../public/project/demand.png";
import ProjectCard from "./ProjectCard/page";
const projectlist = [
  {
    id: 1,
    title: "Deamnd Engineering",
    description: "lorrem",
    imageUrl: demand,
  },
  {
    id: 2,
    title: "Kavgj Social Service",
    description: "lorrem",
    imageUrl: kg,
  },
  {
    id: 3,
    title: "FreeDom Travel",
    description: "lorrem",
    imageUrl: travel,
  },
  {
    id: 4,
    title: "Dental Point",
    description: "lorrem",
    imageUrl: dental,
  },
  {
    id: 5,
    title: "Watch-Box",
    description: "lorrem",
    imageUrl: watch,
  },
];
export default function Portfolio() {
  const showMore = () => {
    setVisibleProjects(projectlist.length);
  };

  const showLess = () => {
    setVisibleProjects(initialProjectsToShow);
  };

  const initialProjectsToShow = 3;
  const [visibleProjects, setVisibleProjects] = useState(initialProjectsToShow);

  return (
    <div
      id="Portfolio"
      className="flex justify-center items-center mt-10 service-bg w-full"
    >
      <div>
        <h1 className="2xl:text-[56px] xl:text-[42px] lg:text-[38px] md:text-[36px] sm:text-[28px] text-[28px] text-black font-black md:mt-10  text-center  mx-auto lg:mx-0">
          Our Portfolio
        </h1>
        <p className=" text-[14px] md:text-[16px] 2xl:text-lg  mx-auto lg:mx-0 text-center text-text mb-8 xl:mb-5">
          We are making this with best technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-10 gap-5 m-5 ">
          {projectlist.slice(0, visibleProjects).map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        <div className="flex justify-center mt-5 pb-10">
          {visibleProjects < projectlist.length && (
            <button
              onClick={showMore}
              className="border transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-2 flex items-center gap-1 rounded-full"
            >
              <div className="flex items-center gap-2 font-bold">
                Show More <LuMoveDownRight />
              </div>{" "}
            </button>
          )}
          {visibleProjects > initialProjectsToShow && (
            <button
              onClick={showLess}
              className="border transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-5 py-2 flex items-center gap-1 rounded-full"
            >
              <Link
                href="#Portfolio"
                className="flex items-center gap-2 font-bold"
              >
                Show Less <LuMoveUpRight />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
