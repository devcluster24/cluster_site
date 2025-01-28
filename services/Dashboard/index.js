"use server";

import axiosInstance from "../../lib/AxiosInstance";

// get
export const getDashboard = async () => {
  try {
    const res = await axiosInstance.get("/users/dashboard");
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
