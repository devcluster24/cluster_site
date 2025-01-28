"use server";

import axiosInstance from "../../lib/AxiosInstance";

// get my profile
export const getMyProfile = async () => {
  try {
    const res = await axiosInstance.get("/users/my-profile");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// update my profile
export const updateMyProfile = async (formData) => {
  try {
    const { data } = await axiosInstance.patch(
      "/users/update-my-profile",
      formData
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
