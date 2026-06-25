import React from 'react'
import hero from '../assets/Education.png'

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: 'Bachelor of Information Technology', 
            institution: "Pune University", 
            duration: "2013 - 2017", 
            details: 'Focused on software development, databases, and web technologies.'
        },
        {
            id: 2,
            degree: 'Diploma in Information Technology',
            institution: "MSBTE",
            duration: "2010 - 2013",
            details: 'Built foundational knowledge in programming and information technology.'  
        },
    ]

    return (
    
        <section className='text-white py-24 relative overflow-hidden' id="education">
          
            <div className='max-w-7xl mx-auto px-6 lg:px-16 relative z-10'>
                
                {/* Header Container */}
                <div className='mb-16 text-center lg:text-left'>
                    
                    <p className='text-primary text-sm uppercase tracking-widest mb-2 font-bold'>
                        Learning Path
                    </p>
                   
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white tracking-tight'>
                        Education
                    </h2>
                </div>

               <div className='flex flex-col lg:flex-row items-center lg:items-start gap-16 justify-between' data-aos='fade-right'>
                    
                     <div className='relative group shrink-0'>
                          <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-primary/30 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0' />
                        
                   
                        <div className='relative z-10 bg-[#111a3e] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl'>
                            <img 
                                src={hero}  
                                alt="Education Timeline Thumbnail"
                                loading="lazy"
                                className='w-64 h-64 md:w-80 md:h-96 lg:w-96 lg:h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105' 
                            />
                        </div>

                        {/* Ambient Glowing Node Background Layer */}
                        <div className='absolute -top-6 -left-6 bg-primary/20 w-32 h-32 rounded-full blur-3xl pointer-events-none' />
                    </div>

                     <div className='w-full flex-1 flex flex-col gap-6 relative z-10'>
                        {educationData.map((item) => (
                            <div 
                                key={item.id}
                                className="w-full bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 hover:border-primary/40 p-6 rounded-2xl transition-all duration-300 shadow-xl group"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                        {item.degree}
                                    </h3>
                                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full w-fit">
                                        {item.duration}
                                    </span>
                                </div>
                                <h4 className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {item.institution}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.details}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
