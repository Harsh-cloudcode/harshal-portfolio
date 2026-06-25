import React from 'react'
import { Download } from 'lucide-react';
import hero from '../assets/Harshal.jpg'

export const HeroSection = () => {
  return (
    // 1. Force top padding using inline styles to bypass compiler caching glitches
    <section 
      className='w-full bg-[#111827] pb-16 relative overflow-hidden' 
      id="home" 
      data-aos='zoom-in-up'
      style={{ paddingTop: '120px' }}
    >
        
        {/* Glow Effects Background */}
        <div className='absolute top-0 inset-x-0 h-96 flex items-start pointer-events-none z-0'>
            <div className='h-24 w-2/3 bg-gradient-to-br from-[#0c7fac]/20 to-transparent blur-3xl'></div>
            <div className='h-20 w-3/4 bg-gradient-to-r from-[#289eff]/20 to-transparent blur-3xl'></div>
        </div>

       
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10'>
            
             <div 
              className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'
              style={{ minHeight: '500px' }}
            >
                
              
                <div className='flex flex-col text-center lg:text-left order-2 lg:order-1'>
                    <div>
                        <h1 className='text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight'>
                            Hi, I'm {' '}
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300'>
                                Harshal
                            </span>
                        </h1>
                    </div>
                    
                    <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Frontend Developer specializing in Shopify, WordPress, and modern web technologies.
                        Creating responsive, high-performance digital experiences.
                        Focused on building modern React.js applications and scalable user interfaces.
                    </p>
                     
                    <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto'>
                        
                         <a 
                            href="#contact" 
                            className='px-10 py-4 rounded-full relative group w-full sm:w-max flex justify-center items-center overflow-hidden cursor-pointer shadow-md'
                        >
                            <span className='absolute inset-0 rounded-full group-hover:scale-105 origin-center transition-all duration-300 ease-in-out bg-primary z-0'></span>
                            <span className='relative text-white font-bold z-10 pointer-events-none tracking-wide'>
                                Contact
                            </span>
                        </a>

                       
                        <a 
                            href="/Harshal_Deshmukh_Resume.pdf" 
                            download="Harshal_Deshmukh_Resume.pdf" 
                            className='border-2 border-primary/40 hover:border-primary px-8 py-3.5 rounded-full relative group w-full sm:w-max flex justify-center items-center cursor-pointer hover:bg-primary/10 transition-all duration-300 gap-2'
                        >
                            <div className='flex items-center justify-center transition-transform duration-300 group-hover:scale-105'>
                                <Download size={18} className="text-primary"/>
                                <span className='pl-2 text-primary font-bold tracking-wide'>
                                    Download Resume
                                </span>
                            </div>
                        </a> 
                    </div>
                </div>

              
                <div className='w-full flex justify-center items-center relative order-1 lg:order-2 mb-8 lg:mb-0'>
                    
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-[#0c64ac] to-cyan-500 opacity-30 blur-3xl rounded-full z-0'></div>

                    <div className='relative z-10 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] shadow-2xl border-2 border-primary bg-slate-900 overflow-hidden transition-all duration-500 hover:rounded-[50%_50%_50%_50%]'>
                        <img 
                            src={hero} 
                            alt="Harshal's Avatar"
                            loading='lazy' 
                            className='w-full h-full object-cover transition-transform duration-700 hover:scale-110' 
                        />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
