import React from 'react';


function Statement() {


  
  return (
    <div className="flex flex-col items-center space-y-10 font-bold text-center text-black">
      
      <div id="empty space" 
        className='md:h-40 h-32'></div>

      {/* gradient statement */}
      <h1 
        className='
          xl:max-w-[52rem]
          md:text-8xl sm:text-7xl text-5xl'>Create videos with <span className="bg-gradient-to-r from-custom-blue to-custom-red 
          inline-block text-transparent bg-clip-text">text prompts</span>
      </h1>

      {/* description */}
      <div 
        className='
        xl:max-w-[56rem] lg:max-w-[48rem] md:max-w-[46rem]
        md:text-2xl text-xl px-10'>
        Publish-ready videos with zero video creation skills. <span className='text-gray-400'>
        Type any topic and invideo AI creates a video with script, visuals, subtitles, voiceover & music.</span>
      </div>

      {/* Try video AI button */}
      <div id="Try for free">
          <button 
            className='md:text-2xl md:py-4 text-lg py-3  px-6 bg-custom-blue-button text-white rounded-full'>Try video AI </button>
          <p 
            className='md:text-sm text-xs text-gray-400 mt-4'>Trusted by 25m+ users worldwide</p>
      </div>

      {/* demo video */}
      <div id="video container" className='flex flex-col items-center pb-20'>
        <video className='
        xl:min-w-[70rem]
        rounded-3xl w-4/5 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]' autoPlay loop muted>
          <source src="https://cdn.pixabay.com/video/2020/04/30/37712-414754673_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}

export default Statement;
