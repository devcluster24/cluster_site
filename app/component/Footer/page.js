import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdGpsFixed } from "react-icons/md";
import logo from "/public/lok.png";
export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center bg-[#142544] h-auto py-10 px-5 md:px-10 md:gap-5 ">
        <div className="footer-about mb-8  pt-10  lg:space-y-5 Container">
          <div>
            <a href="/">
              <div className="flex  items-center gap-2">
                <Image width={50} height={100} src={logo} alt="logo" />
                <h1 className="text-2xl font-bold text-[#ffff]">DevCluster</h1>
              </div>
            </a>
          </div>

          <p className="text-gray text-sm mt-2 ">
            At Dev Cluster, we are dedicated to crafting cutting-edge software
            solutions that redefine digital experiences. Our commitment to
            technology excellence empowers businesses to thrive in a rapidly
            evolving landscape.
          </p>
          <div>
            <h5 className="text-[20px] font-bold text-[#ffff] mb-3 mt-3">
              Follow Us
            </h5>
            <div className="flex gap-5 ">
              <div className="bg-[#f1f2f5] p-3 rounded-full hover:scale-125  duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#316FF6] text-[#3033da]">
                <Link href="#">
                  <FaFacebookF />
                </Link>
              </div>
              <div className="bg-white text-[#dd399e] p-3 rounded-full hover:scale-125  duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dd399e]">
                <Link href="#">
                  <AiFillInstagram />
                </Link>
              </div>
              <div className="bg-white text-[#1DA1F2] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1DA1F2]">
                <Link href="#">
                  <FaXTwitter />
                </Link>
              </div>
              <div className="bg-white text-[#0077b5] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0077b5]">
                <Link href="#">
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="bg-white text-[#30b166] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#30b166]">
                <Link href="#">
                  <IoLogoWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-quickLinks mb-8 pt-10 lg:ml-10 lg:flex gap-10">
          <div className="px-4 lg:px-0   mb-10 lg:mb-0">
            <h4 className="text-[#ffff] text-[20px] font-bold mb-5">
              Featured Service
            </h4>
            <ul className="space-y-3 text-[#ffff] text-[14px] ">
              {/* List items here */}
              <li>
                <Link
                  className=" duration-300 ease-in-out hover:text-primary"
                  href="/"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#blogs"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  Web Development
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="duration-300 ease-in-out hover:text-primary"
                  href="/#service"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#industry"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  Software Development
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#contact"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  Software Testing And QA
                </Link>
              </li>
            </ul>
          </div>
          <div className="px-4 lg:px-0  lg:mb-0 lg:ml-5">
            <h4 className="text-[#ffff] text-[20px] font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[#ffff] text-[14px] ">
              {/* List items here */}
              <li>
                <Link
                  className=" duration-300 ease-in-out hover:text-primary"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#blogs"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className="duration-300 ease-in-out hover:text-primary"
                  href="/#service"
                >
                  Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#industry"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  ClusterPOS
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="/#contact"
                  className="duration-300 ease-in-out hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-contactLinks px-4 lg:px-0 lg:pt-10 lg:ml-5">
          <h4 className="text-[#ffff] text-[20px] font-bold mb-5">Contact</h4>
          <div className="space-y-5 text-g text-sm text-[#ffff]">
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <FaPhoneAlt />
              </span>
              +880 01934-559622
            </p>
            <p className="flex items-center gap-2">
              {" "}
              <span>
                <MdEmail />
              </span>
              info@dev-cluster.com
            </p>

            <p className="flex items-center gap-2">
              {" "}
              <span>
                <MdGpsFixed />
              </span>
              House 93, Indira Road , Farmget, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#01082D] lg:flex justify-center items-center  lg:justify-between p-10 px-16 text-center space-y-2 lg:space-y-0">
        <div>
          <p className=" text-[10px] lg:text-sm font-semibold font-sans text-[#ffff]">
            © 2024 DevCluster. All Rights Reserved
          </p>
        </div>

        <div>
          {" "}
          <p className="text-[10px] lg:text-sm font-semibold font-sans text-[#ffff]">
            Privacy Policy Terms and Conditions
          </p>
        </div>
      </div>
    </>
  );
}
