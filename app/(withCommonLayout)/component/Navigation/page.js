"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from "../../../../public/logoHeader.png";
import PrimaryBtn from "../PrimaryBtn/page";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMobileNav = () => {
    setOpen(false);
  };

  return (
    <nav className="bg-[#fff] shadow-md text-black fixed top-0 z-[1000] w-full">
      <div className="flex items-center font-medium justify-around relative  mx-auto text-[15px]">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href="/">
            <div className="flex justify-center items-center gap-2">
              <Image width={50} height={100} src={logo} alt="logo" />
              <h1 className="text-2xl font-bold text-[#202647]">DevCluster</h1>
            </div>
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <MdClose /> : <MdMenu />}
          </div>
        </div>
        <ul className="md:flex hidden items-center gap-3">
          <li key="home">
            <Link
              href="/"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li key="about-us">
            <Link
              href="/aboutus"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              About Us
            </Link>
          </li>
          <li key="products">
            <Link
              href="/products"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              Products
            </Link>
          </li>
          <li key="services">
            <Link
              href="/services"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              Services
            </Link>
          </li>
          <li key="cluster-pos">
            <Link
              href="/cluster-pos"
              className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
            >
              ClusterPOS
            </Link>
          </li>
          <li key="contact">
            <Link href="/contact">
              <PrimaryBtn label="Contact" />
            </Link>
          </li>
        </ul>

        {/* Mobile nav */}
        <ul
          className={`md:hidden bg-[#ffffff] fixed w-full top-[80px] overflow-y-scroll bottom-0 px-10 pl-4 duration-500 ${
            open ? "left-0" : "left-[100%]"
          }`}
        >
          <div className="text-sm">
            <li key="home-mobile">
              <Link
                href="/"
                className="py-2 mt-8 px-3 inline-block"
                onClick={closeMobileNav}
              >
                Home
              </Link>
            </li>
            <li key="about-us-mobile">
              <Link
                href="/aboutUs"
                className="py-2 px-3 inline-block"
                onClick={closeMobileNav}
              >
                About Us
              </Link>
            </li>
            <li key="products-mobile">
              <Link
                href="/products"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                Products
              </Link>
            </li>
            <li key="services-mobile">
              <Link
                href="/services"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                Services
              </Link>
            </li>
            <li key="cluster-pos-mobile">
              <Link
                href="/cluster-pos"
                className="px-3 py-2 duration-200 ease-in-out rounded-md inline-block hover:bg-[#EFF4F4] hover:text-primary"
                onClick={closeMobileNav}
              >
                ClusterPOS
              </Link>
            </li>
            <li className="mt-2 ml-2" key="contact-mobile">
              <Link
                className="px-3 py-1 text-[14px] font-medium bg-primary text-[#fff]  hover:bg-transparent border border-primary rounded-2xl hover:text-primary transition duration-500 ease-in-out "
                href="/contact"
                onClick={closeMobileNav}
              >
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
