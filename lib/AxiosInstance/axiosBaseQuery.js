import envConfig from "../../config/envConfig";
import { instance as axiosInstance } from "./axiosInstance";
const baseUrl = envConfig.serverApi;

export const axiosQuery = async ({
  url,
  method = "GET",
  data,
  params,
  contentType,
}) => {
  try {
    const result = await axiosInstance({
      url: baseUrl + url,
      method,
      data,
      params,
      headers: {
        "Content-Type": contentType || "application/json",
      },
    });

    return {
      success: true,
      status: result.status,
      data: result.data,
    };
  } catch (axiosError) {
    const err = axiosError;

    return {
      success: false,
      error: {
        status: err.response?.status || 500,
        data: err.response?.data || err.message || "Something went wrong!",
      },
    };
  }
};
