import React from 'react'
import photo from '../../assets/designer.png'

const Designer = () => {
  return (
    <div className='card container mt-16'>
        <div>
            <img src={photo}></img>
            <h1 className='text-[20px] font-[500]'>User experience design</h1>
            <a href="#" className= " uppercase text-yellow-500 text-left font-semibold text-sm hover:underline" >
            SEE COURSE GUIDE →
  </a> 
        </div>
    </div>
  )
}

export default Designer