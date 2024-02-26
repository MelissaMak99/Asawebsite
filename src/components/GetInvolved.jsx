import React from 'react'
import { RiUserHeartLine, 
    RiHandHeartFill, 
    RiTeamLine, 
    RiMoneyDollarCircleLine } from 'react-icons/ri';
import { MdOutlineReduceCapacity } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from 'react-router-dom';

function GetInvolved() {
  return (
    <div id="getinvolved" className='text-center p-5 bg-grey-500'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-4'>
            GET INVOLVED
        </h1>
    <div className="flex flex-wrap justify-center mt-5">
    <a href={'https://forms.gle/gNToJs9e7UFvZxp17'} target="_blank" rel="noopener noreferrer"><button className="w-64 h-64 rounded overflow-hidden shadow-lg mx-2 mb-4 transform transition-transform hover:shadow-dark hover:scale-105 hover:bg-gray-100 focus:outline-none focus:shadow-dark focus:scale-105">
        <div className="px-6 py-4 text-[#fcd12a]">
          <div className="text-center">
            <RiHandHeartFill className="inline-block mb-2 text-3xl" />
            <h4 className="text-xl mb-2">Become a Member</h4>
          </div>
        </div>
      </button></a>
      <Link to='/Donate'><button className="w-64 h-64 rounded overflow-hidden shadow-lg mx-2 mb-4 transform transition-transform hover:shadow-dark hover:scale-105 hover:bg-gray-100 focus:outline-none focus:shadow-dark focus:scale-105">
        <div className="px-6 py-4 text-[#fcd12a]">
          <div className="text-center">
            <RiUserHeartLine className="inline-block mb-2 text-3xl" />
            <h4 className="text-xl mb-2">Donate</h4>
          </div>
        </div>
      </button></Link>
      <button className="w-64 h-64 rounded overflow-hidden shadow-lg mx-2 mb-4 transform transition-transform hover:shadow-dark hover:scale-105 hover:bg-gray-100 focus:outline-none focus:shadow-dark focus:scale-105">
        <div className="px-6 py-4 text-[#fcd12a]">
          <div className="text-center">
            <MdOutlineReduceCapacity className="inline-block mb-2 text-3xl" />
            <h4 className="text-xl mb-2">Educational Workshops</h4>
          </div>
        </div>
      </button>
      <button className="w-64 h-64 rounded overflow-hidden shadow-lg mx-2 mb-4 transform transition-transform hover:shadow-dark hover:scale-105 hover:bg-gray-100 focus:outline-none focus:shadow-dark focus:scale-105">
        <div className="px-6 py-4 text-[#fcd12a]">
          <div className="text-center">
            <TiGroup className="inline-block mb-2 text-3xl" />
            <h4 className="text-xl mb-2">Local Group Supports</h4>
          </div>
        </div>
      </button>
      <button className="w-64 h-64 rounded overflow-hidden shadow-lg mx-2 mb-4 transform transition-transform hover:shadow-dark hover:scale-105 hover:bg-gray-100 focus:outline-none focus:shadow-dark focus:scale-105">
        <div className="px-6 py-4 text-[#fcd12a]">
          <div className="text-center">
            <GiReceiveMoney className="inline-block mb-2 text-3xl" />
            <h4 className="text-xl mb-2">Fundraising</h4>
          </div>
        </div>
      </button>
  </div>
  </div>
  )
}

export default GetInvolved