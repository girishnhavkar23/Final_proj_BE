import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0A0A0A] p-7 rounded-xl text-white mb-10 border border-[#656565]'>
        <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row justify-start xl:justify-between pb-7 border-0 border-b border-b-white">
            <div className="flex flex-col space-y-4 xl:justify-between">
                <div className="brand flex space-x-5">
                    <div className="">
                        <img className='w-10' src="https://e7.pngegg.com/pngimages/186/892/png-clipart-gasoline-fuel-liquefied-petroleum-gas-gas-detector-business-people-logo-thumbnail.png" alt="Methane Detection Logo" />
                    </div>
                    <div className="brandName text-2xl font-semibold pt-1">Methane Detection</div>
                </div>
                <div className="place-contact flex space-x-16 text-sm font-semibold">
                    <div className="place">Mumbai, India</div>
                    <div className="contact">+91 9977886655</div>
                </div>
            </div>
            <div className="flex space-x-20">
                <div className="flex flex-col space-y-3">
                    <div className="text-sm font-semibold">Services</div>
                    <div className="text-sm font-semibold">About Us</div>
                    <div className="text-sm font-semibold">Research</div>
                    <div className="text-sm font-semibold">Collaboration</div>
                    <div className="text-sm font-semibold">FAQ</div>
                </div>
                <div className="flex flex-col space-y-3">
                    <div className="text-sm font-semibold">Instagram</div>
                    <div className="text-sm font-semibold">Facebook</div>
                    <div className="text-sm font-semibold">LinkedIn</div>
                    <div className="text-sm font-semibold">Twitter</div>
                    <div className="text-sm font-semibold">YouTube</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:justify-between text-sm font-semibold mt-5">
            <div className="copy-right">&copy; 2024 Methane Detection Project. All rights reserved</div>
            <div className="terms">Terms of Service</div>
        </div>
    </div>
  )
}

export default Footer;
