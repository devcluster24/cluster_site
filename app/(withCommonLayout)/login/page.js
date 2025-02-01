"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon
import { setTokenInCookie } from "../../../utils/token";
import Swal from "sweetalert2";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "devcluster24@gmail.com",
    password: "alaminadmin",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission

    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues), // Use formValues
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (res?.data?.success) {
        await setTokenInCookie(
          res?.data?.data?.accessToken,
          res?.data?.data?.refreshToken
        );

        Swal.fire({
          title: "Login successful!",
          text: "You have been logged in successfully.",
          icon: "success",
        });

        setFormValues({ email: "", password: "" }); // Reset form values
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        Swal.fire({
          title: "Login declined!",
          text: "Invalid login credentials.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        title: "Login failed!",
        text: "An error occurred during login. Please try again.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect to dashboard after login success using JavaScript

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="pt-20 bg-[#f6f5fb]">
      <div className="Container">
        <div className="w-full p-5 pt-20 flex justify-center items-center">
          <form
            onSubmit={handleLogin} // Add onSubmit handler
            className="rounded px-4 md:px-8 pt-6 pb-8 mb-4 space-y-4 md:space-y-8 shadow-2xl border border-border bg-white"
          >
            <h1 className="text-text font-bold text-center text-2xl">Login</h1>
            <div className="mb-4">
              <div>
                <input
                  className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange} // Update state on change
                />
                <hr className="text-primary" />
              </div>
              <div className="relative">
                <input
                  className="bg-transparent appearance-none border-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none border-b-2 border-b-blue500 p-3 md:p-5"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange} // Update state on change
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-primary"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                <hr className="text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-between">
              <button
                type="submit" // Set button type to submit
                className="border transition ease-in-out hover:bg-primary duration-300 border-primary shadow-2xl text-primary hover:text-[#ffff] text-sm font-semibold px-4 md:px-5 py-2 flex items-center gap-1 mt-2 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading} // Disable button during loading
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin text-lg" />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
