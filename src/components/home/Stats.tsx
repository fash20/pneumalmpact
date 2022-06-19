import React from 'react'
import '../styles/General.css'
interface Stats {
    title?   : string 
    value? : string
}

const Stats: React.FC<Stats> = (props) => {
    const {title, value} = props
  return (
    <div className='flex flex-col stats'>
        <span className='stat-vaule'>{value}+</span>
        <span className='stat-title'>{title}</span>
    </div>
  )
}

export default Stats