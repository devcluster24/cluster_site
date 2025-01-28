const DashboardCard = ({ title, data }) => {
  return (
    <div className="lg:p-4 md:p-3 p-2  bg-white shadow-lg rounded-md flex flex-col items-center text-center w-full border border-gray-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-blue-500 mb-0">{data}</p>
    </div>
  );
};

export default DashboardCard;
