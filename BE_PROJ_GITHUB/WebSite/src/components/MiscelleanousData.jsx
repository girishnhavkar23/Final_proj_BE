"use client";
import React, { useContext } from 'react';
import { FaGasPump } from "react-icons/fa"; // Icon representing gas
import { IoSpeedometer } from "react-icons/io5"; // Speedometer for detection speed
import { IoPeople } from "react-icons/io5"; // Users icon
import { FaShieldAlt } from "react-icons/fa"; // Shield icon for security
import { BsBuildingsFill } from "react-icons/bs"; // Building icon for organizations
import NumberCards from './NumberCards';
import { WalletContext } from '../context/wallet.js';  // Import WalletContext

const MiscelleanousData = () => {
    // Access wallet context to get the address
    const { userAddress, isConnected } = useContext(WalletContext);

    const formatDate = () => {
        const date = new Date();
      
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const dayName = days[date.getDay()];
        const dayNumber = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();
      
        return `${dayName}, ${dayNumber} ${monthName} ${year}`;
    };

    return (
        <div className='px-5 xl:px-10 pt-10 pb-6'>
            <div className="flex flex-col space-y-3 xl:space-y-0 xl:flex-row justify-between">
                <div>
                    <div className='font-semibold text-2xl text-white'>
                        Welcome Back, {isConnected ? userAddress : 'Guest'}
                    </div>
                    <div className="text-sm text-[#B2B2B2]">{formatDate()}</div>
                </div>
            </div>
            <div className="mt-10 flex flex-col space-y-2 xl:space-y-0 xl:flex-row justify-between">
                <NumberCards icon={<FaGasPump />} iconColor="#FFF" title="Methane Detection Capacity" number="1000+" />
                <NumberCards icon={<IoSpeedometer />} iconColor="#FFF" title="Detection Speed" number="30s" />
                <NumberCards icon={<IoPeople />} iconColor="#FFF" title="Empowering Communities" number="1M+" />
                <NumberCards icon={<FaShieldAlt />} iconColor="#FFF" title="Safety Assurance" number="95%" />
                <NumberCards icon={<BsBuildingsFill />} iconColor="#FFF" title="Benefiting Organizations" number="500+" />
            </div>
        </div>
    );
};

export default MiscelleanousData;
