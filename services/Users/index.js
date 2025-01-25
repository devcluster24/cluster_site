"use server";

import axiosInstance from "@/lib/AxiosInstance";

// get all
export const getUsers = async () => {
  try {
    const res = await axiosInstance.get("/users");
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// update user
export const updateUser = async (id, data) => {
  try {
    const res = await axiosInstance.patch(`/users/${id}`, data);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// delete user
export const deleteUser = async (id) => {
  try {
    const res = await axiosInstance.delete(`/users/${id}`);
    return res.data.data;
  } catch (error) {
    throw new Error(error.message);
    // const errData = {
    //   success: false,
    //   message: error?.message,
    // };
    // return errData;
  }
};
