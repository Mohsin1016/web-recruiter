"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ProfCarrier = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    desiredIndustry: '',
    desiredDepartment: 'Accounts',
    desiredRole: '',
    desiredEmployment: 'Full-time',
    desiredJobType: 'Programmer',
    expectedCTC: '',
    preferredShift: 'Day',
    desiredCity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cookieData = document.cookie
      .split(';')
      .map(cookie => cookie.trim())
      .find(cookie => cookie.startsWith('pro-details='));

    const existingData = cookieData
      ? JSON.parse(decodeURIComponent(cookieData.split('=')[1]))
      : {};

    const mergedData = { ...existingData, ...formData };

    document.cookie = `pro-details=${encodeURIComponent(JSON.stringify(mergedData))}; path=/`;

    router.push('/pro/Six');
  };

  return (
    <div className="flex justify-center mt-6 xl:mt-0">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">Desired Carrer Profile</h1>
        <p className="text-sm text-[#777777]">
          {" "}
          please provide required Education to Continue.
        </p>
        <div className="xl:mt-4 xl:flex xl:justify-between">
          <div className="xl:mr-10 mt-4 xl:mt-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Industry</span>

              <input
                type="text"
                name="desiredIndustry"
                required
                value={formData.desiredIndustry}
                onChange={handleInputChange}
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
                placeholder="Industry"
              />
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Department</span>
              <select
                name="desiredDepartment"
                required
                value={formData.desiredDepartment}
                onChange={handleInputChange}
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
                <option value="accounts">Accounts</option>
                <option value="Construction">Construction</option>
                <option value="Inventory">Invertory</option>
                <option value="Purchasing">Purchasing</option>
              </select>
            </label>
          </div>
        </div>
        <div className="xl:-mt-3 xl:flex xl:justify-between">
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Role</span>
              <input
                type="text"
                name="desiredRole"
                required
                value={formData.desiredRole}
                onChange={handleInputChange}
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
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Employment Type</span>

              <select
                name="desiredEmployment"
                required
                value={formData.desiredEmployment}
                onChange={handleInputChange}
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
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </label>
          </div>
        </div>

        {/* =================== */}
        <div className="xl:-mt-4 xl:flex xl:justify-between">
          <div className="ml-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Job Type</span>

              <select
                name="desiredJobType"
                required
                value={formData.desiredJobType}
                onChange={handleInputChange}
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
                <option value="Programmer">Programmer</option>
                <option value="Construction">Construction</option>
                <option value="Management">Management</option>
                <option value="Architect">Architect</option>
                <option value="Accountant">Accountant</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Expected CTC</span>
              <input
                required
                name="expectedCTC"
                id="inputFile"
                type="text"
                value={formData.expectedCTC}
                onChange={handleInputChange}
                placeholder="Gross Salary + Benefits"
                className="
          block
          xl:w-96
          w-80
          mt-1
          xl:mb-0
          -mb-4
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
          <div className="ml-0">
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Preferred Shift</span>

              <select
                name="preferredShift"
                required
                value={formData.preferredShift}
                onChange={handleInputChange}
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
                <option value="Day">Day</option>
                <option value="Night">Night</option>
              </select>
            </label>
          </div>
          <div>
            <label className="block mb-6">
              <span className="text-sm text-[#777777]">Desired City</span>
              <input
                required
                name="desiredCity"
                id="inputFile"
                type="text"
                value={formData.desiredCity}
                onChange={handleInputChange}
                placeholder="New York"
                className="
          block
          xl:w-96
          w-80
          mt-1
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

        <button
          type="submit"
          className="w-32 md:m-auto xl:m-0 mt-1 xl:mb-10 mb-20 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default ProfCarrier