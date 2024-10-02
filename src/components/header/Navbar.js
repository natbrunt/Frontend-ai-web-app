import React from 'react'
import Logo from '../../media/svg/fish.svg'
import Arrow from '../../media/svg/arrow-drop.svg'

import Ad from '../header/Ad.js'

function Navbar(){
    return(
        <div id="container" className='flex w-full flex-col fixed z-10'
            >
            <Ad />
            <nav className='flex flex-row items-center text-sm space-x-6 h-14 text-gray-400 font-bold bg-white'>
            
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

            </nav>
        </div>
    )
}

export default Navbar
