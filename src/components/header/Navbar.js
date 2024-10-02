import React from 'react'
import Logo from '../../media/svg/fish.svg'
import Arrow from '../../media/svg/arrow-drop.svg'

import Ad from '../header/Ad.js'

function Navbar(){
return(
<div id="container" className='flex w-full flex-col fixed z-10'
    >
    <Ad />
    <nav className='
        flex flex-row items-center justify-between   
      bg-white text-gray-400 font-bold text-sm '>
        
        <div id="left"
            className='
            flex flex-row items-center 
            space-x-6 h-14
            '
            >

            <div id='logo' className='hidden md:flex md:flex-row md:items-center md:ml-6'>
                <img className='h-8 w-8 mr-1' src={Logo} alt="My SVG" />
                <h1 className='text-black text-lg'>video AI</h1>
            </div>

            <div className='flex flex-row items-center'>
                <h1 className=' text-pink-500'>video ai</h1>
                <img className='h-6 w-6' src={Arrow}/>
            </div>

            <div className='flex flex-row items-center'>
                <h1>video studio</h1>
                <img className='h-6 w-6' src={Arrow}/>
            </div>

            <div className='flex flex-row items-center'>
                <h1>Help</h1>
                <img className='h-6 w-6' src={Arrow}/>
            </div>


            <div>
                <h1>Community</h1>
            </div>

            <div>
                <h1>Pricing</h1>
            </div>

        </div>

        <div id="right"
            className='
            flex flex-row items-center
            space-x-8 pr-6'>

            <div>
                <button>Login</button>
            </div>

            <div>
                <button 
                className='
                    
                    w-[4.5rem] h-6
                    outline outline-custom-blue-button outline-2 
                    rounded-full text-custom-blue-button
                    hover:bg-custom-blue-button 
                    transition-all duration-300 ease-in-out 
                    hover:text-white
                    '>
                Sign up
                </button>
            </div>

        </div>
    </nav>
</div>
)
}

export default Navbar
