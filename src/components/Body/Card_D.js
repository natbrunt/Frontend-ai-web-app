import React from 'react'

import Card_D_Free from'./Card_D/Card_D_Free.js'
import Card_D_Plus from'./Card_D/Card_D_Plus.js'
import Card_D_Max from'./Card_D/Card_D_Max.js'

function Card_D(){

return(
<div id="container"
className="space-y-6 flex flex-col items-center mt-20">

{/* gradient statement */}    
<h1 className='
    xl:text-[5.2rem] lg:text-7xl md:w-[48rem] md:text-6xl md:mt-20
    text-4xl font-bold text-center'>
    The right plans,
    <span className='
        xl: h-[6rem]
        bg-gradient-to-r from-custom-blue to-custom-red md:pl-0 pl-2 md:mb-5
        inline-block text-transparent bg-clip-text'>
        for the right price
    </span>
</h1>

{/* Pop up wrapper */}
<div id="row of 3"
    className='
    xl:flex-row xl:space-x-[4rem] xl:space-y-0 flex flex-col items-center 
    md:mx-0 mx-8 space-y-[2.4rem]'
>

    <Card_D_Free />
    <Card_D_Plus />
    <Card_D_Max />
    
    
</div>


    <button 
        className='
        
        font-bold    
        xl:w-60 xl:h-16 xl:text-xl md:h-12 md:min-w-[12.5rem] min-w-44
            w-22 h-8 outline outline-custom-blue-button outline-2 rounded-full text-custom-blue-button
            hover:bg-custom-blue-button transition-all duration-300 ease-in-out hover:text-white
            mb-10 mt-3'>
        Compare all features
    </button>

</div>
    )
}

export default Card_D