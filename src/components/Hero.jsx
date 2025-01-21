import React from 'react'
import profile from '../assets/photoM.jpg'
import { HERO_CONTENT } from '../constants/index.js'
const Hero = () => {
  return (
    <div className='flex flex-wrap '>
      <div className='w-full lg:w-1/2 '>
        <h2 className='text-white pb-2 text-3xl tracking-tighter lg:text-8xl lg:mt-10'>Malavika M</h2>
        <span className='bg-gradient-to-r from-stone-300 to-stone-600 text-2xl lg:text-5xl tracking-tight text-transparent bg-clip-text'>Budding Tech Enthusiast</span>
        <p className='mt-[-5px] lg:mt-3 text-sm my-2 max-w-lg py-6 lg:text-xl text-justify leading-relaxed tracking-tighter text-white'>
            {HERO_CONTENT}
        </p>
        <a className='mt-[10px] lg:mt-0 p-3 bg-white rounded-full lg:p-4 text-sm text-stone-800 mb-10' 
        href='' target='_blank'>
        DOWNLOAD 
        </a>
      </div>
      <div className='flex justify-center mt-[25px] lg:p-8 lg:mt-[-15px] '>
        <img src={profile} className='border border-stone-900 rounded-3xl ' alt='profile' width={300} height={300} />

      </div>
    </div>
  )
}

export default Hero
