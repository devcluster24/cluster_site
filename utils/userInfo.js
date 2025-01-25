"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// get user service
export const getCurrentUser = async () => {
  const cookieStore = await cookies(); // Use await to resolve the Promise

  const accessToken = cookieStore.get("barAccessToken")?.value;

  let decodedToken = null;
  if (accessToken) {
    decodedToken = jwtDecode(accessToken); // Decode the token

    return {
      user_id: decodedToken?.user_id,
      role: decodedToken?.role,
      exp: decodedToken?.exp,
      iat: decodedToken?.iat,
      jti: decodedToken?.jti,
    };
  }
  return decodedToken;
};
