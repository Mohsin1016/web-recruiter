"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { message, Spin } from "antd"
import Cookies from "js-cookie";
import axios from "axios";

const Frelogin = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        password: "",
        resume: "",
        gender: "male",

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
                    resume: imageUrl,
                }));
            } catch (error) {
                console.error("Error uploading to Cloudinary:", error);
            }
        }
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8800/validate-email",
                { email: formData.email }
            );

            if (response.data.emailExists) {
                message.error("Email already exists. Please use a different email.");
                return;
            }

            const encodedFormData = encodeURIComponent(JSON.stringify(formData));
            document.cookie = `fre-details=${encodedFormData}; path=/`;
            router.push("/fre/Second");
        } catch (error) {
            console.error("Error checking email existence:", error);
        }
    };

    return (
        <div className="flex justify-center xl:mt-0 mt-6">
            <form onSubmit={HandleSubmit}>
                <h1 className="text-2xl  font-semibold">Sign up Details</h1>
                <p className="text-sm text-[#777777]">
                    {" "}
                    please provide required information to sign up.
                </p>
                <div className="mt-4 xl:flex justify-between">
                    <div className="xl:mr-10">
                        <label className="block xl:mb-6">
                            <span className="text-sm text-[#777777]">Full Name</span>

                            <input
                                type="text"
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}

                                className="
                block
                xl:w-96
                w-80
                mt-1
                    mb-2 xl:mb-0
                rounded-md
    
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
              "
                                placeholder="Joe Bloggs"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="xl:block  xl:mb-6">
                            <span className="text-sm  text-[#777777]">Mobile Number</span>
                            <input
                                type="text"
                                required
                                value={formData.contactNumber}
                                name="contactNumber"
                                onChange={handleChange}
                                className="
                block
                xl:w-96
                w-80
                mt-1
                    mb-2 xl:mb-0
                rounded-md
    
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
              "
                                placeholder="Joe Bloggs"
                            />
                        </label>
                    </div>
                </div>
                <div className="xl:-mt-3 xl:flex xl:justify-between">
                    <div>
                        <label className="xl:block mb-6">
                            <span className="text-sm text-[#777777]">E-mail id</span>
                            <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                                className="
                block
                xl:w-96
                w-80
                mt-1
                    mb-2 xl:mb-0
                rounded-md
    
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
              "
                                placeholder="Joe Bloggs"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Create Password</span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="
                block
                xl:w-96
                w-80
                mt-1
                    mb-2 xl:mb-0
                rounded-md
    
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
              "
                                placeholder="password"
                            />
                        </label>
                    </div>
                </div>

                {/* =================== */}
                <div className="xl:-mt-4 xl:flex xl:justify-betwee ">
                    <div>
                        <label className="xl:block mb-6">
                            <span className="text-sm text-[#777777]">Upload Resume</span>
                            <input
                                required
                                name="resume"
                                id="inputFile"
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
                    <div className="xl:ml-10 mt-6 md:mt-0">
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Gender</span>

                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="
                block
                xl:w-96
                w-80
                 
                mt-1
                mb-6 xl:mb-0
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
                rounded-md"
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                        </label>
                    </div>
                </div>
                <div className="">
                    <button
                        type="submit"
                        className="w-32 md:m-auto xl:m-0   mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Frelogin