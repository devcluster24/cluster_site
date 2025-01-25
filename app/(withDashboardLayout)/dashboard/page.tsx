/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DashboardCard from "@/components/ui/DashboardCard";
import { useGetDashboard } from "@/hooks/dashboard.hook";

const DashboardPage = () => {
  // hook
  const { data: dashboardData } = useGetDashboard();
  return (
    <div className="w-full  lg:p-5 md:p-2 p-0">
      <div className="grid  sm:grid-cols-2 md:grid-cols-4 grid-cols-1 lg:gap-8 md:gap-6 gap-5 mb-10">
        {
          <>
            <DashboardCard
              title={"Total Admin"}
              data={dashboardData?.data?.totalAdmins || 0}
            />
            <DashboardCard
              title={"Total Product"}
              data={dashboardData?.data?.totalProduct || 0}
            />
            <DashboardCard
              title={"Total News"}
              data={dashboardData?.data?.totalNews || 0}
            />
            <DashboardCard
              title={"Total Success Story"}
              data={dashboardData?.data?.totalSuccessStory || 0}
            />
            <DashboardCard
              title={"Total Contact"}
              data={dashboardData?.data?.totalContact || 0}
            />
          </>
        }
      </div>
    </div>
  );
};

export default DashboardPage;
