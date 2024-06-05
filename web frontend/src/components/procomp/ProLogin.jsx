"use client"
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { message, Spin } from "antd"
import Cookies from "js-cookie";
import axios from "axios";

const ProLogin = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        resume: "",
        gender: "male"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8800/validate-email-pro",
                { email: formData.email }
            );

            if (response.data.emailExists) {
                message.error("Email already exists. Please use a different email.");
                return;
            }

            const encodedFormData = encodeURIComponent(JSON.stringify(formData));
            document.cookie = `pro-details=${encodedFormData}; path=/`;
            router.push("/pro/Second");
        } catch (error) {
            console.error("Error checking email existence:", error);
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const encodedFormData = encodeURIComponent(JSON.stringify(formData));
    //     document.cookie = `pro-details=${encodedFormData}; path=/`;

    //     router.push("/pro/Second");
    // };

    return (
        <div>
            <div className="flex justify-center mt-6">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-semibold">Sign up Details</h1>
                    <p className="text-sm text-[#777777]">
                        {" "}
                        please provide required information to sign up.
                    </p>
                    <div className="xl:mt-4 xl:flex xl:justify-between">
                        <div className="xl:mr-10 mt-4 xl:mt-0">
                            <label className="block mb-6">
                                <span className="text-sm text-[#777777]">Full Name</span>

                                <input
                                    type="text"
                                    required
                                    name="name"
                                    value={formData.name}
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
                                    name="mobile"
                                    value={formData.mobile}
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
                                    placeholder="0317-000000000"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="xl:-mt-3 xl:flex xl:justify-between">
                        <div>
                            <label className="block mb-6">
                                <span className="text-sm text-[#777777]">E-mail id</span>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="
            block
            xl:w-96
            w-80
            -mb-3
            xl:mb-0
            mt-1
            
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                                    placeholder="someone@gmail.com"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block mb-6">
                                <span className="text-sm text-[#777777]">Create Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    value={formData.password}
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
                                    placeholder="password"
                                />
                            </label>
                        </div>
                    </div>

                    {/* =================== */}
                    <div className="xl:-mt-4 xl:flex xl:justify-between">
                        <div>
                            <label className="block mb-6">
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
                                     p-2  border-2 cursor-pointer
          "
                                />
                            </label>
                        </div>
                        <div className="xl:ml-10">
                            <label className="block mb-6">
                                <span className="text-sm text-[#777777]">Gender</span>

                                <select
                                    name="gender"
                                    required
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className="
            block
            xl:w-96
                w-80

            mt-1
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md cursor-pointer"
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-32 md:m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ProLogin