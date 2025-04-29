// "use client";

// import React from 'react'

// const Hero = () => {
//   return (
//     <div className='hero bg-gradient-to-br from-black to-[#1A1A1A] px-5 py-10 flex flex-col space-y-8'>
//         <div className="flex flex-col justify-center items-start xl:items-center  ">
//             <div className="headline font-semibold text-2xl xl:text-5xl xl:w-[60%] text-start xl:text-center mb-6 text-white">Revolutionizing Methane Detection with Advanced Imaging Techniques</div>
//             <div className="tagline text-sm xl:text-lg w-[80%]  xl:w-[60%] text-start xl:text-center text-[#98989C]">Utilize hyperspectral and multispectral imaging alongside 3D CNNs to enhance methane detection capabilities and ensure a safer environment.</div>
//         </div>

//         <div className="buttons flex items-center  justify-start xl:justify-center space-x-3 text-xs xl:text-sm font-semibold">
//             <div className="">
//                 <button className='bg-white text-black px-5 py-2 rounded-lg hover:bg-white'>Get Started</button>
//             </div>
//             <div className="">
//                 <button className='border border-white text-white px-5 py-2 rounded-lg'>Learn More</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero;

// "use client";
// import ContactForm from '../components/ContactForm';

// import React from 'react';

// const Hero = () => {
//   return (
//     <div
//       className='hero relative bg-gradient-to-br from-black to-[#1A1A1A] px-5 py-10 flex flex-col space-y-8'
//       style={{
//         backgroundImage: "url('https://media.licdn.com/dms/image/D5612AQGnLwj-sZlepw/article-cover_image-shrink_600_2000/0/1715320302641?e=2147483647&v=beta&t=mC4eqjAjrEzzRFdmE5nosX6p-8_N_d3J2HkxTFWfqtY')",
//         backgroundSize: "contain", // Adjusted to contain
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundAttachment: "fixed" // Ensures image stays in place while scrolling
//       }}
//     >
//       {/* Dark overlay for better contrast */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       <div className="flex flex-col justify-center items-start xl:items-center relative z-10">
//         <div className="headline font-semibold text-2xl xl:text-5xl xl:w-[60%] text-start xl:text-center mb-6 text-white">
//         Revolutionizing Methane Detection with Advanced Imaging Techniques
//         </div>
//         <div className="tagline text-sm xl:text-lg w-[80%] xl:w-[60%] text-start xl:text-center text-[#98989C]">
//         Utilize hyperspectral and multispectral imaging alongside 3D CNNs to enhance methane detection capabilities and ensure a safer environment.
//         </div>
//       </div>

//       <div className="buttons flex items-center justify-start xl:justify-center space-x-3 text-xs xl:text-sm font-semibold relative z-10">
//         <div>
//           <button className='bg-white text-black px-5 py-2 rounded-lg hover:bg-white'>
//             Try for Free
//           </button>
//         </div>
//         <div>
//           <button className='border border-white text-white px-5 py-2 rounded-lg' onClick={ContactForm}   >
//             Contact Us

//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const handleContactClick = () => {
    setShowForm(!showForm); // toggles form visibility
  };

  return (
    <div
      className="hero relative bg-gradient-to-br from-black to-[#1A1A1A] px-5 py-10 flex flex-col space-y-8"
      style={{
        backgroundImage:
          "url('https://media.licdn.com/dms/image/D5612AQGnLwj-sZlepw/article-cover_image-shrink_600_2000/0/1715320302641?e=2147483647&v=beta&t=mC4eqjAjrEzzRFdmE5nosX6p-8_N_d3J2HkxTFWfqtY')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col justify-center items-start xl:items-center relative z-10">
        <div className="headline font-semibold text-2xl xl:text-5xl xl:w-[60%] text-start xl:text-center mb-6 text-white">
          Revolutionizing Methane Detection with Advanced Imaging Techniques
        </div>
        <div className="tagline text-sm xl:text-lg w-[80%] xl:w-[60%] text-start xl:text-center text-[#98989C]">
          Utilize hyperspectral and multispectral imaging alongside 3D CNNs to
          enhance methane detection capabilities and ensure a safer environment.
        </div>
      </div>

      <div className="buttons flex items-center justify-start xl:justify-center space-x-3 text-xs xl:text-sm font-semibold relative z-10">
        <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-white">
          Try for Free
        </button>
        <Link href="/contact">
          <button className="border border-white text-white px-5 py-2 rounded-lg">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Conditionally render the contact form */}
      {showForm && (
        <div className="relative z-10 mt-8">
          <ContactForm />
        </div>
      )}
    </div>
  );
};

export default Hero;
