"use server";

import axiosInstance from "../../lib/AxiosInstance";

// get all
export const getContacts = async () => {
  try {
    const res = await axiosInstance.get("/contact");
    return res.data;
  } catch (error) {
    const errData = {
      success: false,
      message: error?.message,
    };

    return errData;
  }
};

// create
export const createContact = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/contact", formData);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// view
export const getSingleContact = async (id) => {
  try {
    const { data } = await axiosInstance.get(`/contact/${id}`);
    return data;
  } catch (error) {
    const errData = {
      success: false,
      message: error?.message,
    };

    return errData;
  }
};

// update
export const updateContact = async (id, data) => {
  try {
    const res = await axiosInstance.put(`/contact/${id}`, data);
    return res.data;
  } catch (error) {
    const errData = {
      success: false,
      message: error?.message,
    };

    return errData;
  }
};

// delete
export const deleteContact = async (id) => {
  try {
    const res = await axiosInstance.delete(`/contact/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
};
