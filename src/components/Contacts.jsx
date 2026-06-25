import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaMapMarkerAlt, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
    // 1. Initialize Formspree with your unique form ID 
    // (Replace 'xoqyzabc' with the actual characters at the end of your Formspree URL)
    
      const [state, handleSubmit] = useForm("xojojbvz");

    const contactinfo = [
        { 
            id: 1,
            icon: FaEnvelope,
            title: 'Email',
            value: 'harshaldeshmukh386@gmail.com',
            link: 'mailto:harshaldeshmukh386@gmail.com'
        },
        { 
            id: 2,
            icon: FaLinkedin,
            title: 'LinkedIn',
            value:'https://www.linkedin.com/in/harshal-deshmukh-9aa943264/',
            link: 'https://www.linkedin.com/in/harshal-deshmukh-9aa943264/'
        },
        { 
            id: 3,
            icon: FaMapMarkerAlt, 
            title: 'Location',
            value: 'Pune, Maharashtra, India',
            link: null
        },
        { 
            id: 4,
            icon: FaPhone,
            title: 'Phone', 
            value: '+91 70303 70073',
            link: 'tel:+91 7030370073'
        },
    ];

    return (
        <section className='max-w-6xl mx-auto flex justify-between items-center py-20 text-gray-300' id="contact">
            <div className='container mx-auto px-6 max-w-7xl'>
                
                {/* Section Header Heading */}
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-wide'>
                        Let's Connect
                    </h2>
                    <div className='w-32 h-1 bg-primary mx-auto mt-4 rounded-2xl shadow-[0_0_8px_#06a2c2]'></div>
                </div>

                {/* Main Content Layout Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start leading-relaxed'>
                    
                    {/* LEFT COLUMN: CONTACT DETAILS PANEL */}
                    <div className='space-y-8'>
                        <div>
                            <h3 className='text-2xl font-bold text-white mb-4'>Get In Touch</h3>
                            <p className='text-gray-400 text-base mb-6'>
                                Open to frontend development opportunities. Feel free to reach out if you'd like to discuss a project or potential opportunity.
                            </p>
                        </div>

                        {/* Contact Cards List */}
                        <div className='space-y-6'>
                            {contactinfo.map((info) => {
                                const Icon = info.icon;
                                return (
                                    <div key={info.id} className="flex items-center gap-4 group">
                                        {/* Icon Wrapper Circle */}
                                        <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 shrink-0'>
                                            <Icon size={20} className="text-primary" />
                                        </div>
                                        
                                        {/* Label Details */}
                                        <div className='flex flex-col'> 
                                            <h4 className='text-white font-semibold text-sm tracking-wide uppercase opacity-70'>
                                                {info.title}
                                            </h4>
                                            {info.link ? (
                                                <a 
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='text-gray-300 text-base font-medium hover:text-primary transition-colors duration-300'
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className='text-gray-300 text-base font-medium'>
                                                    {info.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CONTACT FORM */}
                    <div className='bg-[#0f172a] rounded-xl p-8 border border-gray-800 shadow-xl hover:border-gray-700 transition-all duration-300'>
                        {/* 2. Show a dynamic success message without leaving the page */}
                        {state.succeeded ? (
                            <div className='text-center py-12 space-y-4'>
                                <div className='w-16 h-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-pulse'>
                                    ✓
                                </div>
                                <h4 className='text-xl font-bold text-white tracking-wide'>Message Sent!</h4>
                                <p className='text-gray-400 text-sm max-w-xs mx-auto'>
                                    Thank you, Harshal will get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='email' className='text-white block mb-2 text-sm font-semibold tracking-wide'> 
                                        Your Email 
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email" // 3. ESSENTIAL: Formspree reads this name attribute
                                        className='w-full px-4 py-3 bg-[#1e293b] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300'
                                        placeholder='name@example.com' 
                                        required
                                    />
                                    {/* Displays server-side email format validation errors */}
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>
                                
                                <div>
                                    <label htmlFor='message' className='text-white block mb-2 text-sm font-semibold tracking-wide'> 
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message" // 4. ESSENTIAL: Formspree reads this name attribute
                                        className='w-full px-4 py-3 bg-[#0b1329] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none'
                                        placeholder='Tell me about your project context...'
                                        rows="5"
                                        required
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                                </div>
                                
                                <button 
                                    type="submit"
                                    disabled={state.submitting} // 5. Prevents double-clicking while sending
                                    className='w-full px-6 py-3.5 bg-primary text-white rounded-lg font-bold tracking-wide shadow-md hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:hover:scale-100 transition-all duration-300'
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contacts;
