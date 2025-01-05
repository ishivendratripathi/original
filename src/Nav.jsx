import React from 'react'
import sidebar from './Sidebaritems'
import logo from '/Users/shivendratripathi/Desktop/smallprojects30/sidebar/src/logo.jpg'

const Nav = () => {
  return (
    <div className="border-2 border-black w-9/12 absolute left-40 flex justify-center rounded-full mt-10 shadow-2xl h-16 bg-orange-50">
      <img className="h-12 mr-10 mt-2" src={logo} alt="" />
      <div className='flex gap-6 mt-4'>
        {sidebar.map((a) => (
          <button key={a.name} className='flex items-center gap-2'>
            <span>{a.hero}</span>
            <span>{a.name}</span>
          </button>
        ))}
      </div>
    </div>

  )
}

export default Nav;