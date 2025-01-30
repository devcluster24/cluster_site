"use server";

import axiosInstance from "../../lib/AxiosInstance";

// get all
export const getProducts = async () => {
  try {
    const res = await axiosInstance.get("/products");
    return res;
  } catch (error) {
    const errData = {
      success: false,
      message: error?.message,
    };
    return errData;
  }
};

// create
export const createProduct = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/products", formData);
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// view
export const getSingleProduct = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// update
export const updateProduct = async (id, data) => {
  try {
    const res = await axiosInstance.patch(`/products/${id}`, data);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// delete
export const deleteProduct = async (id) => {
  try {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.message);
    // const errData = {
    //   success: false,
    //   message: error?.message,
    // };
    // return errData;
  }
};
