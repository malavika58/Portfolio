import React from 'react'
import { PROJECTS } from "../constants"
const Projects = () => {
  return (
    <div className='mt-[-50px] lg:mt-[-70px] pb:14 lg:pb-7'>
      <h2 className='my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight'>
       PROJECTS
      </h2>
      <div>
        {PROJECTS.map((Project, index) => (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <img src={Project.image}
                     width={250}
                     height={250}
                     alt={Project.title}
                     className='mt-[-20px] mb-6 rounded'
                     />
                </div>
                <div className='lg:mt-10 w-full max-w-xl lg:w-3/4'>
                <h3 className='mb-2 font-semibold text-xl'>{Project.title}</h3>
                <p className='mb-4 text-stone-400'>{Project.description}</p>
                {Project.technologies.map((tech, index) => (
                    <span className='mr=2 ml-2 rounded bg-slate-900 p-2 text-sm font-medium text-stone-300'
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

export default Projects
