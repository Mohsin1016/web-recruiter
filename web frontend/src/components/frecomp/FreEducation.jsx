"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const FreEducation = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        highestEducation: 'Associates',
        courseType: 'Arts',
        passingOutYear: '',
        gradingSystem: 'A+',
        marks: '',
        institute: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
    
        const existingCookieData = Cookies.get("fre-details");
        const existingFormData = existingCookieData ? JSON.parse(existingCookieData) : {};
    
        const mergedFormData = {
            ...existingFormData,
            ...formData,
        };
    
        document.cookie = `fre-details=${encodeURIComponent(JSON.stringify(mergedFormData))}; path=/`;
    
        router.push("/fre/Third");
    };

    return (
        <div className="flex justify-center mt-6 ">
            <form onSubmit={HandleSubmit}>
                <h1 className="text-2xl font-semibold">Education</h1>
                <p className="text-sm text-[#777777]">
                    {" "}
                    please provide required information to log in.
                </p>
                <div className="xl:mt-4 mt-4 xl:flex xl:justify-between">
                    <div className="xl:mr-10">
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Highest Education</span>

                            <select
                                name="highestEducation"
                                required
                                value={formData.highestEducation}
                                onChange={handleInputChange}
                                className="
                block
                 xl:mb-0 -mb-3
                 xl:w-96
                 w-80
                mt-1
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
                rounded-md"
                            >
                                <option value="Associates">Associates</option>
                                <option value="Bachelors">Bachelors</option>
                                <option value="Masters">Masters</option>
                                <option value="Doctoral">Doctoral</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Cource Type</span>
                            <select
                                name="courseType"
                                required
                                value={formData.courseType}
                                onChange={handleInputChange}
                                className="
                block
                 xl:mb-0 -mb-3
                 xl:w-96
                 w-80
                mt-1
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
                rounded-md"
                            >
                                <option value="Arts">Arts</option>
                                <option value="Commerce">Commerce</option>
                                <option value="Computer">Computer</option>
                                <option value="Science">Science</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="xl:-mt-3 xl:flex xl:justify-between">
                    <div>
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Passing Out Year</span>
                            <input
                                type="date"
                                name="passingOutYear"
                                required
                                value={formData.passingOutYear}
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
                                placeholder="Joe Bloggs"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Grading System</span>
                            <select
                                name="gradingSystem"
                                required
                                value={formData.gradingSystem}
                                onChange={handleInputChange}
                                className="
                block
                xl:w-96
                w-80
                mb-6 xl:mb-0
                mt-1
                 p-2 bg-[#B4C7ED0D] border-[#2668E826] border-2
                rounded-md"
                            >
                                <option value="A+">A+</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </label>
                    </div>
                </div>

                {/* =================== */}
                <div className="xl:-mt-4 xl:flex xl:justify-between">
                    <div>
                        <label className="block mb-6">
                            <span className="text-sm text-[#777777]">Marks</span>
                            <input
                                required
                                name="marks"
                                id="inputFile"
                                type="number"
                                value={formData.marks}
                                onChange={handleInputChange}
                                placeholder="687"
                                className="
                block
                xl:w-96
                w-80
                mt-1
                -mb-4 xl:mb-0
                
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
                        <label className="xl:block xl:mb-6">
                            <span className="text-sm text-[#777777]">Institute Name</span>

                            <input
                                required
                                name="institute"
                                value={formData.institute}
                                onChange={handleInputChange}
                                placeholder="your college name..."
                                className="
                block
                xl:w-96
                w-80
                mt-1
                -mb-4 xl:mb-0
                
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
                    className="w-32 md:m-auto xl:m-0 mt-1 mb-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}

export default FreEducation