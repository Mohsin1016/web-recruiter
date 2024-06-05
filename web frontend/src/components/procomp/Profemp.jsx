"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";

const Profemp = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    organizationName: "",
    designation: "",
    currentCompany: "",
    workingFrom: "",
    currentSalary: "",
    noticePeriod: "",
    keySkills: "",
    describeProfile: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cookieData = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("pro-details="));

    const existingData = cookieData
      ? JSON.parse(decodeURIComponent(cookieData.split("=")[1]))
      : {};

    const mergedData = { ...existingData, ...formData };

    document.cookie = `pro-details=${encodeURIComponent(
      JSON.stringify(mergedData)
    )}; path=/`;

    router.push("/pro/Fourth");
  };

  return (
    <div className="flex justify-center xl:mt-0  mt-6">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Employment</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required Education to Continue.
        </p>
        <div className="xl:mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10 mt-4 xl:mt-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Organization Name</span>

              <input
                type="text"
                name="organizationName"
                required
                value={formData.organizationName}
                onChange={handleInputChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-4
             xl:mb-0   
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Organization Name"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Designation</span>
              <input
                type="text"
                name="designation"
                required
                value={formData.designation}
                onChange={handleInputChange}
                className="
            block
            xl:w-96
                w-80
            mt-1
                -mb-4
             xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Marketing Manager"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Current Company</span>
              <input
                type="text"
                name="currentCompany"
                required
                value={formData.currentCompany}
                onChange={handleInputChange}
                className="
            block
            xl:w-96
                w-80
            mt-1
                -mb-4
             xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Current company name."
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Working Form</span>
              <input
                type="date"
                name="workingFrom"
                required
                value={formData.workingFrom}
                onChange={handleInputChange}
                className="
                block
                xl:w-96
                w-80
                mt-1
                mb-2 xl:mb-0
                   
                rounded-md
    
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
              "
                placeholder="2013"
              />
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Current Salry</span>
              <input
                required
                name="currentSalary"
                id="inputFile"
                type="number"
                value={formData.currentSalary}
                onChange={handleInputChange}
                placeholder="23000"
                className="
            block
            xl:w-96
                w-80
            mt-1
            -mb-4
             xl:mb-0
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
          <div className="xl:ml-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Notice Period</span>

              <input
                required
                name="noticePeriod"
                id="inputFile"
                type="text"
                value={formData.noticePeriod}
                onChange={handleInputChange}
                placeholder="30 days"
                className="
            block
            xl:w-96
            w-80
            mt-1
             -mb-4
             xl:mb-0

            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Key Skills</span>
              <input
                required
                name="keySkills"
                id="inputFile"
                type="text"
                value={formData.keySkills}
                onChange={handleInputChange}
                placeholder="Microsoft Office, Excel, ..."
                className="
            block
            xl:w-96
            w-80
            mt-1
             -mb-4
             xl:mb-0
             
            rounded-md
            file:bg-blue-600
            file:rounded-lg
            file:border-blue-600
            file:text-white
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              />
            </label>
          </div>
        </div>
        {/* =========================== */}

        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Describe Profile</span>
              <textarea
                type="text"
                name="describeProfile"
                required
                value={formData.describeProfile}
                onChange={handleInputChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="My name is John Doe...."
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-32 md:m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default Profemp;
