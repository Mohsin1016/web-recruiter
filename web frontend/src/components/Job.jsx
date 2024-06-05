"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase"
import { addDoc, collection } from "firebase/firestore";

const Job = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "accounts",
    jobType: "internal",
    offeredSalary: "",
    experience: "",
    qualification: "",
    gender: "male",
    jobDescription: "",
    location: "",
    dateOfPosting: "",
    addressComplete: "",
    jobBenefits: "",
    regionalLanguage: "",
    workingDays: "",
    jobShift: "morning",
    jobSkills: "",
    noOfOpenings: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
  
    const existingCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("registration="));
    const existingData = existingCookie
      ? JSON.parse(decodeURIComponent(existingCookie.split("=")[1]))
      : {};
  
    const combinedData = {
      ...existingData,
      ...formData,
    };
  
    document.cookie = `registration=${encodeURIComponent(JSON.stringify(combinedData))}; path=/`;
  
    try {
      const docRef = await addDoc(collection(db, "Recruiter"), combinedData);
      
      console.log("Document written with ID: ", docRef.id);
      
      // router.push("/thank-you-page");
      router.push("/reg/Fifth");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex justify-center my-10 ml-[1.5rem] md:ml-0">
      <form onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-semibold">Job Post</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required information to log in.
        </p>
        <div className="mt-4 xl:flex xl:justify-between">
          <div className="mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job tittle</span>

              <input
                type="text"
                name="jobTitle"
                required
                value={formData.jobTitle}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
            
            mt-1
             xl:mb-0
            -mb-4
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="looking for web developer"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">job category</span>
              <select
                name="jobCategory"
                required
                value={formData.jobCategory}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
            mt-1
             xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="accounts">Accounts</option>
                <option value="construction">Construction</option>
                <option value="inventory">Invertory</option>
                <option value="purchasing">Purchasing</option>
              </select>
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Type</span>

              <select
                name="jobType"
                required
                value={formData.jobType}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
            mt-1
             xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="internal">Internal</option>
                <option value="external">External</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Offered Salary</span>
              <input
                type="number"
                name="offeredSalary"
                required
                value={formData.offeredSalary}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="20000"
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
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
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="3 years"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Qualification</span>
              <input
                type="text"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Bachelors, Master, ..."
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
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
            w-[18rem]
            mt-1
             xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
          </div>
          <div className="xl:ml-12">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Description</span>

              <input
                type="text"
                name="jobDescription"
                required
                value={formData.jobDescription}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="write job description here..."
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Location</span>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="New York"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Posting date</span>
              <input
                type="date"
                name="dateOfPosting"
                required
                value={formData.dateOfPosting}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="13/04/2023"
              />
            </label>
          </div>
        </div>
        <div className="-mt-4">
          <label className="block mb-6">
            <span className="text-sm text-[#777777]">Complete Address</span>
            <input
              type="text"
              name="addressComplete"
              required
              value={formData.addressComplete}
              onChange={handleChange}
              className="
            block
            xl:w-full
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
              placeholder="street # 41, New York, USA"
            />
          </label>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job benefits</span>
              <input
                type="text"
                name="jobBenefits"
                required
                value={formData.jobBenefits}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Flexible working hours, Paid holidays ..."
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">
                Religional Language
              </span>
              <input
                type="text"
                name="regionalLanguage"
                required
                value={formData.regionalLanguage}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="English, Hindi, ..."
              />
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Working days</span>
              <input
                type="number"
                name="workingDays"
                required
                value={formData.workingDays}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="5"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job shift</span>
              <select
                name="jobShift"
                required
                value={formData.jobShift}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
            mt-1
             xl:mb-0
            -mb-4
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
              >
                <option value="morning">Morning</option>
                <option value="evening">Evening</option>
              </select>
            </label>
          </div>
        </div>
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Skills</span>
              <input
                type="text"
                name="jobSkills"
                required
                value={formData.jobSkills}
                onChange={handleChange}
                className="
            block
            xl:w-96
            w-[18rem]
             xl:mb-0
            -mb-4
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="Microsoft Office"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Number of openings</span>
              <input
                type="number"
                name="noOfOpenings"
                required
                value={formData.noOfOpenings}
                onChange={handleChange}
                className="
            block
            xl:w-96
                w-[18rem]
             xl:mb-0
            mb-6
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                placeholder="20"
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

export default Job;
