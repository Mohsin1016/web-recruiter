"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from "axios";

const Proother = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        certification: '',
        resumeHeadline: 'HR specialist',
        summary: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("pro-details="));
        const existingData = existingCookie
            ? JSON.parse(decodeURIComponent(existingCookie.split("=")[1]))
            : {};

        const combinedData = {
            ...existingData,
            ...formData,
        };

        // document.cookie = `pro-details=${encodeURIComponent(JSON.stringify(combinedData))}; path=/`;

        try {
            const response = await axios.post('http://localhost:8800/professionals', combinedData);
            console.log(response.data);
            console.log('Form data submitted and stored in the database');
            router.push('/pro/Seven');
        } catch (error) {
            console.error('Error submitting form data:', error);
            console.error('Unhandled error:', error);
        }
    };

    return (
        <div className="flex justify-center  xl:mt-0  mt-10">
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold">Others</h1>
                <p className="text-sm text-[#777777]">
                    {" "}
                    please provide required Certification to Continue.
                </p>
                <div className="xl:mt-4 xl:flex xl:justify-between">
                    <div className="xl:mr-10">
                        <label className="block  md:mb-6 md:mt-0 mt-6 mb-6">
                            <span className="text-sm text-[#777777]">My Certification</span>

                            <input
                                type="text"
                                required
                                name="certification"
                                value={formData.certification}
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
                                placeholder="Ielts..."
                            />
                        </label>
                    </div>
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Resume Headline</span>
                            <select
                                name="resumeHeadline"
                                required
                                value={formData.resumeHeadline}
                                onChange={handleInputChange}
                                className="
            block
            xl:w-96
            w-80
            mt-1
            -mb-3
            xl:mb-0
             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
            rounded-md"
                            >
                                <option value="HR specialist">HR specialist with 4+ years.</option>
                                <option value="Supply chain manager">Supply chain manager with 6+ years.</option>
                                <option value="specialized Engineer">Engineer specialized in machine learning and data mining.</option>
                                <option value="Marketing executive">Marketing executive that has helped generate $500k+ in revenue.</option>
                                <option value="E-commerce website developer">E-commerce senior developer with 6+ years.</option>
                                <option value="Pharmacist">Pharmacist with 12+ years in the pharmaceutical service industry.</option>
                                <option value="Experienced cashier">Experienced cashier providing efficient and accurate service in the food industry.</option>
                                <option value="Graphic designer">Graphic designer with experience in designing over 30 different websites.</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="xl:-mt-3 xl:flex xl:justify-between">
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">My Summary</span>
                            <textarea
                                // type="date"
                                name="summary"
                                required
                                value={formData.summary}
                                onChange={handleInputChange}
                                className="
            block
            xl:w-96
            w-80
            mt-1
                
            rounded-md

             p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
          "
                                placeholder="summary of certifications"
                            />
                        </label>
                    </div>
                </div>

                {/* =================== */}

                <button
                    type="submit"
                    className="w-32 md:m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Proother