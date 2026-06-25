import React from 'react'
import { ExternalLink } from 'lucide-react' // Clean modern icon for external links
import img1 from "../assets/themescart.png"
import img2 from "../assets/kindora9.png"
import img3 from "../assets/radinik.png"
import img4 from "../assets/travellingtaco.png"
import img5 from "../assets/astrogazing.png"
import img6 from "../assets/earthspatial.png"

const WordpressProject = () => {
    const projects = [
        {
            id: 1,
            image: img1,
            title: 'ThemesCart - E-Commerce',
            desc: 'Developed and customized WordPress website layouts. Implemented WooCommerce store functionality. Created responsive pages across all devices. Enhanced content management experience.',
            tech: ['WordPress', 'WooCommerce', 'Elementor'],
            link: 'https://themescart.com/' 
        },
        {
            id: 2,
            image: img2,
            title: 'Kindora9 - Education',
            desc: 'Developed and customized the Shopify storefront experience. Implemented responsive and user-friendly page layouts. Built custom sections to improve product presentation. Maintained performance, usability, and mobile optimization.',
            tech: ['WordPress', 'PHP', 'Elementor'],
            link: 'https://kindora9.in/'
        },
        {
            id: 3,
            image: img3,
            title: 'Radinik - Machine Manufactering',
            desc: 'Developed professional business website pages. Implemented responsive layouts and design elements. Created custom service and product sections. Enhanced user experience and accessibility.',
            tech: ['WordPress', 'Elementor', 'HTML','CSS'],
            link: 'https://radinik.com/'
        },
        {
            id: 4,
            image: img4,
            title: 'TravellingTaco - Travel',
            desc: 'Developed responsive travel-focused web pages. Customized WordPress layouts and content sections. Implemented modern UI and navigation features. Enhanced overall user experience.',
            tech: ['WordPress', 'Elementor', 'HTML', 'CSS'],
            link: 'https://travellingtaco.com/'
        },
        {
            id: 5,
            image: img5,
            title: 'AstrogazingHub - Events',
            desc: 'Built responsive WordPress website interfaces. Developed custom pages and content layouts. Implemented user-friendly navigation systems. Optimized website performance and accessibility.',
            tech: ['WordPress', 'PHP', 'Elementor'],
            link: 'https://astrogazinghub.in/'
        },
        {
            id: 6,
            image: img6,
            title: 'Earthspatial - GIS Services',
            desc: 'Built responsive service-based website interfaces. Developed custom pages and content structures. Implemented modern UI and navigation systems. Optimized website performance and usability.',
            tech: ['WordPress', 'PHP', 'Elementor'],
            link: 'https://earthspatial.in/'
        },
    ]

    return (
        <section className='max-w-6xl mx-auto flex justify-between items-center py-20' id="wordpress-projects">
            <div className='container mx-auto max-w-7xl'>
                
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white tracking-wide'>
                        WordPress Projects
                    </h2>
                    <div className='w-28 h-1 bg-primary mx-auto mt-3 rounded-2xl shadow-[0_0_8px_#06a2c2]'></div>
                </div>

              
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

                                    {/* Live View Link Button */}
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

export default WordpressProject;
