import React from 'react'
import Doctor from '../images/doctors4.jpg';
import { Link } from 'react-router-dom';

const Mission = () => {
  return (
    <div id="mission" className='w-full bg-[#fcb900] py-10 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Doctor} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>OUR MISSION</h1>
          <p>
          The Asali Foundation is a non-profit organization dedicated to improving the lives of
          people living with diabetes and raising awareness about the condition. We also aim to educate
          communities on how to properly care for those with diabetes. Our top priority is to create a better
          world for everyone by taking proactive measures to prevent diabetes. We believe that sharing
          knowledge can save lives and we encourage a safe and positive environment for those affected by
          diabetes. Our ultimate goal is to invest in sustainable health for all. The foundation is headquartered
          in Kinshasa, Democratic Republic of Congo.
          </p>
          <Link to='/About'><button className='bg-white text-orange-800 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:scale-105 duration-300'>Learn more about us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Mission