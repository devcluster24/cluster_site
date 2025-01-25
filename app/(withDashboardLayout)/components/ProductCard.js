import React from "react";

const ProductCard = ({ id, title, amount, onClick }) => {
  const handleClick = () => {
    onClick({ id, title, amount });
  };
  return (
    <div
      className=" p-4 cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 "
      onClick={handleClick}
    >
      <div className="flex flex-col items-center">
        <div className="text-lg font-semibold text-gray-800">{title}</div>
        <div className="mt-2 text-2xl font-bold text-blue-600">${amount}</div>
      </div>
    </div>
  );
};

export default ProductCard;
