import React from 'react'
import SecImage from './../../media/images/security.png'

function Card_A(){
/* 
    For Pop up congruency all images would need to be the same height and width    
*/ 
return(
<div id="container"
className="space-y-10 flex flex-col items-center mt-20">

{/* gradient statement */}    
<h1 className='lg:max-w-[1200px] lg:text-7xl md:text-6xl text-4xl font-bold text-center'>Turn any idea or content to   
    <span className='bg-gradient-to-r from-custom-blue to-custom-red md:pl-0 pl-2 md:mb-5
    inline-block text-transparent bg-clip-text'>video, instantly</span>
</h1>
                    
{/* ideal pop up fixed sizes of all components*/}

<div id="Pop up" 
    className='
    xl:max-w-[1350px]
    md:flex-row flex flex-col rounded-3xl font-bold mx-8 bg-slate-100'>
    
    <div id="container" 
        className='flex flex-col px-8 justify-between'>
            
        <div id="title container"
            className='md:space-y-4 flex flex-col pt-6 space-y-1 '>
            {/* title */}
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Text to video in minutes</h1>
            {/* description */}
            <p className='xl:text-xl md:text-lg text-sm text-custom-gray'>Describe your idea, optionally add details such as video length, platform, voiceover accent, and watch as the video gets generated.</p>
            {/* button */}
        </div>

        <button 
            className='xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
                w-24 h-8 outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
                hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
                mb-10 mt-3'>
            Generate a video
        </button>
    </div>

    <div id="image container"
        /* image */
        className='
            xl:max-h-xl lg:max-h-lg md:max-h-md max-h-sm 
            
            flex justify-center rounded-3xl
            bg-gradient-to-tr from-slate-100 via-slate-100 to-blue-200'>
        <img src={SecImage}
            alt="company" loading="lazy"
            className='rounded-2xl object-contain'/>
    </div>
</div>


<div id="Pop up" 
    className='
    xl:max-w-[1350px]
    md:flex-row flex flex-col rounded-3xl font-bold mx-8 bg-slate-100'>
    
    <div id="container" 
        className='flex flex-col px-8 justify-between'>
            
        <div id="title container"
            className='md:space-y-4 flex flex-col pt-6 space-y-1 '>
            {/* title */}
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Edit with text prompts</h1>
            {/* description */}
            <p className='xl:text-xl md:text-lg text-sm text-custom-gray'>Make big or small changes to the generated video with simple text commands, just like you would ask a video editor.</p>
            {/* button */}
        </div>

        <button 
            className='xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
                w-24 h-8 outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
                hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
                mb-10 mt-3'>
            Generate a video
        </button>
    </div>

    <div id="image container"
        /* image */
        className='
            xl:max-h-xl lg:max-h-lg md:max-h-md max-h-sm 
            
            flex justify-center rounded-3xl
            bg-gradient-to-tr from-slate-100 via-slate-100 to-blue-200'>
        <img src={SecImage}
            alt="company" loading="lazy"
            className='rounded-2xl object-contain'/>
    </div>
</div>


<div id="Pop up" 
    className='
    xl:max-w-[1350px]
    md:flex-row flex flex-col rounded-3xl font-bold mx-8 bg-slate-100'>
    
    <div id="container" 
        className='flex flex-col px-8 justify-between'>
            
        <div id="title container"
            className='md:space-y-4 flex flex-col pt-6 space-y-1 '>
            {/* title */}
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Create in all languages</h1>
            {/* description */}
            <p className='xl:text-xl md:text-lg text-sm text-custom-gray'>Prompt & create in your preferred language, or translate your video into 50+ languages with a simple text command.</p>
            {/* button */}
        </div>

        <button 
            className='xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
                w-24 h-8 outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
                hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
                mb-10 mt-3'>
            Generate a video
        </button>
    </div>

    <div id="image container"
        /* image */
        className='
            xl:max-h-xl lg:max-h-lg md:max-h-md max-h-sm 
            
            flex justify-center rounded-3xl
            bg-gradient-to-tr from-slate-100 via-slate-100 to-blue-200'>
        <img src={SecImage}
            alt="company" loading="lazy"
            className='rounded-2xl object-contain'/>
    </div>
</div>

<div id="Pop up" 
    className='
    xl:max-w-[1350px]
    md:flex-row flex flex-col rounded-3xl font-bold mx-8 bg-slate-100'>
    
    <div id="container" 
        className='flex flex-col px-8 justify-between'>
            
        <div id="title container"
            className='md:space-y-4 flex flex-col pt-6 space-y-1 '>
            {/* title */}
            <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>Clone voice with AI</h1>
            {/* description */}
            <p className='xl:text-xl md:text-lg text-sm text-custom-gray'>Your videos sound exactly like you with AI voice cloning! Save hours of recording, personalize your videos and be consistent.</p>
            {/* button */}
        </div>

        <button 
            className='xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
                w-24 h-8 outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
                hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
                mb-10 mt-3'>
            Generate a video
        </button>
    </div>

    <div id="image container"
        /* image */
        className='
            xl:max-h-xl lg:max-h-lg md:max-h-md max-h-sm 
            
            flex justify-center rounded-3xl
            bg-gradient-to-tr from-slate-100 via-slate-100 to-blue-200'>
        <img src={SecImage}
            alt="company" loading="lazy"
            className='rounded-2xl object-contain'/>
    </div>
</div>



</div>
    )
}

export default Card_A