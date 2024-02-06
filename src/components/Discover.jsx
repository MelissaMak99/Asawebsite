import React from 'react'
import Test from '../images/testing1.jpg';
import Karela from '../images/karela3.jpg';


const Discover = () => {
  return (
    <div id="discover" className=' text-center w-full py-[5rem] px-4 bg-white'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>DISCOVER</h1>
        <p class="text-2xl sm:text-xl text-center py-5 mb-5">Unlock the Path to Understanding Diabetes: Explore and Learn Today.</p>

      <div className='max-w-[1000px] mx-auto grid md:grid-cols-2 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg'>
              <img className='w-50 mx-auto mt-[-3rem] bg-white' src={Test} alt="/" />
              <h2 className='text-yellow-500 text-2xl font-bold text-center py-8'>Curious about what you truly know about diabetes?</h2>
              <p className='text-center text-xl'>Join us in a quick journey to unravel the facts and myths surrounding this common condition.</p>
              <button className='bg-yellow-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Read more</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg '>
              <img className='w-50 mx-auto mt-[-3rem] bg-transparent' src={Karela} alt="/" />
              <h2 className='text-yellow-500 text-2xl font-bold text-center py-8'>The Power of Karela: A Sweet Solution for Diabetes</h2>
              <p className='text-center text-xl'>Learn about the simple yet incredible benefits of Karela (Bitter Melon) in managing diabetes.</p>
              <button className='bg-yellow-500 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Read more</button>
          </div>
      </div>
    </div>
  );
};

export default Discover