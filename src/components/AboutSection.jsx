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
                {/* <p className='text-gray-400 text-base lg:text-lg mb-4 leading-relaxed'>
                    My journey into web development started with managing websites and grew into a passion for building them. With 6+ years of experience across web administration, development, and management, I have 3+ years of hands-on experience with Shopify and WordPress, creating responsive websites and eCommerce experiences.

More recently, I’ve been exploring AI application development, building practical tools by combining modern web technologies, backend APIs, and AI services.

I enjoy learning, building, and turning ideas into something real.
                </p> */}


                
                <div className="text-gray-400 text-base lg:text-lg leading-relaxed text-justify">
    <p className="mb-4">
        My journey into web development started with managing websites and grew into a passion for building them. With 6+ years of experience across web administration, development, and management, I have 3+ years of hands-on experience with Shopify and WordPress, creating responsive websites and eCommerce experiences.
    </p>

    <p>
        More recently, I’ve been exploring AI application development and building practical tools using modern web technologies, backend APIs, and AI services. I’m also expanding my expertise in React.js and modern frontend development, with a focus on creating useful, scalable, and high-performance web applications.
    </p>
</div>
            </div>
           
        </div>
    </section>
  )
}
