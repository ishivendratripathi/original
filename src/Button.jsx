import React, { useState } from 'react';


const Button = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className='relative top-60 border text-center w-1/4 ml-auto mr-auto rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-orange-100 duration-300'
        >
            {hovered ? 
                <button className='inline-flex items-center space-x-1 mt-2 gap-2'> 
                    <img 
                        className="h-8 w-8 rounded-full" 
                        src="https://shadebyte.vercel.app/_next/image?url=%2Fimages%2Fperson.avif&w=64&q=75" 
                        alt="" 
                    />
                    +
                    <img 
                        className="h-8 w-8 rounded-3xl" 
                        src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="" 
                    />
                    <div className='font-bold '> BOOK A 15 MIN CALL</div>
                </button>
                : "Book a call"
            }
        </div>
    );
};

export default Button;