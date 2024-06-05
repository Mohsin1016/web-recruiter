"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();

  const [mobileNumber, setMobileNumber] = useState("");

  const handleNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      mobileNumber: mobileNumber,
    };

    const existingCookieData = Cookies.get("rec-details");
    const existingFormData = existingCookieData ? JSON.parse(existingCookieData) : {};

    const mergedFormData = {
      ...existingFormData,
      ...formData,
    };

    Cookies.set("rec-details", JSON.stringify(mergedFormData), { path: "/" });

    router.push("/reg/Second");
  }


  return (
    <div className="flex justify-center mt-32 xl:mt-0">
      <div className="xl:flex xl:flex-col xl:justify-start   ">
        <div className="xl:max-w-md xl:w-full xl:px-6 xl:py-12  rounded-lg ">
          <h1 className="text-3xl font-semibold   xl:mb-3">Welcome Back!</h1>
          <p className="text-[#777777] text-sm mb-4">
            Please register to continue.
          </p>
          <form
            onSubmit={HandleSubmit}
            className="space-y-4">
            <div>
              <label
                htmlFor="mobileNumber"
                className="block text-sm  text-[#777777]"
              >
                Enter your mobile number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={handleNumberChange}
                className="mt-1 block xl:w-96 shadow-sm sm:text-sm p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2  rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-32 mb-10 flex md:m-auto xl:m-0 justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
