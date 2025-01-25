"use server";

// import envConfig from "@/config/envConfig";
import envConfig from "../config/envConfig";
import { cookies } from "next/headers";

export const getNewAccessToken = async () => {
  try {
    // Make an API call to your server's endpoint to get a new access token
    const response = await fetch(`${envConfig.serverApi}/auth/refresh-token`, {
      method: "POST", // Or 'GET' depending on your API setup
      headers: {
        "Content-Type": "application/json",
        // Add other headers if needed, like Authorization if required
      },
      body: JSON.stringify({
        refreshToken: "your-refresh-token", // You may need a refresh token here
      }),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to get new access token");
    }

    // Parse the response to get the new access token
    const data = await response.json();

    // Return the new access token from the response
    return data.accessToken || null;
  } catch (error) {
    console.error("Error fetching new access token:", error);
    return null;
  }
};

/**
 * Set the access token in cookies (server-side only)
 */
export const setTokenInCookie = async (accessToken, refreshToken) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "barAccessToken",
    value: accessToken,
    httpOnly: true, // Secure from JavaScript access
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
  if (refreshToken) {
    cookieStore.set({
      name: "barRefreshToken",
      value: refreshToken,
      httpOnly: true, // Secure from JavaScript access
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
};

/**
 * Remove the access token from cookies (server-side only)
 */
export const removeTokenFromCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("barAccessToken");
  cookieStore.delete("barRefreshToken");
};

export const getAccessToken = async (token) => {
  const cookieStore = await cookies();
  return cookieStore.get(token);
};

// get bar
export const getBarAccessToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("barAccessToken")?.value || null; // Get the cookie value
  return token;
};
