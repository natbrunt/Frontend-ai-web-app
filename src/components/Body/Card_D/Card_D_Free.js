import React from 'react'
import info from './../../../media/svg/info.svg'

function Card_D_Free(){
    return(
        <section id='Pop up price wrapper'
        className="
        outline outline-2 rounded-3xl outline-gray-200
    ">
        <div id="Pop up price container"
            className="
            xl:flex-col md:flex-row flex flex-col
            
            ">
            
            <div id='title wrapper'
                className='
                md:flex-col flex flex-row justify-between 
                mx-8 pt-10'
                
            >
                
                <div id='title container'
                    className='
                    relative
                    md:flex-col flex-row flex '
                >
                    {/* title */}
                    <div className='flex flex-col'>
                        <h1 
                            className='
                            xl:text-5xl md:text-[42px] text-3xl 
                            text-black font-bold
                            md:pb-0
                            pb-[4.5rem]
                            '>
                            Free
                        </h1>
                        {/* description */}
                        <p className='
                        md:text-[18px] md:max-w-64 text-sm 
                        font-bold text-gray-500
                        md:pb-4 pt-4 pb-8
                        md:relative
                        absolute top-9
                        md:top-0
                        '>
                        For anyone who wishes to try AI video creation</p>
                    </div>

                    <div id='empty space'
                        className='grow w-[18rem]'
                    ></div>

                    <div id='price container'>
                        <h1 
                            className='
                            font-bold 
                            md:text-5xl text-3xl'>
                            $0 
                            <span 
                            className='
                            text-lg 
                            text-gray-500
                            pl-1'>
                            /mo*</span>
                        </h1>
                    </div>
                </div>

                <button 
                className="
                
                w-64 h-12     
                rounded-full 
                hidden
                md:inline
                text-white bg-black font-bold 
                mt-28 mb-14
                ">
                Try for free
                </button>
                

            </div>

            <div id='info wrapper'
                className='
                xl:rounded-bl-3xl xl:rounded-tr-none md:rounded-tr-3xl md:rounded-bl-none rounded-b-3xl
                bg-gray-200
                px-8 py-4'
            >

                <div id="info description container"
                    className='
                    flex flex-col
                    py-2 space-y-3 pb-5
                    text-gray-500 font-bold
                    '>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='xl:grow xl:w-[16rem] lg:grow lg:w-[42rem] md:w-[21rem]'><span className='pr-1'>✔</span> 10 mins/wk of AI generation</p>
                        <img className='md:inline hidden' src={info}></img>
                    </div>
                    
                    <p><span className='pr-2 font-normal opacity-50'>X</span> iStock</p>
                    
                    <p><span className='pr-1'>✔</span> 10 GB storage</p>
                    <div className='flex flex-row items-center justify-between'>
                    <p><span className='pr-1'>✔</span> 4 exports/wk with a logo</p>
                    <img className='md:inline hidden' src={info}></img>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                    <p><span className='pr-1'>✔</span> 2.5M+ standard media</p>
                    <img className='md:inline hidden' src={info}></img>
                    </div>
                    <p><span className='pr-2 font-normal opacity-50'>X</span> voice clones</p>

                </div>


                <button 
                className="
                md:hidden
                w-96 h-12     
                rounded-full 
                text-white bg-black font-bold
                ">
                Try for free
                </button>


            </div>

        </div>

    </section>
    )
}

export default Card_D_Free