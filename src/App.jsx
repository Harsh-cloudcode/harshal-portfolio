import React,{useEffect} from 'react'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HeroSection } from './components/HeroSection'; 
import Education from './components/Education';

import { About } from './components/AboutSection'
import Skills from './components/Skills'

import  ShopifyProject  from './components/ShopifyProject';
import  Contacts  from './components/Contacts';
import WordpressProject from './components/WordpressProject';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:false,
      offset:100,
    })
  },[] ); 
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <ShopifyProject />
      <WordpressProject />
      
      <Education />
      <Contacts />
  
    </div>
  )
}

export default App