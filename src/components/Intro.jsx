import React from 'react'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='text-black py-4'>
        <div className='max-w-[900px] w-full h-[650px] mx-auto text-center flex flex-col justify-center p-2'>
            <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold md:py-4'>
            Addressing Diabetes in the Democratic Republic of Congo
            </h1>

            <p className='md:text-2xl text-xl font-bold text-gray-500 py-2'>A significant portion of the population in the Democratic Republic of Congo (D.R.C) - approximately 3.5 to 14% - currently lives with or is at high risk of developing diabetes. This prevalence is a growing concern worldwide, particularly in developing countries like the DRC where access to adequate healthcare and resources is limited. Therefore, effective measures are essential. One approach is to raise public awareness and provide education about diabetes. Additionally, easing the financial burden on individuals and families, especially in low-income countries like the DRC, is crucial. By addressing these challenges, we can strive to improve the health and well-being of those living with diabetes in the DRC.</p>
        </div> 
    </div>
  )
}

export default Intro