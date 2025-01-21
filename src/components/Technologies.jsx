import React from 'react'
import { motion } from 'framer-motion';
import { FaC } from 'react-icons/fa6';
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
//import { animate, inertia, inView,Motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className='mt-[-50px] lg:mt-[-20px] pb-14 lg:pb-24'>
        <div className="border-t border-white opacity-0 lg:opacity-25" ></div>
        <motion.h2 
        whileInView={{opacity:1 ,y:0}}
        initial={{opacity:0 ,y:-100}}
        transition={{duration:1}}
        className='my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight'>
        TECHNOLOGIES
        </motion.h2>
        <motion.div 
        whileInView={{opacity:1 ,x:0}}
        initial={{opacity:0 ,x:-100}}
        transition={{duration:1}}
        className='mt-[-15px] lg:mt-0 flex flex-wrap items-center justify-center gap-12'>
            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(2)}
             className='p-4'
             >
              <FaPython className='text-7xl text-yellow-300'/>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(4)}
             className='p-4'>
              <FaJava  className='text-7xl '/>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(3)}
             className='p-4'>
              <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
             initial="initial"
             animate="animate"
             variants={iconVariants(6.5)}
             className='p-4'>
              <FaC className='text-7xl '/>
            </motion.div>
            <motion.div
             initial="initial"
             animate="animate"
             variants={iconVariants(5)}
             className='p-4'>
              <SiCanva className='text-7xl text-blue-700'/>
            </motion.div>
          

        </motion.div>
    </div>
  )
}


export default Technologies
400