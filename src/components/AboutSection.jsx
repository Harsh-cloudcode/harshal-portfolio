import React from 'react'
import about from '../assets/About.png'

export const About = () => {
  return (
    
    <section 
      id="about" 
      className='block w-full text-white pb-20 relative overflow-hidden'
      style={{ paddingTop: '50px' }}
    >
        
        
        <div 
          className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 xl:px-16 relative z-10'
          style={{ minHeight: '400px', display: 'grid', alignItems: 'center' }}
        >
            
            {/* Left Column: Image Frame Layout */}
            <div className="relative z-20 w-full max-w-md mx-auto aspect-square bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]">
                <img 
                    src={about} 
                    alt="about"
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
            </div>

            {/* Right Column: Text content */}
            <div data-aos='fade-right' className="w-full flex flex-col justify-center">
                <p className='text-primary text-sm uppercase tracking-widest mb-2 font-bold'>
                    Introduction
                </p>
                <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight'>
                    More <span className='text-primary'>About</span> Me
                </h2>
                <p className='text-gray-400 text-base lg:text-lg mb-4 leading-relaxed'>
                    I'm a Frontend Developer with 3+ years of experience building Shopify and WordPress websites for businesses and ecommerce brands. I enjoy creating responsive, user-friendly interfaces that deliver a seamless experience across all devices.
                </p>
                <p className='text-gray-400 text-base lg:text-lg leading-relaxed'>
                   Over the years, I've worked on client projects ranging from custom storefronts to complete website solutions. Currently, I'm expanding my expertise in React.js and modern frontend development to build scalable and high-performance web applications.
                </p>
            </div>
           
        </div>
    </section>
  )
}
