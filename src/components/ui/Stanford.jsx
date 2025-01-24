    import React from 'react'
    import photo from '../../assets/univer-img-1.png'

    const Stanford = () => {
      return (
        <div className='card container mt-16'>
            <div>
                <img src={photo}></img>
                <h1 className='text-[20px] font-[500]'>Stanford University</h1>
                <a href="#" className= " uppercase text-yellow-500 text-left font-semibold text-sm hover:underline" >
        See university →
      </a> 
            </div>
        </div>
      )
    }
    
    export default Stanford