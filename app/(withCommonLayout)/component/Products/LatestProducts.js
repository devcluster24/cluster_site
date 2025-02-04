"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Spin } from "antd";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Initially set to true

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Ensure loading starts
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_API}/products`
        );
        setProducts(response?.data?.data?.result || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <div id="products" className="  sm:px-6 md:px-10 bg-[#f6f5fb] w-full">
        <div className="Container  mx-auto flex flex-col justify-center items-center space-y-2 ">
          <h1 className=" font-semibold text-primary lg:text-xl lg:pt-10 pt-5">
            PRODUCTS
          </h1>
          <p className="text-[#202647] font-bold text-sm md:text-base lg:text-[30px] mx-auto text-center  xl:mb-12">
            Our latest Products
          </p>

          <div className="w-full">
            {loading ? (
              <div className="w-full h-[300px] flex justify-center items-center">
                <Spin />
              </div>
            ) : products.length > 0 ? (
              <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-8 pt-10 lg:pb-14 pb-10 justify-center items-center w-full">
                {products?.slice(0, 3).map((item) => (
                  <ProductCard
                    key={item?._id || item?.title || Math.random()}
                    _id={item?._id}
                    address={item?.liveLink}
                    title={item?.title}
                    buttonText={item?.buttonText}
                    bgColor={item?.bgColor}
                    textColor={item?.textColor}
                    image={item?.logo}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No products available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProducts;
