"use client";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { useState } from "react";
import { useUserLogin } from "../../../hooks/auth.hook";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // hook
  const { mutate: handleUserLogin, isPending: isPendingLogin } = useUserLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    handleUserLogin(formValues);
    console.log("Form Values:", formValues); // Log the form values
  };

  return (
    <div className="pt-20 bg-[#f6f5fb]">
      <div className="Container">
        <div className="w-full p-5 pt-20 flex justify-center items-center">
          <form
            onSubmit={handleSubmit} // Add onSubmit handler
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
                disabled={isPendingLogin} // Disable button during loading
              >
                {isPendingLogin ? (
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
