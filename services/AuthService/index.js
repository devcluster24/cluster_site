"use server";

import axiosInstance from "@/lib/AxiosInstance";
import jwtDecode from "jwt-decode";
import { cookies } from "next/headers";

// register post
export const registerUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data?.success) {
      console.log("server data after register", data);
      // Uncomment and use if cookie handling is required
      // const cookieStore = await cookies();
      // cookieStore.set("seedAccessToken", data?.data?.accessToken);
      // cookieStore.set("seedRefreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// login post
export const loginUser = async (userData) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);
    if (data?.success) {
      const cookieStore = cookies();
      cookieStore.set("seedAccessToken", data?.data?.accessToken);
      cookieStore.set("seedRefreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// logout post
export const logOutUser = async () => {
  const cookieStore = cookies();
  cookieStore.delete("seedAccessToken");
  cookieStore.delete("seedRefreshToken");
};

// get current user
export const getCurrentUser = async () => {
  const cookieStore = cookies();
  const seedAccessToken = cookieStore.get("seedAccessToken")?.value;

  let decodedToken = null;
  if (seedAccessToken) {
    decodedToken = jwtDecode(seedAccessToken);
    return {
      userId: decodedToken.userId,
      role: decodedToken.role,
      email: decodedToken.email,
      iat: decodedToken.iat,
      exp: decodedToken.exp,
    };
  }
  return decodedToken;
};

// generate new token
export const getNewAccessToken = async () => {
  try {
    const cookieStore = cookies();
    const seedRefreshToken = cookieStore.get("seedRefreshToken")?.value;
    const { data } = await axiosInstance({
      method: "POST",
      url: "/auth/refresh-token",
      withCredentials: true,
      headers: {
        cookie: `seedRefreshToken=${seedRefreshToken}`,
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
