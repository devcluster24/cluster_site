"use client";
import Loading from "@/app/(withDashboardLayout)/loading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Initially true

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_API}/products/${id}`
        );
        setProduct(response?.data?.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Ensure loading is false after API call
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 bg-white pb-10">
        <div className="flex justify-center items-center">
          <h1>Product not found.</h1>
        </div>
      </div>
    );
  }
  const { title, banner, liveLink, description } = product;

  return (
    <>
      <div className="pt-20 bg-white">
        <div>
          <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
            Product Details
          </h2>
        </div>

        {product ? (
          <div className="Container mx-auto px-4 bg-white pb-10">
            <div className="lg:flex gap-20 lg:pt-20  lg:px-0">
              <div className="lg:w-2/5">
                <h2 className="lg:text-[30px] md:text-[24px] text-[20px] text-[#202647] font-bold pb-5 pt-5 lg:pt-0">
                  {title}
                </h2>
                <p className="text-[#6a6c72] text-justify text-sm">
                  {description}
                </p>
              </div>
              <div className="lg:w-3/5 mt-10 lg:mt-0 flex justify-center items-center">
                <Image src={banner} alt="Hero Image" width={600} height={600} />
              </div>
            </div>
            <div className="py-20 max-w-2xl mx-auto">
              <div className="flex gap-10 justify-between items-center">
                <h2 className="text-black md:text-3xl text-xl font-bold text-center py-5">
                  For More Information
                </h2>
                <Link href="/quote" className="w-[40%]">
                  <button className="px-5 py-2 text-[15px] font-medium bg-primary text-[#fff]  hover:bg-transparent border border-primary rounded-lg  hover:text-primary transition duration-500 ease-in-out w-full">
                    GET QUOTE
                  </button>
                </Link>
              </div>
              <div className="flex gap-10 justify-between items-center">
                <h2 className="text-black md:text-3xl text-xl font-bold text-center py-5">
                  View Demo Website
                </h2>
                <Link
                  href={liveLink || "#"}
                  target="_blank"
                  className="w-[40%]"
                >
                  <button className="px-5 py-2 text-[15px] font-medium bg-primary text-[#fff]  hover:bg-transparent border border-primary rounded-lg  hover:text-primary transition duration-500 ease-in-out w-full">
                    DEMO WEBSITE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 bg-white pb-10">
            <div className="flex justify-center items-center">
              <h1>Product not found.</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
