import React, { useState, useEffect } from 'react';

function ScrollEffectCircle(){
    const [scale,setscale]=useState(1)
        useEffect(()=>{
            const handler =()=>{
                const scroller =window.scrollY;
                console.log(scroller)
                const newscroller =3+scroller/500;
                setscale(newscroller)
        }
        window.addEventListener("scroll",handler)
        return () =>{
            window.removeEventListener("scroll",handler)
        }
        },[])

return <>
      <div className="h-screen flex items-center justify-center">
        <div
          className="w-48 h-48 rounded-full overflow-hidden bg-gray-800 transition-transform duration-300 shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/141057759?v=4"
            alt="Scroll Effect"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
}

export default ScrollEffectCircle;
