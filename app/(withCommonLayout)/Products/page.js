"use client";
import axios from "axios";
import ProductCard from "../component/Products/ProductCard";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/products`
      );
      console.log(response?.data?.data?.result);
      setProducts(response?.data?.data?.result);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="pt-20">
        <div>
          <div>
            <h2 className="text-white lg:text-4xl font-bold text-center py-5 lg:py-16 bg-[#ff5400]">
              Products
            </h2>
          </div>
          <div id="products" className="  sm:px-6 md:px-10 bg-[#f6f5fb] w-full">
            <div className="Container  mx-auto flex flex-col justify-center items-center space-y-2 ">
              <h1 className=" font-semibold text-primary lg:text-xl  mt-5 lg:pt-16 pt-5">
                Products
              </h1>
              <p className="text-[#202647] font-bold text-sm md:text-base lg:text-[30px] mx-auto text-center  xl:mb-12">
                Our latest Products
              </p>
              <div className="grid  mx-auto grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-5 md:gap-8  pt-10 lg:pb-14 pb-10 justify-center items-center">
                {products?.map((item) => (
                  <ProductCard
                    key={item?.id || item?.title || Math.random()}
                    address={item?.liveLink}
                    title={item?.title}
                    buttonText={item?.buttonText}
                    bgColor={item?.bgColor}
                    textColor={item?.textColor}
                    image={item?.logo}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
