import Image from 'next/image'
import React from 'react'
import { MdOutlineDone } from 'react-icons/md'

const Profbar5 = () => {
  return (
    <div className='p-3 xl:p-0 w-[100%]  xl:h-[100vh]   bg-[#2668E8]'>
      <div className="xl:pl-5 xl:pt-5">
        <div className="xl:flex xl:flex-col  ">
          <h1 className="text-white font-semibold text-2xl">Hire On</h1>
          <div className="flex xl:block -mt-4 xl:mt-0 -ml-[0.7rem]">
            <div className="xl:flex hidden mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Log in Details</h1>
                <p className="text-white text-sm">
                  Enter the details to continue.
                </p>
              </div>
            </div>
            <Image
              src="/Vector3.png"
              height={3}
              width={1}
              alt="image"
              className="xl:block hidden ml-4 mt-2 -mb-2 "
            />
            <div className="xl:flex hidden mt-6">
              <div className="w-2 h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Education</h1>
                <p className="text-white text-sm">
                  Enter details of your education.
                </p>
              </div>
            </div>
            <Image
              src="/Vector3.png"
              height={3}
              width={1}
              alt="image"
              className="xl:block hidden ml-4 mt-2 -mb-2"
            />
            <div className="xl:flex  mt-6">
              <div className="w-2 h-2 xl:block hidden p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Employment</h1>
                <p className="text-white xl:block hidden text-sm">
                  Enter details of your employment.
                </p>
              </div>
            </div>
            <Image
              src="/Vector3.png"
              height={3}
              width={1}
              alt="image"
              className=" xl:block hidden ml-4 mt-2 -mb-2"
            />
            <div className="xl:flex  mt-6">
              <div className="w-2 xl:block hidden h-2 p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-2 left-2  rounded-full">
                  <MdOutlineDone className="text-blue-600" />
                </div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Personal Details</h1>
                <p className="text-white hidden xl:block text-sm">
                  Enter your personal details.
                </p>
              </div>
            </div>
            <Image
              src="/Vector3.png"
              height={3}
              width={1}
              alt="image"
              className=" xl:block hidden ml-4 mt-2 -mb-2"
            />
            <div className=" xl:flex  mt-6">
              <div className="w-2 h-2 hidden xl:block p-4 relative rounded-full bg-white">
                {" "}
                <div className="w-2 h-2 absolute top-3 left-3 bg-[#2668E8] rounded-full"></div>
              </div>
              <div className="ml-3 -mt-1">
                <h1 className="text-white text-sm">Desired Carrer Profile</h1>
                <p className="text-white text-sm hidden xl:block">
                  Enter details of your desired career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profbar5