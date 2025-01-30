"use client";

import { Spin } from "antd";
import { useEffect, useState } from "react";
import axiosInstance from "../../../lib/AxiosInstance";
import DashboardCard from "../components/DashboardCard";

const DashboardPage = () => {
  const [data, setData] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance({
        url: `/dashboard/`,
        method: "GET",
        params: {},
      });

      if (response.success) {
        setData(response.data);

        // console.log("Data fetched successfully:", response.data);
      } else {
        console.error("Error fetching data:", response.error);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full  lg:p-5 md:p-2 p-0">
      {isLoading ? (
        <div className="flex justify-center items-center h-96">
          <Spin />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-5 mb-10">
          {data && (
            <>
              <DashboardCard
                key={"total_admin"}
                title={"Total Admin"}
                data={data?.total_admin || "0"}
              />
              <DashboardCard
                key={"member"}
                title={"Total Member"}
                data={data?.member || "0"}
              />
              <DashboardCard
                key={"committee"}
                title={"Total Committee"}
                data={data?.committee || "0"}
              />
              <DashboardCard
                key={"ex_committee"}
                title={"Total Ex-Committee"}
                data={data?.ex_committee || "0"}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
