import React from 'react'
import { Layout, Cpu, Terminal, Briefcase } from 'lucide-react'

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "HTML AND CSS",
            width: '85%',
            icon: Layout
        },
        {
            id: 2,
            name: "React JS",
            width: '70%',
            icon: Cpu
        },
        {
            id: 3,
            name: "Shopify",
            width: '80%',
            icon: Terminal
        },
        {
            id: 4,
            name: "Wordpress",
            width: '80%',
            icon: Layout
        },
        {
            id: 5,
            name: "Javascript",
            width: '70%',
            icon: Layout
        },
        {
            id: 7,
            name: "Git & Deployment (Vercel)",
            width: '85%',
            icon: Layout
        }
        
        

    ]

    const experience = [
        {
            id: 1,
            role: 'Shopify / Wordpress Developer',
            Company: 'Freelancing',
            Date: 'May 2025 - Current'
        },
        {
            id: 2,
            role: 'Shopify Developer Team Lead',
            Company: 'addMatrix',
            Date: 'May 2024 - May 2025'
        },
        {
            id: 3,
            role: 'Shopify / WordPress Developer',
            Company: 'Axexmedia',
            Date: 'Feb 2022 - Apr 2023'
        },
        {
            id: 4,
            role: 'Web Administrator',
            Company: 'Tutoratti',
            Date: 'Jun 2019 - Jan 2022'
        }
    ]

    return (
        <section className='text-white py-20 relative overflow-hidden' id='skills'>
            <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                    <div>
                        <h2 className="text-3xl font-bold mb-10 text-left">Technical Skills</h2>
                        <div className='space-y-8'>
                            {skills.map((skill) => {
                                const SkillIcon = skill.icon;
                                return (
                                    <div key={skill.id} className='group'>
                                        <div className='flex items-center justify-between mb-2'>
                                            <div className='flex items-center gap-3'>
                                                <div className='p-2 bg-[#111a2e] rounded-lg group-hover:bg-primary transition-colors duration-300'>
                                                    <SkillIcon size={20} className="text-primary group-hover:text-white" />
                                                </div>
                                                <span className='font-medium tracking-wide'>
                                                    {skill.name}
                                                </span>
                                            </div>
                                            <span className='text-primary font-bold'>
                                                {skill.width}
                                            </span>
                                        </div>
                                        <div className='h-2 w-full bg-[#131d30] rounded-full p-0.5'>
                                            <div 
                                                className='h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 shadow-[0_0_10px_#06a2c2]'
                                                style={{ width: skill.width }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                     <div>
                        <h2 className="text-3xl font-bold mb-10 text-left">Work Experience</h2>
                        <div className="space-y-6">
                            {experience.map((exp) => (
                                <div key={exp.id} className="p-6 bg-[#142245] rounded-xl border border-gray-800 flex items-start gap-4 hover:border-primary transition-all duration-300">
                                    <div className="p-3 bg-[#131d30] rounded-lg text-primary shrink-0">
                                        <Briefcase size={24} />
                                    </div>
                                    <div className="flex-1 space-y-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                            <h3 className="text-lg font-bold text-white truncate">{exp.role}</h3>
                                            <span className="text-xs text-gray-400 bg-[#1e293b] px-3 py-1 rounded-full w-fit shrink-0">
                                                {exp.Date}
                                            </span>
                                        </div>
                                        <p className="text-primary font-medium">{exp.Company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Skills;
