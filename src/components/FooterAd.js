import React from 'react'

function FooterAd(){
    return(
        <div 
            className='
            mt-32
            flex flex-col items-center 
            space-y-[4.5rem] pt-14 pb-[4.5rem]
            bg-black'>
            <h1 className='text-6xl'>💓</h1>
            {/* gradient statement */}
            {/* gradient statement */}
            <h1 
                className='
                xl:max-w-[80rem] lg:max-w-[90rem] lg:text-8xl md:text-7xl text-5xl
                text-white text-center font-bold
                '>
                Future of video creation 
                <span className="
                    bg-gradient-to-r from-custom-blue to-custom-red 
                    inline-block text-transparent bg-clip-text 
                    md:pl-4 pl-1">
                    video AI</span>
            </h1>
            
            <button 
                className='
                md:text-lg py-[.8rem] px-6 
                bg-custom-blue-button text-white 
                rounded-full font-bold'>Get started - it's free!</button>
        </div>
    )
}

export default FooterAd