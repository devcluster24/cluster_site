import Image from "next/image";
import {
  BiSolidBookReader,
  BiSolidMobileVibration,
  BiSolidPurchaseTag,
} from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaFilter, FaStore } from "react-icons/fa";
import { FaChalkboardUser, FaComputer, FaUsersRays } from "react-icons/fa6";
import {
  GiChemicalDrop,
  GiClothes,
  GiJewelCrown,
  GiRunningShoe,
  GiWallet,
} from "react-icons/gi";
import { GrMultiple } from "react-icons/gr";
import { HiShoppingBag } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import {
  MdBarcodeReader,
  MdHardware,
  MdInventory,
  MdOutlineAccountBalance,
  MdOutlineChair,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { SiSellfy } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import image from "../../public/Clusterpos/cluster pos.png";
const ClusterPOS = () => {
  return (
    <div className="pt-20 bg-white">
      <div>
        <div className="bg-[#ff5400]  lg:py-16 md:py-10 py-4 px-[10%] flex items-center justify-center">
          <div className=" Container">
            <h1 className="lg:text-[38px] md:text-[30px]  text-white font-bold">
              ClusterPOS
            </h1>
            <div className="pt-3">
              <a
                className="font-bold bg-[#f1eff8] text-[#202647] text-xs lg:text-xl lg:px-10 md:px-10 px-4 lg:py-2 md:py-2 py-1 rounded-md"
                href="/QUOTE"
              >
                GET QUOTE
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <h2 className="lg:pt-12 md:pt-12 pt-5 text-sm lg:text-[20px] italic font-bold text-white ">
              Cluster pos Erp System
            </h2>
          </div>
        </div>
        <div className="Container">
          <div className="lg:flex gap-20 lg:pt-20 px-5 lg:px-0">
            <div className="lg:w-2/5">
              <h2 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
                Introduction ClusterPOS
              </h2>
              <p className="text-[#6a6c72] text-justify text-sm">
                ClusterPOS is an advanced POS software tailored for diverse
                retail and wholesale businesses, including electronics stores,
                gadget shops, computer stores, mobile shops, supershops,
                furniture stores, clothing/fashion/RMG stores, shoes/footwear
                stores, jewelry shops, chemical stores, hardware stores, and
                library/book shops. <br /> <br />
                POS stands for “Point of sales”. A Point of Sales (POS) systems
                basically handle any combination of checkout, inventory control
                (Stock), customer management (CRM), Employee Management,
                Purchase & Bill and Invoice Management. Our EverPOS system will
                help you automate the point of sales, improve inventory tracking
                and enable more effective management of customer data to grow
                profits and decrease store inefficiencies. <br /> <br />
                Our Point of Sales software, ClusterPOS, automates specific
                activities within the requested modules, facilitating the
                seamless flow of information between various business functions.
                By implementing ClusterPOS, you can effectively monitor and
                analyze daily activities, enhancing overall operational
                efficiency.
              </p>
            </div>
            <div className="lg:w-3/5 mt-10 lg:mt-0">
              <Image src={image} alt="Hero Image"></Image>
            </div>
          </div>

          <div className="pt-16 lg:px-0 px-5">
            <div className="lg:flex md:flex justify-between">
              <div>
                <h2 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
                  Core Features
                </h2>
              </div>
              <div className="lg:mt-0 md:mt-4 hidden lg:inline">
                <a
                  className="font-bold bg-[#ff5400] text-white lg:px-8 md:px-4 px-2 lg:py-4 md:py-3 py-2 rounded-md "
                  href=""
                >
                  View All Features
                </a>
              </div>
            </div>
            <div>
              <div>
                <div className="pt-4 pb-6 grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3">
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <GrMultiple />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Multiple Business
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <FaChalkboardUser />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      User Management
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <MdProductionQuantityLimits />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-sm text-center text-text pb-3 mb-3">
                      Products
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <FaUsersRays />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Supplier
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <MdBarcodeReader />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Barcodes
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <BiSolidPurchaseTag />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-text pb-3 mb-3 text-sm">
                      Purchases
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <SiSellfy />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-text text-sm pb-3 mb-3">
                      Sell
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <MdInventory />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-sm text-center text-text pb-3 mb-3">
                      Inventory
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <GiWallet />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Stock
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <MdOutlineAccountBalance />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Finance & Accounts
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <TbReportSearch />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Report
                    </h4>
                  </div>
                  {/* small card */}
                  <div className="border border-border rounded-md hover:shadow-md">
                    <div className=" mx-2 my-4">
                      <div className="flex justify-center text-5xl text-[#ff5400]">
                        <FaFilter />
                      </div>
                    </div>
                    <h4 className="lg:font-medium text-center text-sm text-text pb-3 mb-3">
                      Filter & Search
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-0 px-5 pt-10 lg:pb-20">
            <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
              Benefits of a POS Software
            </h1>
            <p className="text-[#6a6c72] text-justify text-sm lg:w-[80%]">
              While a robust POS system can help a business owner manage sales
              and inventory, it can also enhance their business intelligence and
              marketing capabilities.
            </p>
            <div className="pt-3 grid gap-1 lg:grid-cols-3 lg:grid-rows-10">
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Increase store profitability
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Reduce administrative costs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage inventory
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Improve your business intelligence
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Boost your marketing and loyalty features
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Fast checkout</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Enhanced data security
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Expanded payment acceptance
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Better Inventory Management
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Simple Invoicing
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Quick Payments</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Customer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Customer Orders
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Purchasing / Supplier Order
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Customer Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Customer Satisfaction & Loyalty
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Security</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Employee Management
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Manage Promotion/Discount
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Manage Service</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    24/7 Access to Data
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Simplification of Operations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Personalization of Customer Purchases
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Increased Efficiency
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Time-Saving</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Cost Reduction</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Increased Revenues
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Advanced Reports
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Multi-Store Functions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-0 px-5 pt-10 lg:pb-10">
            <h1 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
              Why Choose “ClusterPOS” for your Business?
            </h1>
            <p className="text-[#6a6c72] text-justify text-sm lg:w-[80%]">
              Implementing technical support for your business through
              ClusterPOS is no longer a luxury but a necessity. ClusterPOS
              allows authorities and staff to focus on strategic tasks rather
              than mundane ones, facilitating better management and advancement
              of the business. <br />
              ClusterPOS is a one-time investment that ensures smooth operation
              and management in your business sector, boasting a track record of
              100% success in implementation. Here are a few factors that make
              ClusterPOS the best in the industry:
            </p>
            <div className="pt-3 lg:text-lg">
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm ">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Cost-efficient and Highest ROI
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    Quantitative as well as Qualitative Data Provided
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">
                    End-to-end Solution
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="text-[#ff5400] lg:text-lg text-sm">
                  <BsCheckCircleFill />
                </div>
                <div>
                  <p className="text-text lg:text-lg text-sm">Remote Access</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="pt-16 lg:px-0 px-5">
              <div>
                <h2 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
                  Industry We Cover
                </h2>
              </div>
              <div className="pb-20 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <FaStore />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Electronics store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <IoGameController />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Gadgets shop
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <FaComputer />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Computers store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <BiSolidMobileVibration />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Mobile shop
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <HiShoppingBag />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Supershop
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <MdOutlineChair />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Furniture store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <GiClothes />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Clothing/Fashion
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <GiRunningShoe />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Shoes/Footwear store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <GiJewelCrown />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Jewelry shop
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <GiChemicalDrop />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Chemical store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <MdHardware />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Hardware store
                  </h4>
                </div>
                <div className="border border-border rounded-md hover:shadow-md">
                  <div className="py-3 mx-12 my-2">
                    <div className="flex justify-center text-5xl text-[#ff5400]">
                      <BiSolidBookReader />
                    </div>
                  </div>
                  <h4 className="lg:font-medium text-sm text-center pb-3 text-text">
                    Library/Book shop
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f0fffc] w-full lg:flex gap-10 items-center justify-center py-10 lg:py-20">
          <h1 className="text-[#202647] font-semibold font-sans text-center lg:text-[30px]">
            Have an Exciting Project in Mind? Let&apos;s Discuss!
          </h1>
          <div className="text-center  py-3">
            <a
              className="text-primary font-sans font-medium text-sm lg:text-[20px]  border border-primary text-center px-6 py-1 rounded-md"
              href="/Quote"
            >
              START PROJECT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClusterPOS;
