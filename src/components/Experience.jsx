import React from 'react'
import { EXPERIENCES } from '../constants'
const Experience = () => {
  return (
    <div >
      <h2 className="my-20 text-center  text-3xl  lg:text-6xl lg:leading-normal tracking-tight  "
      >EXPERIENCE</h2>
      <div className="mt-[-15px] lg:mt-0">
        {EXPERIENCES.map((Experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-fulll lg:w-1/4'>
            <p className='mb-2 text-sm text-stone-400'>{Experience.year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
            <h3 className='mb-2 font-semibold'>
              {Experience.role}-{" "}
              <span className='text-sm text-slate-500'>
                {Experience.company}
              </span>
            </h3>
            <p className='mb-4 text-stone-400'> {Experience.description}</p>
            {Experience.technologies.map((tech, index) => (
              <span className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 '
               key={index}>
                {tech}
              </span>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
