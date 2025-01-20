import React from 'react'
import { FaC } from 'react-icons/fa6';
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
const Technologies = () => {
  return (
    <div className='mt-[-50px] lg:mt-[-20px] pb-14 lg:pb-24'>
        <div className="border-t border-white opacity-0 lg:opacity-25" ></div>
        <h2 className='my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight'>
         Technologies
        </h2>
        <div className='mt-[-15px] lg:mt-0 flex flex-wrap items-center justify-center gap-4'>
            <div className='p-4'>
              <FaPython className='text-7xl text-yellow-300'/>
            </div>
            <div className='p-4'>
              <FaJava  className='text-7xl '/>
            </div>
            <div className='p-4'>
              <FaHtml5 className='text-7xl text-orange-500'/>
            </div>
            <div className='p-4'>
              <FaC className='text-7xl '/>
            </div>
          

        </div>
    </div>
  )
}

export default Technologies
400