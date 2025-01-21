import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'
const Contacts = () => {
  return (
    <div className='mt-[-10px] pb-10'>
        <div className='border-t border-white opacity-25 '></div>
        <div className='text-sm text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{ opacity: 0,x: -100}}
            transition={{duration: 1}}
            className='my-4'>
              {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, x: 0 }}
            initial={{opacity:0, x:100 }}
            transition={{duration: 1 }}
            className='my-2'>
              {CONTACT.phoneNo}
            </motion.p>
            <motion.p
            whileInView={{opacity :1,x:0}}
            initial={{opacity:0 ,x: -100}}
            transition={{duration:1}}
            className='my-2'>
              {CONTACT.email}
            </motion.p>
        </div> 
    </div>
  )
}

export default Contacts
