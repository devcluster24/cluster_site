import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import bgimage from "../../../public/foo-abstrack.png";
import footerLogo from "/public/l.png";
export default function Footer() {
  return (
    <>
      {/* Abstract Image Section */}
      <div className=" bg-background">
        <Image src={bgimage} alt="Abstract" />
      </div>

      {/* Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center bg-[#241f21] h-auto py-10 px-5 md:px-10 md:gap-10">
        <div className="footer-about mb-8 pl-10 pt-10">
          <div className=" md:mr-0 mr-5">
            <Image
              alt="footer logo "
              quality={100}
              width={400}
              src={footerLogo}
            ></Image>
          </div>

          <p className="text-gray text-xl mt-2">
            Dev Cluster, pioneering innovation since 2024. We craft cutting-edge
            software solutions to elevate your digital experience. Empowering
            businesses through technology excellence. Your success, our code.
          </p>
        </div>
        <div className="footer-quickLinks mb-8 p-10 md:ml-20">
          <h4 className="text-primary text-2xl font-bold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-gray text-xl ">
            {/* List items here */}
            <li className="hover:-translate-y-1 duration-200 ease-in-out ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:-translate-y-1 duration-200 ease-in-out ">
              {" "}
              <Link href="/#blogs">Blogs</Link>
            </li>
            <li className="hover:-translate-y-1 duration-200 ease-in-out ">
              {" "}
              <Link href="/#service">Service</Link>
            </li>
            <li className="hover:-translate-y-1 duration-200 ease-in-out ">
              {" "}
              <Link href="/#industry">Industry</Link>
            </li>
            <li className="hover:-translate-y-1 duration-200 ease-in-out ">
              {" "}
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contactLinks p-10">
          <h4 className="text-primary text-2xl font-bold mb-5">
            Contact Links
          </h4>
          <div className="space-y-5 text-gray text-xl">
            <p>
              Follow us on LinkedIn for updates and insights. Let is shape the
              future together
            </p>
            <p>+880 01934-559622</p>
            <p>info@dev-cluster.com</p>
            <div>
              <h5 className="text-xl font-bold text-primary mb-5">Follow Us</h5>
              <div className="flex gap-5 text-[#000]">
                <div className="bg-[#316FF6] p-3 rounded-full hover:scale-125  duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#316FF6]">
                  <Link href="#">
                    <FaFacebookF />
                  </Link>
                </div>
                <div className="bg-[#dd399e] p-3 rounded-full hover:scale-125  duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#dd399e]">
                  <Link href="#">
                    <AiFillInstagram />
                  </Link>
                </div>
                <div className="bg-[#1DA1F2] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1DA1F2]">
                  <Link href="#">
                    <FaXTwitter />
                  </Link>
                </div>
                <div className="bg-[#0077b5] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0077b5]">
                  <Link href="#">
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className="bg-[#30b166] p-3 rounded-full hover:scale-125 duration-150 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#30b166]">
                  <Link href="#">
                    <IoLogoWhatsapp />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
