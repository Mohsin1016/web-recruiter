"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

const Companyprofile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "Technology",
    contactNumber: "",
    mailId: "",
    since: "",
    teamSize: "Small",
    webLink: "",
    logo: "",
    bankCoverImg: "",
    officialPic: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "resumes");

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dfewwtzi3/image/upload",
          formData
        );

        const imageUrl = response.data.secure_url;

        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: imageUrl,
        }));
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
      }
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const existingCookieData = Cookies.get("rec-details");
    const existingFormData = existingCookieData ? JSON.parse(existingCookieData) : {};

    const mergedFormData = {
      ...existingFormData,
      ...formData,
    };

    document.cookie = `rec-details=${encodeURIComponent(JSON.stringify(mergedFormData))}; path=/`;

    router.push("/reg/Third");
  };
  return (
    <div className="flex justify-center mt-6 xl:mt-0 scale-95">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Company Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4  xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Name</span>
              <input
                type="text"
                name="companyName"
                required
                value={formData.name}
                onChange={handleChange}
                className="
            block
            xl:w-96
                w-80
            mt-1
            -mb-4
            xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
          "
                placeholder="Enter Name"
              />
            </label>
          </div>
          <div className="">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Type</span>

              <select
                name="companyType"
                required
                value={formData.product}
                onChange={handleChange}
                className="
            block
            xl:w-96
                w-80
            -mb-4
            xl:mb-0
            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
            rounded-md"
              >
                <option value="Technology">Technology</option>
                <option value="Electronics">Electronics</option>
                <option value="Robots">Robots</option>
                <option value="Ai">Ai</option>
              </select>
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">
                Official Contact number
              </span>
              <input
                type="text"
                name="contactNumber"
                required
                value={formData.contactNumber}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-4
            xl:mb-0
             
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
          "
                placeholder="051-******"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Offical mail id</span>
              <input
                type="text"
                name="mailId"
                required
                value={formData.mailId}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-4
            xl:mb-0
             
            rounded-md

             p-2  bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="email@gmail.com"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Since</span>
              <input
                type="text"
                name="since"
                required
                value={formData.since}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-4
            xl:mb-0
             
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
          "
                placeholder="2015"
              />
            </label>
          </div>
          <div className="xl:ml-12">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Team size</span>

              <select
                name="teamSize"
                required
                value={formData.teamSize}
                onChange={handleChange}
                className="
            block
            xl:w-96
                w-80
            -mb-4
            xl:mb-0
            mt-1
             p-2  bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="Corporation">Corporation</option>
              </select>
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company Web Link</span>
              <input
                type="text"
                name="webLink"
                required
                value={formData.webLink}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-4
            xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
          "
                placeholder="www.companylink.com"
              />
            </label>
          </div>
          <div>
            <label htmlFor="inputLogo" className="block mb-6">
              <span className="text-sm text-[#777777]">Company Logo</span>
              <input
                required
                name="logo"
                id="inputLogo"
                type="file"
                onChange={handleFileChange}
                className="
                block
                xl:w-96
                w-80
                -mb-4
                xl:mb-0
                mt-1
                rounded-md
                file:bg-blue-600
                file:rounded-[4px]
                file:border-none
                file:py-1
                file:text-sm
                file:text-white
                 p-2  border-2
                 bg-[#B4C7ED0D] border-[#2668E826]
          "
              />
            </label>
          </div>
        </div>

        {/* =============================== */}
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          {" "}
          <div>
            <label htmlFor="inputBankCover" className="block mb-6">
              <span className="text-sm text-[#777777]">
                Company Bank Cover Image
              </span>
              <input
                required
                name="bankCoverImg"
                id="inputBankCover"
                type="file"
                onChange={handleFileChange}
                className="
                block
                xl:w-96
                w-80
                -mb-4
                xl:mb-0
                mt-1
                rounded-md
                file:bg-blue-600
                file:rounded-[4px]
                file:border-none
                file:py-1
                file:text-sm
                file:text-white
                 p-2  border-2 bg-[#B4C7ED0D] border-[#2668E826]
          "
              />
            </label>
          </div>
          <div>
            <label htmlFor="inputOfficialPic" className="block mb-6">
              <span className="text-sm text-[#777777]">Office photo</span>
              <input
                required
                name="officialPic"
                id="inputOfficialPic"
                type="file"
                onChange={handleFileChange}
                className="
            block
            xl:w-96
            w-80
            -mb-4
            xl:mb-0
            mt-1
            rounded-md
            file:bg-blue-600
            file:rounded-[4px]
            file:border-none
            file:py-1
            file:text-sm
            file:text-white
             p-2  bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Company About</span>
              <input
                type="text"
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            mb-6
            xl:mb-0
            
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826]  border-2
          "
                placeholder="write something about your company"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-32 md:m-auto xl:m-0 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Companyprofile;
