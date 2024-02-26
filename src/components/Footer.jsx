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
        <p className='py-2 text-sm'>Operating hours: Monday-Friday 9 am- 5pm</p>
        <p className='py-2 text-sm'>info@asalifoundation.org</p>
        <p className='py-2 text-sm'>+243 XXX XXX XXXX</p>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-black'>Our work</h6>
        <ul>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>What we do</li>
            <li className='py-2 text-sm'>Our projects</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>About diabetes</h6>
        <ul>
            <li className='py-2 text-sm'>About the condition</li>
            <li className='py-2 text-sm'>Life with diabetes</li>
            <li className='py-2 text-sm'>Health wellness</li>
            <li className='py-2 text-sm'>Articles</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-black'>Ways to contribute</h6>
        <ul>
            <li className='py-2 text-sm'>Become a member</li>
            <li className='py-2 text-sm'>Donate</li>
            <li className='py-2 text-sm'>Educational workshops</li>
            <li className='py-2 text-sm'>Local group supports</li>
            <li className='py-2 text-sm'>Fundraising </li>
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