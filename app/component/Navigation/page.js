"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../../public/l.png";
import PrimaryBtn from "../PrimaryBtn/page";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMobileNav = () => {
    setOpen(false);
  };
  return (
    <nav className="bg-[#fff] shadow-md text-black  fixed top-0 z-[1000]  w-full">
      <div className="flex items-center font-medium justify-around relative container mx-auto text-[15px]">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Image width={200} height={100} src={logo} alt="logo" />

          <div className="text-3xl  md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MdClose /> : <MdMenu />}
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-6 ">
          <li>
            <Link
              href="/"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              href="/AboutUs"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              About Us
            </Link>
          </li>

          <li>
            {" "}
            <Link
              href="/"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/ClusterPOS"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              ClusterPOS
            </Link>
          </li>

          <li>
            <Link href="#contact">
              <PrimaryBtn label=" Connects" />
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-[#ffffff]  fixed w-[100%] top-[80px] overflow-y-scroll bottom-0 px-10 pl-4 
        duration-500 ${open ? "left-[10px]" : "left-[100%] "}
        `}
        >
          <div className=" text-sm ">
            <li className="">
              <Link
                href="/"
                className="py-2 mt-8 px-3 inline-block"
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="/about"
                className="py-2 px-3 inline-block"
                onClick={closeMobileNav}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                ClusterPOS
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                Clients
              </Link>
            </li>

            <li>
              {" "}
              <Link
                href="#contact"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                Career
              </Link>
            </li>

            <li>
              <li>
                <Link href="#contact" onClick={closeMobileNav}>
                  <PrimaryBtn label=" Connects" />
                </Link>
              </li>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
