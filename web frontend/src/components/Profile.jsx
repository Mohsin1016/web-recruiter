"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    recruiterName: "",
    recruiterNumber: "",
    recruiterAltNumber: "",
    recruiterMailId: "",
    gender: "male",
    role: "",
    language: "English",
    age: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const existingCookieData = Cookies.get("rec-details");
    const existingFormData = existingCookieData ? JSON.parse(existingCookieData) : {};

    const mergedFormData = {
      ...existingFormData,
      ...formData,
    };

    // document.cookie = `rec-details=${encodeURIComponent(JSON.stringify(mergedFormData))}; path=/`;

    try {
      const response = await axios.post('http://localhost:8800/recruiters', mergedFormData);
      console.log(response.data);
      console.log('Form data submitted and stored in the database');
      // router.push("/reg/Fourth"); // job-posting will be handled later 
      router.push("/reg/Fifth");
    } catch (error) {
      console.error('Error submitting form data:', error);
      console.error('Unhandled error:', error);
    }
  };

  return (
    <div className="flex justify-center mt-6 xl:mt-0 ">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Recruiter Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Full Name</span>

              <input
                type="text"
                required
                name="recruiterName"
                value={formData.recruiterName}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Joe Bloggs"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Mobile Number</span>
              <input
                type="number"
                required
                name="recruiterNumber"
                value={formData.recruiterNumber}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="+923--------"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">
                Alternative mobile number
              </span>
              <input
                type="number"
                name="recruiterAltNumber"
                required
                value={formData.recruiterAltNumber}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
                xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="+923++++++++++"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Offical mail id</span>
              <input
                type="text"
                name="recruiterMailId"
                required
                value={formData.recruiterMailId}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            
            mt-1
                xl:mb-0
            -mb-4
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="someone@gmail.com"
              />
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Gender</span>

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            xl:mb-0
            -mb-4
            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">My role</span>
              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Manager"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Language</span>

              <select
                name="language"
                required
                value={formData.language}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Arabic">Arabic</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Age</span>
              <input
                type="number"
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1
            xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="23"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Experience</span>
              <input
                type="text"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-80
            mt-1xl:mb-0
            mb-6
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="5 years"
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

export default Profile;
