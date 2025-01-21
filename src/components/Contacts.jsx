import React from 'react'
import { CONTACT } from '../constants'
const Contacts = () => {
  return (
    <div className='mt-[-10px] pb-10'>
        <div className='border-t border-white opacity-25 '></div>
        <div className='text-sm text-center tracking-tighter'>
            <p className='my-4'>
              {CONTACT.address}
            </p>
            <p className='my-2'>
              {CONTACT.phoneNo}
            </p>
            <p className='my-2'>
              {CONTACT.email}
            </p>
        </div> 
    </div>
  )
}

export default Contacts
