import { Button } from '@mui/material'
import React from 'react'
import shirtman from '../assets/images/shirtman.svg'
import dubai from '../assets/images/dubai.png'

const Travel = () => {
  return (
    <div className='p-20 flex flex-col space-y-20'>
        <div className="grid  grid-col-1 space-y-4 lg:grid-cols-2 lg:space-y-0 mt-3 mb-2 ">
            <span className=' font-nuSans text-3xl text-primaryTextColor max-w-[300px]  tracking-wider '>
                Get all expenses paid trip to dubai
            </span>
            <span className=' font-poppins text-sm leading-[40px] tracking-wider'>
            Unwind and recharge in our tranquil retreat. Stay with us and discover the wonders of our vibrant city. 
            Discover your new home away from home: Immerse yourself in our warm hospitality
            </span>
        </div>
        <div className='mt-3 h-52'>
            <img alt='dubai' className='w-full h-full object-cover ' src={dubai}  />
        </div>
        <div className='grid grid-col-1 space-y-10 lg:grid-cols-2 lg:space-y-0  mt-3 mb-2 '>
            <div className='flex flex-col space-y-10 ml-3 md:ml-7 max-w-[550px] lg:ml-10 '>
                <span className="font-nuSans text-3xl max-w-[450px] tracking-wider  ">
                Have access to both foreign and local investors
                </span>
                <div className='font-poppins text-sm leading-8 tracking-wider space-y-3'> 
                <p> We have an investment portfolios totaling 3M US dollars. </p> 
                <p>
                    Pneuma Impact has a group of investors with a portfolio of about 3M US dollars. Our students will 
                    be given opportunity to meet with these investors, present their ideas, get business funds, and a right team 
                    from these investors.
                </p>
                </div>
                <div>
                    <Button variant="pneumaBlue" size='small' href='/signup'>Register now</Button>
                </div>
                
            </div>
            <div className='max-h-[400px] max-w-[400p]'>
                <img className='w-full h-full object-contain ' alt='img' src={shirtman} />
            </div>
        </div>
    </div>
  )
}

export default Travel