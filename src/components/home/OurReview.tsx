import { ArrowLeftIcon, ArrowRightIcon, IconButton } from 'evergreen-ui'
import React from 'react'
import numberOne from '../assets/images/01.svg'

const OurReview = () => {
  return (
    <div className='grid gap-y-5'>
        <div className="text-center">
          <span className="step-title-blue">What our </span>
          <span className="step-title-red">Students </span>
          <span className="step-title-blue">say</span>
        </div>
        <div className='flex justify-center'>
            <StudentReview />
        </div>
        <div  className='flex gap-x-3 justify-center '>
            <IconButton icon={ArrowLeftIcon} />
            <IconButton icon={ArrowRightIcon} />
        </div>
    </div>
  )
}

export default OurReview


const StudentReview = () => {
    return(
        <div className='bg-white p-10 text-center rounded-lg test-dim'>
            <div style={{height: "90px"}}><img style={{maxHeight: '100%'}} src={numberOne} /></div>
            <div className='grid gap-y-5'>
                <span className='font-zcool fnt25'>Chris William</span>
                <span className='font-inter'>Traveler</span>
                <p className='font-zcool line-ht30'>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is.
                     Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating 
                     terminated day everything.
                </p>
            </div>
        </div>
    )
}