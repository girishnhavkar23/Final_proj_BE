"use client";
import React from 'react';
import { FaGasPump } from "react-icons/fa"; // Icon for gas detection
import { HiShieldExclamation } from "react-icons/hi"; // Shield icon for security
import { PiCubeTransparentFill } from "react-icons/pi"; // Transparency icon
import { AiOutlineStock } from "react-icons/ai"; // Scalable icon
import { FaGlobeAmericas } from "react-icons/fa"; // Global icon

const Usp = () => {
  return (
    <div className='flex flex-col items-center px-5 bg-black py-16'>
        <div className="text-2xl font-semibold text-center text-white">
            Multiple Advantages of Our Methane Detection System
        </div>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 px-10 xl:px-0 w-full mt-[56px]">
          <div className="flex justify-between w-full xl:px-20 text-3xl xl:text-6xl text-[#737373]">
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><FaGasPump/></div>
                <div className="text-sm mt-2 font-semibold">Real-Time Detection</div>
              </div>  
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><HiShieldExclamation/></div>
                <div className="text-sm mt-2 font-semibold">Tamper-Proof</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><PiCubeTransparentFill/></div>
                <div className="text-sm mt-2 font-semibold">Data Transparency</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><AiOutlineStock/></div>
                <div className="text-sm mt-2 font-semibold">Scalable Solutions</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="icon"><FaGlobeAmericas/></div>
                <div className="text-sm mt-2 font-semibold">Global Impact</div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Usp;
