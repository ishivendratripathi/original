import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    
  return (
    <div>
      <div className='h-48 w-full flex flex-col items-center mt-24 shadow-2xl'>
        <div className='text-4xl font-thin'>CONTACT US</div>
        <div className='mt-4'>CONTACT SHIVENDRA AND LET'S BRING YOUR IDEAS TO LIFE</div>

        <div>2024 © Original. All rights reserved.</div>
        <div className='flex gap-4'>
            <button><a href="https://x.com/T63824Tripathi" target='_blank'><RiTwitterXFill /></a></button>
        <button><CiFacebook /></button>
        <button><a target='_blank' href="https://github.com/ishivendratripathi"><FaGithub /></a></button>
        </div>
      </div>
    </div>
  )
}

export default Footer