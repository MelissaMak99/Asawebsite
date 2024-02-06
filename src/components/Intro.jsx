import React from 'react'
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] w-full h-[650px] mx-auto text-center flex flex-col justify-center'>
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold md:py-4'>
                RENFORCONS LA SANTE RURALE ENSEMBLE.
            </h1>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>À Asali Foundation, nous sommes engagés dans une mission visant à promouvoir des techniques de prévention des maladies dans les zones rurales. Rejoignez-nous pour créer un avenir plus sain pour tous.</p>
            <Link to='/Donate'><button className='bg-[#fcb900] hover:bg-[#FFA500] text-white w-[200px] rounded-md font-medium my-8 mx-auto py-3'>Donate</button></Link>
        </div> 
    </div>
  )
}

export default Intro