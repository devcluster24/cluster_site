import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContactLeadForm from "../component/GetInTouch/contact-lead-form";
export default function page() {
  return (
    <div className="pt-20  bg-[#f6f5fb]">
      <div>
        <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
          Contact Us
        </h2>
      </div>
      <div className="Container ">
        <div className="lg:flex gap-10 ">
          <div className="lg:w-[350px] lg:h-[180px] flex items-center gap-5 border border-border p-10 rounded-md shadow-lg mt-10 group">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white  group-hover:border-primary">
              <span>
                <FaPhone />
              </span>
            </div>
            <div className="text-text text-sm space-y-2">
              <h1 className="font-bold text-[#000] text-xl">Phone / Fax</h1>
              <p>+880 1753 105250</p>
            </div>
          </div>
          <div className="lg:w-[350px] lg:h-[180px] flex items-center gap-5 border border-border p-10 rounded-md shadow-lg mt-10 group">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white  group-hover:border-primary">
              <span>
                <MdEmail />
              </span>
            </div>
            <div className="text-text text-sm space-y-2">
              <h1 className="font-bold text-[#000] text-xl">E-mail</h1>
              <p>info@dev-cluster.com</p>
              <p>carrer@dev-cluster.com</p>
            </div>
          </div>
          <div className="lg:w-[350px] lg:h-[180px] flex gap-5 border items-center border-border p-10 rounded-md shadow-lg mt-10 group">
            <div className="text-2xl text-[#28406d] border border-dashed border-[#28406d] rounded-full p-3 group-hover:bg-primary group-hover:text-white  group-hover:border-primary">
              <span>
                <FaLocationDot />
              </span>
            </div>
            <div className="text-text text-sm space-y-2">
              <h1 className="font-bold text-[#000] text-xl">Location</h1>
              <p>House 93, Indira Road , Farmget, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="w-full p-5 pt-20 flex justify-center items-center">
          <ContactLeadForm />
        </div>
      </div>
    </div>
  );
}
