import React from 'react'
import '../styles/General.css'
interface Stats {
    title?   : string 
    value? : string
}

const Stats: React.FC<Stats> = (props) => {
    const {title, value} = props
  return (
    <div className='flex flex-col stats gap-2'>
        <span className='text-3xl'>{value}+</span>
        <span className='text-xl'>{title}</span>
    </div>
  )
}

export default Stats