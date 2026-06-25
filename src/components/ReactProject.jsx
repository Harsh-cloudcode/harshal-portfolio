import React from 'react'
import proj1 from "../assets/hero.png"

const ReactProject = () => {
    const projects = [
        {
            id: 1,
            image: proj1,
            title: 'E-Commerce Platform',
            desc: 'Modern e-commerce solution',
            tech: ['Shopify', 'HTML', 'CSS']
        },
        {
            id: 2,
            image: proj1,
            title: 'Corporate Website',
            desc: 'High-performance WordPress site',
            tech: ['WordPress', 'PHP', 'Tailwind']
        },
        {
            id: 3,
            image: proj1,
            title: 'Custom Brand Store',
            desc: 'Fully customized headless storefront',
            tech: ['Shopify', 'Liquid', 'JavaScript']
        },
        {
            id: 4,
            image: proj1,
            title: 'E-Commerce Platform',
            desc: 'Modern e-commerce solution',
            tech: ['Shopify', 'HTML', 'CSS']
        },
        {
            id: 5,
            image: proj1,
            title: 'Corporate Website',
            desc: 'High-performance WordPress site',
            tech: ['WordPress', 'PHP', 'Tailwind']
        },
        {
            id: 6,
            image: proj1,
            title: 'Custom Brand Store',
            desc: 'Fully customized headless storefront',
            tech: ['Shopify', 'Liquid', 'JavaScript']
        },
    ]

    return (
        <section className='max-w-6xl mx-auto flex justify-between items-center
        py-20 ' id="projects">
            <div className='container mx-auto  max-w-7xl'>
                
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-wide'>
                        React Projects
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-3 rounded-2xl shadow-[0_0_8px_#06a2c2]'></div>
                </div>

               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project) => (
                         <div 
                            key={project.id}
                            className="bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800
                            shadow-md hover:shadow-[0_4px_20px_rgba(6,162,194,0.15)] hover:scale-[1.03]
                            transition-all duration-300 flex flex-col group"
                        >
                        
                            <div className="overflow-hidden h-48 w-full relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>

                           
                            <div className='p-6 flex flex-col flex-1 justify-between'>
                                <div>
                                    {/* 3. Fixed plural tracking bug: changed projects to project */}
                                    <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-400 text-sm mt-2 line-clamp-2'>
                                        {project.desc}
                                    </p>
                                </div>

                              
                                <div className='flex flex-wrap gap-2 mt-5'>
                                    {project.tech.map((techItem, idx) => (
                                        <span 
                                            key={idx}
                                            className='text-xs px-3 py-1 bg-[#1e293b] text-gray-300 font-medium
                                            rounded-md border border-gray-700 hover:border-primary hover:text-white transition-colors duration-300'
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ReactProject;
