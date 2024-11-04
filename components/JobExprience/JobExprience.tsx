import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'; // Correctly importing icons from Font Awesome
import { SiUpwork, SiFiverr } from 'react-icons/si'; // Importing available brand icons from Simple Icons
 
// Ensure your image paths are correct relative to your 'assets' directory
import upwork_logo from '../assets/upwork_img.webp';
import wiser_logo from '../assets/wiser_img.webp';
import fiverr_logo from '../assets/fiverr_img.svg';

function JobExperience() {
  return (
    <div className='experience py-16 '>
      {/* Title Section */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-black dark:text-white mb-4'>Work Experience</h1>
        <p className='text-lg text-black dark:text-white'>A few places where I have worked and honed my skills</p>
      </div>

      {/* Work Experience Cards */}
      <div className='work_experience grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20'>
        {/* Upwork Experience Card */}
        <div className='card bg-white shadow-xl rounded-3xl p-6 relative transform hover:-translate-y-2 transition-all duration-300'>
          <div className='icon bg-green-600 p-3 rounded-full text-white absolute -top-8 left-1/2 transform -translate-x-1/2'>
            <SiUpwork size={24} />
          </div>
          <div className='text-center mt-6'>
            <Image src={upwork_logo} alt='Upwork Logo' width={100} height={100} className='mx-auto mb-4' />
            <h2 className='text-2xl font-bold text-green-600'>TOP RATED FREELANCER</h2>
            <p className='text-gray-700 mt-2 mb-4'>6000+ HOURS WORKED</p>
            <p className='text-gray-600 mb-4 text-lg'>Top Rated professionals represent the top 10% of talent on Upwork.</p>
            <a href='https://www.upwork.com/freelancers/~01f8a99f3c8f01f245' target='_blank' className='text-green-700 flex items-center justify-center hover:text-green-500 transition-colors duration-200'>
              See Profile <FaExternalLinkAlt className='ml-2' />
            </a>
          </div>
        </div>

        {/* Wiser Solution Experience Card */}
        <div className='card bg-white shadow-xl rounded-3xl p-6 relative transform hover:-translate-y-2 transition-all duration-300'>
          <div className='icon bg-purple-600 p-3 rounded-full text-white absolute -top-8 left-1/2 transform -translate-x-1/2'>
            <FaCalendarAlt size={24} />
          </div>
          <div className='text-center mt-6'>
            <Image src={wiser_logo} alt='Wiser Logo' width={100} height={100} className='mx-auto mb-4' />
            <h2 className='text-2xl font-bold text-gray-800'>WISER SOLUTION</h2>
            <p className='text-purple-600 mt-2 mb-4 font-semibold'>May 15, 2023 - Oct 15, 2023</p>
            <p className='text-gray-600 mb-4 text-lg'>I developed and maintained web scrapers, contributing to critical data collection efforts.</p>
          </div>
        </div>

        {/* Fiverr Experience Card */}
        <div className='card bg-white shadow-xl rounded-3xl p-6 relative transform hover:-translate-y-2 transition-all duration-300'>
          <div className='icon bg-green-600 p-3 rounded-full text-white absolute -top-8 left-1/2 transform -translate-x-1/2'>
            <SiFiverr size={24} />
          </div>
          <div className='text-center mt-6'>
            <Image src={fiverr_logo} alt='Fiverr Logo' width={100} height={100} className='mx-auto mb-4' />
            <h2 className='text-2xl font-bold text-green-600'>100+ Orders Completed</h2>
            <p className='text-gray-600 mb-4 text-lg'>Fiverr connects freelancers with clients who need their services.</p>
            <a href='https://www.fiverr.com/farhan1360' target='_blank' className='text-green-700 flex items-center justify-center hover:text-green-500 transition-colors duration-200'>
              See Profile <FaExternalLinkAlt className='ml-2' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobExperience;
