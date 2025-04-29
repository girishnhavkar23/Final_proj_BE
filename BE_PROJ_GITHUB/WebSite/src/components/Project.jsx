"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div>
        <div className="pt-5 pb-20 bg-gradient-to-br from-black to-[#1A1A1A] flex flex-col items-center">
            <div className="text-part px-10 xl:px-0 flex flex-col items-center">
                <div className="mt-6 xl:mt-10 font-semibold text-2xl xl:text-4xl xl:w-[60%] text-center text-white">
                    Transform Your Methane Detection Experience with Advanced Technology
                </div>
                <div className="mt-6 xl:mt-10 text-center xl:w-[50%] text-sm xl:text-lg text-[#737373]">
                    Discover the innovative tools and functionalities that make our Methane Detection solution the ultimate technology for environmental monitoring.
                </div>
            </div>
            <div className="project-cards flex max-w-[450px] xl:max-w-none flex-col items-center xl:flex-row space-y-8 xl:space-y-0 xl:justify-between xl:space-x-5 pt-10 px-10">
                <ProjectCard 
                    title="Real-Time Methane Detection"
                    description="Utilize advanced algorithms to detect methane emissions in real-time using hyperspectral imaging."
                    imageLink="https://www.zuehlke.com/sites/default/files/images/continuous-methane-leak-detection.jpg" // Replace with a relevant image
                    redirectLink="/real-time-detection"
                />
                <ProjectCard 
                    title="Analyze Hyperspectral Data"
                    description="Process and analyze hyperspectral images to identify methane sources accurately."
                    imageLink="https://upload.wikimedia.org/wikipedia/commons/4/48/HyperspectralCube.jpg" // Replace with a relevant image
                    redirectLink="/analyze-data"
                />
                <ProjectCard 
                    title="Integrate Multispectral Imagery"
                    description="Combine multispectral images to enhance detection capabilities and provide actionable insights."
                    imageLink="https://www.alliedmarketresearch.com/blog/Blog_image/JybXj3kRQL.jpeg" // Replace with a relevant image
                    redirectLink="/integrate-multispectral"
                />
            </div>
        </div>
    </div>
  )
}

export default Project;
