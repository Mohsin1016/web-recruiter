import Image from 'next/image'
import React from 'react'
import { MdOutlineDone } from 'react-icons/md'

const FreSidebar3 = () => {
    return (
        <div className="p-3 xl:p-0 w-[100%]  xl:h-[100vh]   bg-[#2668E8] ">
            <div className="xl:pl-5 xl:pt-5">
                <div className="xl:flex xl:flex-col  ">
                    <h1 className="text-white font-semibold text-2xl">Hire On</h1>
                    <div className="flex xl:block -mt-3 xl:mt-0 ">
                        <div className="xl:flex   mt-6">
                            <div className="w-2 h-2 hidden xl:block p-4 relative rounded-full bg-white">
                                {" "}
                                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                                    <MdOutlineDone className="text-blue-600" />
                                </div>
                            </div>
                            <div className="ml-3 -mt-1">
                                <h1 className="text-white -ml-2 xl:ml-0 text-sm">
                                    Log in <span className="hidden xl:inline"> Details</span>
                                </h1>
                                <p className="text-white hidden xl:block text-sm">
                                Enter these details to continue.
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/Vector 3.png"
                            height={3}
                            width={1}
                            alt="image"
                            className=" hidden xl:block ml-4 mt-2 -mb-2"
                        />
                        <div className="xl:flex  mt-6">
                            <div className="w-2 hidden xl:block h-2 p-4 relative rounded-full bg-white">
                                {" "}
                                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                                    <MdOutlineDone className="text-blue-600" />
                                </div>
                            </div>
                            <div className="ml-3 -mt-1">
                                <h1 className="text-white text-sm">Education</h1>
                                <p className="text-white xl:block hidden text-sm">
                                Enter details of your education.
                                </p>
                            </div>
                        </div>
                        <Image
                            src="/Vector3.png"
                            height={3}
                            width={1}
                            alt="image"
                            className="hidden xl:block ml-4 mt-2 -mb-2"
                        />
                        <div className="xl:flex  mt-6">
                            <div className="w-2 h-2 hidden xl:block p-4 relative rounded-full bg-white">
                                {" "}
                                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
                            </div>
                            <div className="ml-3 -mt-1">
                                <h1 className="text-white text-sm">Personal Details</h1>
                                <p className="text-white xl:block hidden text-sm">
                                Enter your personal details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default FreSidebar3