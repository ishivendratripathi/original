import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Button from './Button'
import ScrollEffectCircle from './Scrolleffect'
import Footer from './Footer'
import Testimonials from './Testimonials'


function App() {
 
  return <>
  
 <Nav /> 
 <h1 className='relative top-40 text-center text-3xl font-thin'>We create products that serves both users <br />and businesses and drive real results.
</h1>
<Button />
<div className='relative top-72 left-64 font-thin text-xl'>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️   WE BUILD IT USING ALOT OF LEARNING AND PASSION ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ </div>
<div className='flex justify-center pt-80 gap-2 font-thin'>Scroll for more
<div className='font-thin animate-bounce'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg></div>
  </div>
  <ScrollEffectCircle />
  <Testimonials />
  <Footer />
  </>
}
export default App

