import React from 'react'
import { ExternalLink } from 'lucide-react' // Clean modern icon for external links
import img1 from "../assets/nupur.png"
import img2 from "../assets/onandon.png"
import img3 from "../assets/justbags.png"
import img4 from "../assets/ofsign.png"
import img5 from "../assets/levesaa.png"
import img6 from "../assets/kinestix.png"

const Project = () => {
    const projects = [
        {
            id: 1,
            image: img1,
            title: 'The Dressing Room - Clothing',
            desc: 'Developed custom Shopify storefront and theme sections. Implemented responsive layouts across all devices. Enhanced shopping experience and navigation flow. Optimized website performance and usability.',
            tech: ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://dressingroomjaipur.com/' // ADDED: Your live project links go here
        },
        {
            id: 2,
            image: img2,
            title: 'On and On - Clothing',
            desc: 'Customized Shopify theme and page templates. Developed responsive ecommerce user interfaces. Implemented custom sections and design elements. Enhanced customer shopping experience.',
            tech: ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://onandon.co.in/'
        },
        {
            id: 3,
            image: img3,
            title: 'Justbags - Bags',
            desc: 'Developed ecommerce pages and custom sections. Implemented responsive design and UI improvements. Customized product and collection page layouts. Enhanced overall shopping experience.',
            tech: ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://justbags.in/'
        },
        {
            id: 4,
            image: img4,
            title: 'Ofsign - Bags',
            desc: 'Customized Shopify theme and product pages. Built responsive user interfaces for customers.Implemented custom storefront functionality. Maintained performance and mobile optimization.',
            tech: ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://ofsign.com/'
        },
        {
            id: 5,
            image: img5,
            title: 'Levesaa - FMGC',
            desc: 'Built custom Shopify storefront components.Implemented responsive layouts and product displays. Customized theme functionality and content sections. Optimized website performance and user experience.',
            tech:  ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://levesaa.com/'
        },
        {
            id: 6,
            image: img6,
            title: 'Kinestix - Health Care',
            desc: 'Built custom Shopify storefront solutions. Implemented responsive layouts and navigation. Customized product presentation and content pages. Maintained performance and usability standards.',
            tech:  ['Shopify','Liquid','HTML', 'CSS'],
            link: 'https://kinestix.com/'
        },
    ]

    return (
        <section className='max-w-6xl mx-auto flex justify-between items-center py-20' id="projects">
            <div className='container mx-auto max-w-7xl'>
                
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-2xl md:text-5xl font-extrabold text-white tracking-wide'>
                       Shopify Projects
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-3 rounded-2xl shadow-[0_0_8px_#06a2c2]'></div>
                </div>

                {/* Grid Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4'>
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="bg-[#0f172a] rounded-xl overflow-hidden border border-gray-800
                            shadow-md hover:shadow-[0_4px_20px_rgba(6,162,194,0.15)] hover:scale-[1.03]
                            transition-all duration-300 flex flex-col group"
                        >
                            {/* Project Image */}
                            <div className="overflow-hidden h-48 w-full relative">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                />
                            </div>

                            {/* Project Details */}
                            <div className='p-6 flex flex-col flex-1 justify-between'>
                                <div>
                                    <h3 className='text-xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-400 text-sm mt-2 line-clamp-5'>
                                        {project.desc}
                                    </p>
                                </div>

                                <div>
                                    {/* Tech Stack Badges */}
                                    <div className='flex flex-wrap gap-2 mt-5'>
                                        {project.tech.map((techItem, idx) => (
                                            <span 
                                                key={idx}
                                                className='text-xs px-3 py-1 bg-[#1e293b] text-gray-300 font-medium
                                                rounded-md border border-gray-700'
                                            >
                                                {techItem}
                                            </span>
                                        ))}
                                    </div>

                                    {/* ADDED: Live View Link Element below the technology tags */}
                                    <div className='mt-6 pt-4 border-t border-gray-800/60 flex justify-between items-center'>
                                        <a 
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors duration-300 group/link'
                                        >
                                            View Website 
                                            <ExternalLink size={15} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Project;
