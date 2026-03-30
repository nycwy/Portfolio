import React from 'react'
import Projectcard from '../components/Projectcard'
import { projects } from '../data/projects'

const Projects = () => {
    return (
        <section id='projects' className='bg-[#0f172a] py-10 text-white'>
            {/* Section Header */}
            <div className='flex justify-center mb-12 px-6 md:px-28'>
                <h2 className='text-4xl text-white font-bold uppercase tracking-tighter border-b-4 border-orange-500 pb-2'>
                    Projects
                </h2>
            </div>

            <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-12 px-6 md:px-28 max-w-7xl mx-auto'>
                {projects.map((project) => (
                    <Projectcard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.imgUrl}
                        link={project.link}
                    />
                ))}
            </section>
        </section>
    )
}

export default Projects;