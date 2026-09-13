import React from 'react'
import { ExternalLink } from 'lucide-react' // Clean modern icon for external links
import img1 from "../assets/resumeai.PNG"
import img2 from "../assets/astro.PNG"
import img3 from "../assets/chatbot.PNG"


const Project = () => {
    const projects = [
        {
            id: 1,
            image: img1,
            title: 'AI Resume Analyser',
            desc: 'An AI-powered recruitment tool that analyses resumes against job-specific questions and evaluates candidates based on their skills, experience, and responses. Built with a recruiter-focused workflow for candidate analysis, scoring, and shortlisting.',
            tech: ['React.js', 'Next.js', 'FastAPI', 'MongoDB', 'Vercel', 'Render'],
            link: 'https://ai-resume-analyser-brown-sigma.vercel.app/analytics' // ADDED: Your live project links go here
        },
        {
            id: 2,
            image: img2,
            title: 'AI AstroEvents - Event Planner',
            desc: 'An astronomy event planning and observation tool that identifies planets, celestial objects, and astronomical events available for a selected date, time, and location. It combines astronomical data with observation conditions to help users plan their stargazing sessions.',
            tech: ['React.js', 'Next.js', 'FastAPI', 'MongoDB', 'Vercel', 'Render'],
            link: 'https://ai-astro-event.vercel.app/'
        },
        {
            id: 3,
            image: img3,
            title: 'AI Chatbot',
            desc: 'A ChatGPT-style AI chatbot that allows users to interact with an AI assistant through a conversational interface. Built with a modern frontend and FastAPI backend, integrating AI APIs to process user queries and generate contextual responses.',
            tech: ['React.js', 'Next.js', 'FastAPI', 'MongoDB', 'Vercel', 'Render'],
            link: 'https://ai-chatbot-one-orpin.vercel.app/'
        },
        
    ]

    return (
        <section className='max-w-6xl mx-auto flex justify-between items-center py-20' id="projects">
            <div className='container mx-auto max-w-7xl'>
                
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-2xl md:text-5xl font-extrabold text-white tracking-wide'>
                       AI Tools Development
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
