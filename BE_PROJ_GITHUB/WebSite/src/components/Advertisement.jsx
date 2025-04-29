"use client";
import React from 'react'
import Link from 'next/link';

const Advertisement = () => {
  return (
    <div className='lg:px-10 py-10 bg-black'>
        <div className='xl:h-[300px] border border-[#656565] flex flex-col-reverse xl:flex-row justify-center items-center bg-gradient-to-br from-black to-[#1A1A1A] rounded-xl shadow-sm'>
            <div className="text-part flex flex-col items-start w-full px-10 py-10">
                <Link href="/dashboard" className="border cursor-pointer w-fit bg-white text-black px-6 py-2 rounded-lg text-sm font-semibold">Start Analyzing</Link>
                <div className="mt-4 font-semibold text-xl xl:text-3xl w-[70%] text-left text-white">Transform Your Methane Detection with Cutting-Edge Imaging</div>
                <div className="mt-4 text-left w-[70%] text-xs xl:text-sm text-[#737373]">Leverage advanced hyperspectral and multispectral imaging techniques for accurate and efficient methane detection in your projects.</div>
            </div>
            <div className="w-[90%] xl:w-[50%] flex justify-start xl:justify-center pr-20 xl:px-10 py-10">
                <img className='rounded-lg' src="https://pubs.acs.org/cms/10.1021/acs.jpcb.4c01698/asset/images/medium/jp4c01698_0009.gif" alt="Methane Detection Visualization" />
            </div>
        </div>
    </div>
  )
}

export default Advertisement;
