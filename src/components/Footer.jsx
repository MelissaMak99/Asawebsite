import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitterSquare,
  } from 'react-icons/fa';
import Logo from '../images/Asali-1 (2).jpg';

const Footer = () => {
  return (
    <div className='max-w-[1240px] max-h-[500px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-black'>
      <div>
        <img className='w-[100px] md:w-[200px]' src={Logo} alt='Not found' />
        <p className='py-2 text-sm'>Adresse: 123 Main Street, City, Country</p>
        <p className='py-2 text-sm'>Téléphone: +1 123-456-7890</p>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-black'>Features</h6>
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Our Story</li>
            <li className='py-2 text-sm'>Get Involved</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Resources</h6>
        <ul>
            <li className='py-2 text-sm'>Discover</li>
            <li className='py-2 text-sm'>Events</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Compay</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Follow Us</h6>
        <div className='flex justify-between md:w-[75%] my-6 space-x-3'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaLinkedin size={30}/>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Footer