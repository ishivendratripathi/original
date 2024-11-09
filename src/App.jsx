

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sidebar from './Sidebaritems'

function App() {
  const [open,setopen]=useState(false)


  return (
    <>
    <div className='border-2 w-2/4 border-red-500'>
    
    <div>{open && sidebar.map((a)=>{
return <button className='flex flex-col h-12 border rounded-sm w-2/12 font-thin p-2'>{a.name}</button>
    })}</div>
    </div>
    <button className='h-12 w-20 border-2 border-black m-2' onClick={()=>{
      setopen(true)
    }}>open this </button>
    <button className='h-12 w-20 border-2 border-black' onClick={()=>{
      setopen(false)
    }}>close this</button>
      </>
  )
}

export default App

