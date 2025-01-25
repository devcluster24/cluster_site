import Link from "next/link";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { links } from "./MyLinks";

const NavLinks = ({ onClick }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          {" "}
          {/* Updated key to use id */}
          <div className="px-3 md:py-7 text-left md:cursor-pointer group text-gray-800">
            <h1
              className="md:px-3 py-2 duration-200 ease-in-out rounded-md flex items-center md:pr-0 pr-5 group md:hover:bg-[#EFF4F4] hover:text-primary hover:cursor-pointer"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-sm pt-1 md:hidden inline">
                {heading === link.name ? <MdExpandLess /> : <MdExpandMore />}
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 duration-200 group-hover:-mt-2 mr-1">
                <MdExpandMore />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div
                  className={`absolute ${
                    link.name === "Industries"
                      ? "-translate-x-[200px] "
                      : "-translate-x-[200px] "
                  } top-20 hidden group-hover:md:block hover:md:block bg-transparent`}
                >
                  <div className="translate-y-4">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-primary rotate-45"></div>
                  </div>
                  <div
                    className={`bg-indigo-200 p-5 grid grid-cols-3 gap-8 border border-gray shadow-2xl rounded-md mt-7 bg-background ${
                      link.name === "Industries" ? "w-[600px]" : "w-[780px]"
                    }`}
                  >
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head} className="">
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.id}
                            className="font-[400] font-sans text-gray-800 my-2.5 p-3 hover:p-3 hover:bg-[#EFF4F4] hover:text-primary rounded-md"
                          >
                            <Link href={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`${
              heading === link.name ? "block" : "hidden"
            } md:hidden`}
          >
            {/* Directly rendered sublinks */}
            {link.sublinks.flatMap((slinks) =>
              slinks.sublink.map((slink, index) => (
                <li
                  key={slink.id}
                  className="py-3 pl-2 text-xs pr-5 ml-3 border-b border-primary divide-y hover:text-primary"
                >
                  <Link href={slink.link} onClick={onClick}>
                    {slink.name}
                  </Link>
                </li>
              ))
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
