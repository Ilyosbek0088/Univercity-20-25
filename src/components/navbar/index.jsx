import React from 'react'

// navbars
import NavbarDefault from './navbarDefault'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return (
    <div className='w-full  flex justify-center items-center'>
    <div className='container mb-5 z-10  backdrop-blur-md bg-[transparent] w-full h-auto lg:h-[80px] flex justify-center items-center'>
        <NavbarDefault/>
        <NavbarMobile/>
    </div>
    </div>
    
  )
}

export default Navbar