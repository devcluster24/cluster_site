"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { removeTokenFromCookie } from "../../../utils/token";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Call the logout API route to clear cookies
      await removeTokenFromCookie();

      Swal.fire({
        title: "Logout successful!",
        text: "You have been logout successfully.",
        icon: "success",
      });
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error during logout:", error);
      Swal.fire({
        title: "Logout declined!",
        text: "Logout failed!",
        icon: "error",
      });
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-5 py-2 rounded-md text-center"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
