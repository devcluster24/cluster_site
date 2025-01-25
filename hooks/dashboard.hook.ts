/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDashboard } from "@/services/Dashboard";
import { useQuery } from "@tanstack/react-query";

// get
export const useGetDashboard = () => {
  return useQuery({
    queryKey: ["GET_DASHBOARD"],
    queryFn: async () => await getDashboard(),
    refetchOnWindowFocus: false,
  });
};
