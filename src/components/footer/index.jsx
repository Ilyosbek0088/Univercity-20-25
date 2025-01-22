import React from 'react'

// footers
// import FooterDefault from './footerDefault'
// import FooterMobile from './footerMobile'
import Bar2025 from './../../assets/Bar2025.jpg'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center '>
        {/* <FooterDefault/>
        <FooterMobile/> */}
        <span className='text-[20px]'>Unvercity-</span>
       <img className='w-16' src={Bar2025}></img>
       <span className='text-[20px]'>-by-Sweetie</span>
    </div>
  )
}

export default Footer