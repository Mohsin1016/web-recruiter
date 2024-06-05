"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Fredetails = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        dob: '',
        maritalStatus: 'Single',
        language: '',
        currentAddress: '',
        permanentAddress: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const HandleSubmit = (e) => {
        e.preventDefault();

        const cookieData = document.cookie
            .split(';')
            .map(cookie => cookie.trim())
            .find(cookie => cookie.startsWith('fre-details='));

        const existingData = cookieData
            ? JSON.parse(decodeURIComponent(cookieData.split('=')[1]))
            : {};

        const mergedData = { ...existingData, ...formData };

        document.cookie = `fre-details=${encodeURIComponent(JSON.stringify(mergedData))}; path=/`;


        router.push("/fre/Fourth");
    };

    return (
        <div className="flex justify-center items-center mt-6">
            <form onSubmit={HandleSubmit}>
                <h1 className="text-2xl font-semibold">Personal Details</h1>
                <p className="text-sm text-[#777777]">
                    {" "}
                    please provide required information to Continue.
                </p>
                <div className="xl:mt-4 xl:flex xl:justify-between">
                    <div className="xl:mr-10 mt-4 xl:mt-0">
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Date of Birth</span>

                            <input
                                type="date"
                                name="dob"
                                required
                                value={formData.dob}
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
                                placeholder="Date of Birth"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Martial Status</span>
                            <select
                                name="maritalStatus"
                                required
                                value={formData.maritalStatus}
                                onChange={handleInputChange}
                                className="
            block
            xl:w-96
            w-80
            
            mt-1
            mb-2
            xl:mb-0
            
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
                            >
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                                <option value="Divorced">Divorced</option>
                                <option value="Widowed">Widowed</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="xl:-mt-3 xl:flex xl:justify-between">
                    <div>
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Language</span>
                            <input
                                type="text"
                                name="language"
                                required
                                value={formData.language}
                                onChange={handleInputChange}
                                className="
            block
            xl:w-96
            w-80
            mt-1
              mb-2
            xl:mb-0
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                                placeholder="French"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Current Address</span>
                            <input
                                type="text"
                                name="currentAddress"
                                required
                                value={formData.currentAddress}
                                onChange={handleInputChange}
                                className="
            block
            xl:w-96
            w-80
            mt-1
              -mb-3
            xl:mb-0
              
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                                placeholder="your current address..."
                            />
                        </label>
                    </div>
                </div>

                {/* =================== */}
                <div className="xl:-mt-4 xl:flex xl:justify-between">
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Permanent Address</span>
                            <input
                                required
                                name="permanentAddress"
                                id="inputFile"
                                type="text"
                                value={formData.permanentAddress}
                                onChange={handleInputChange}
                                placeholder="Enter your Address"
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
                    className="w-32 xl:m-0 md:m-auto mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}

export default Fredetails