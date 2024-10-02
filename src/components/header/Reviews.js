import React from 'react'

/*
1) Logos
	2) ★
3) Effects
	7) Leaves
	<img src="https://web-assets.invideo.io/landing-pages/prod/homepage/rating.svg" 
    alt="company" loading="lazy" width="108" height="60">

on screens less than md,
3 rows of 2,2 and 1
font size is decreased
    */

function Reviews(){
    return(
        <div id="wrapper"
            className='flex flex-col items-center space-y-12'>
            
            <div id="container grid"
                className='
                md:gap-32
                grid grid-cols-2 gap-8 md:flex md:flex-row
                '>

                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-5xl'>25M</h1>
                    <h1 className='font-bold text-lg'>Customers</h1>
                    <h1 className='font-bold text-2xl '>190 <span className='text-sm pl-1'>countries</span></h1>
                </div>

                <div className='flex flex-col items-center'>
                    <img src="https://web-assets.invideo.io/landing-pages/prod/homepage/rating.svg" 
                    alt="company" loading="lazy" width="90" height="50"/>
                    <h1 className='font-bold pt-2'>Product of the month</h1>
                    <h1 className='text-3xl text-orange-600'>★</h1>
                </div>

                <div className='flex flex-col items-center'>
		            <h1 className='font-bold text-5xl'>4.8</h1>
		            <h1 className='text-lg text-blue-600'>★★★★★</h1>
                    <h1 className='text-3xl text-blue-600 flex flex-row '>★ <span className='text-lg pl-1 pt-2'>Anonymous</span></h1>
                    
                </div>
 
                <div className='md:hidden flex flex-col items-center'>
                    <h1 className='text-5xl font-bold'>4.6</h1>
                    <h1 className='text-lg text-green-600'>★★★★★</h1>
                    <h1 className='text-3xl text-green-600 flex flex-row'>★ <span className='text-lg pl-1 pt-2'>Anonymous</span></h1>
                </div>

               

            </div>

            {/* 
                only visible on md+ screens
                row 1 = 3 reviews
                row 2 =  2 reviews
             */}

             <div id="row two"
                className='flex flex-row md:space-x-32'>
                <div className='md:flex md:flex-col md:items-center hidden'>
                    <h1 className='text-5xl font-bold'>4.6</h1>
                    <h1 className='text-lg text-green-600'>★★★★★</h1>
                    <h1 className='text-3xl text-green-600 flex flex-row'>★ <span className='text-lg pl-1 pt-2'>Anonymous</span></h1>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-bold'>4.8</h1>
                    <h1 className='text-lg text-amber-600'>★★★★★</h1>
                    <h1 className='text-3xl text-amber-600 flex flex-row'>★ <span className='text-lg pl-1 pt-2'>Anonymous</span></h1>
                </div>
             </div>

        </div>
    )
}

export default Reviews