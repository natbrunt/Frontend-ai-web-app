import React from 'react'
import Saigon from './../../media/videos/Saigon.mp4'
import SecImage from './../../media/images/security.png'
import Edits from './../../media/videos/edits.mp4'

function Card_B(){
/* 
    This card is
        1 gradient title
        5 Pop ups
            original: flex-col
                height is based on image/video
            md: 3 rows
                2
                1
                2
            Just set the rows to rows to column on the original
            to achieve the desired effect
            
*/ 
return(
<div id="container"
className="space-y-6 flex flex-col items-center mt-20">

{/* gradient statement */}    
<h1 className='
    lg:max-w-[1200px] lg:text-7xl md:text-6xl md:mt-20
    text-4xl font-bold text-center'>
    Your complete video solution  
    <span className='
        bg-gradient-to-r from-custom-blue to-custom-red md:pl-0 pl-2 md:mb-5
        inline-block text-transparent bg-clip-text'>
        in one AI tool
    </span>
</h1>
                    
<div id="row of 2"
    className='
    md:flex-row md:space-y-0
    md:space-x-10
    flex flex-col items-center space-y-6
    md:mx-0 mx-8'
>
    <div id='Pop up image'
        className="
        relative
        outline outline-2 rounded-3xl

        ">

        <img src={SecImage}
            alt="company" loading="lazy"
            className='
            max-h-[250px]
            md:max-h-[350px]
            md:max-w-[350px]
            lg:max-h-[450px]
            lg:max-w-[450px]
            xl:max-h-[575px]
            xl:max-w-[650px]
            grow w-[650px]
            rounded-2xl object-contain'/>


        <div class="
            absolute top-0 left-0 right-0 bottom-0 
            flex flex-col justify-between font-bold
            py-5 px-6">
            
            <h1 
                className='
                xl:text-5xl md:text-[2rem] text-2xl md:max-w-[600px]
                text-black'>
                Generate videos with nothing but ideas
            </h1>
            <div className=''>
                <button 
                className="
                xl:w-60 xl:h-16 xl:text-xl md:w-28 md:h-10
                w-28 h-8
                outline outline-black outline-2 rounded-full text-black
                hover:bg-black transition-all duration-300 ease-in-out hover:text-white
                ">
                Explore
                </button>
            </div>

        </div>

    </div>

    <div id='Pop up video'
        className="
        relative
        ">
    <video autoPlay muted loop
        className='
        
        md:max-h-[350px] 
        md:max-w-[350px]
        lg:max-h-[450px]
        lg:max-w-[450px]
        xl:max-h-[575px]
        xl:max-w-[650px]
        grow h-[575px]
        w-[650px]
        rounded-3xl object-cover
        
        '>
        <source src={Saigon} type="video/mp4"/>
    </video>

    <div class="
        absolute top-0 left-0 right-0 bottom-0 
        flex flex-col justify-between font-bold
        py-5 px-6">
        
        <h1 
            className='
            xl:text-5xl md:text-4xl text-2xl md:max-w-[600px]
            text-white'>
            16 mn+ stock media made discoverable with AI
        </h1>
        <div><button 
            className="
            xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
            w-24 h-8
            outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
            hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
            ">
            Click Me
        </button></div>

    </div>

    </div>
</div>

<div id='Pop up video'
    className="
    relative

    mx-6
    ">
  <video autoPlay muted loop
    className='
    lg:max-h-[600px]
    grow w-[1350px]
    rounded-3xl object-fill
    aspect-auto'>
    <source src={Edits} type="video/mp4"/>
  </video>

  <div class="
    absolute top-0 left-0 right-0 bottom-0 
    flex flex-col justify-between font-bold
    py-5 px-6">
    
    <h1 
        className='
        xl:text-5xl md:text-5xl text-2xl md:max-w-[500px]
        text-white'>
        Make easy edits with
        an intuitive editor
    </h1>
    <div className='flex flex-row items-center  space-x-4'>
        <button 
        className="
        xl:w-60 xl:h-16 xl:text-xl md:w-36 md:h-12 
        w-32 h-8
        outline outline-custom-gray outline-2 rounded-full text-custom-gray
        transition-all duration-300 ease-in-out hover:text-white
        ">
        Edit media
        </button>
        <button 
        className="
        xl:w-60 xl:h-16 xl:text-xl md:w-36 md:h-12 
        w-32 h-8
        outline outline-custom-gray outline-2 rounded-full text-custom-gray
        transition-all duration-300 ease-in-out hover:text-white
        ">
        Edit text
        </button>
        <button 
        className="
        xl:w-60 xl:h-16 xl:text-xl md:w-36 md:h-12 
        w-32 h-8
        outline outline-custom-gray outline-2 rounded-full text-custom-gray
        transition-all duration-300 ease-in-out hover:text-white
        ">
        Transitions
        </button>
    </div>

  </div>

</div>

<div id="row of 2"
    className='
    md:flex-row md:space-y-0
    md:space-x-10 
    flex flex-col items-center space-y-6 
    md:mx-0 mx-8'
>
    <div id='Pop up image'
        className="
        relative
        outline outline-2 rounded-3xl

        ">

        <img src={SecImage}
            alt="company" loading="lazy"
            className='
            max-h-[250px]
            md:max-h-[350px]
            md:max-w-[350px]
            lg:max-h-[450px]
            lg:max-w-[450px]
            xl:max-h-[575px]
            xl:max-w-[650px]
            grow w-[650px]
            rounded-2xl object-contain'/>


        <div class="
            absolute top-0 left-0 right-0 bottom-0 
            flex flex-col justify-between font-bold
            py-5 px-6">
            
            <h1 
                className='
                xl:text-5xl md:text-4xl text-2xl md:max-w-[600px]
                text-black'>
                Lifelike voiceovers to keep your viewers engaged
            </h1>
            <div className=''>
                <button 
                className="
                xl:w-60 xl:h-16 xl:text-xl md:w-28 md:h-10
                w-28 h-8
                outline outline-black outline-2 rounded-full text-black
                hover:bg-black transition-all duration-300 ease-in-out hover:text-white
                ">
                AI voiceover
                </button>
            </div>

        </div>

    </div>

    <div id='Pop up video'
        className="
        relative
        ">
    <video autoPlay muted loop
        className='

        md:max-h-[350px] 
        md:max-w-[350px]
        lg:max-h-[450px]
        lg:max-w-[450px]
        xl:max-h-[575px]
        xl:max-w-[650px]
        grow h-[575px]
        w-[650px]
        rounded-3xl object-cover
        '>
        <source src={Saigon} type="video/mp4"/>
    </video>

    <div class="
        absolute top-0 left-0 right-0 bottom-0 
        flex flex-col justify-between font-bold
        py-5 px-6">
        
        <h1 
            className='
            xl:text-5xl md:text-4xl text-2xl md:max-w-[600px]
            text-white'>
            Collaborate in real-time with multiplayer editing
        </h1>
        <div><button 
            className="
            xl:w-60 xl:h-16 xl:text-xl md:w-48 md:h-12 min-w-44
            w-24 h-8
            outline outline-white outline-2 rounded-full text-white
            transition-all duration-300 ease-in-out
            ">
            Coming soon
        </button></div>

    </div>

    </div>
</div>







</div>
    )
}

export default Card_B