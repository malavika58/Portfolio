import React from 'react'
import profile from '../assets/photoM.jpg'
import { HERO_CONTENT } from '../constants/index.js'
import { motion } from 'framer-motion'


const containerVariants = {
  hidden: { opacity: 0, x: -100},
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5},
  }
}

const childVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity:1, x: 0, transition: {duration: 0.5}}
}

const Hero = () => {
  return (
    <motion.div 
    initial="hidden"
      animate="visible"
      variants={containerVariants}
    className='flex flex-wrap '>
      <div 
      className='w-full lg:w-1/2 '>
        <motion.h2
          variants={childVariants}
          className='text-white pb-2 text-3xl tracking-tighter lg:text-8xl lg:mt-10'>
          Malavika M
        </motion.h2>
        <motion.span 
         variants={childVariants}
         className='bg-gradient-to-r from-stone-300 to-stone-600 text-2xl lg:text-5xl tracking-tight text-transparent bg-clip-text'>
          Budding Tech Enthusiast
        </motion.span>
        <motion.p 
          variants={childVariants}
          className='mt-[-5px] lg:mt-3 text-sm my-2 max-w-lg py-6 lg:text-xl text-justify leading-relaxed tracking-tighter text-white'>
          {HERO_CONTENT}
        </motion.p>
        <motion.a
          variants={childVariants}
          href='' 
          target='_blank'
          rel="noopener noreferrer"
          download
          className='mt-[10px] lg:mt-0 p-3 bg-white rounded-full lg:p-4 text-sm text-stone-800 mb-10' 
        >
          DOWNLOAD 
        </motion.a>
      </div>
      <div 

        className='flex justify-center mt-[25px] lg:p-8 lg:mt-[-15px] '>
        <motion.img 
        src={profile} 
        alt='profile'
        className='border border-stone-900 rounded-3xl '
        width={300} 
        height={300} 
        initial={{ x: 100, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        transition={{duration:1, delay: 1.5}}
        />

      </div>
    </motion.div>
  )
}

export default Hero
