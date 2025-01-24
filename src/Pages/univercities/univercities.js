import React from 'react'

import Stanford from '../../components/ui/Stanford'
import Stallion from '../../components/ui/Stallion'
import Covenant from '../../components/ui/Covenant'


const Univercities = () => {
  return (
    <div className=' container w-full mt-10'>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-[#36384E] font-[500] text-[20px] '>
            Top ranking universities
            </h1>

           <div className='mt-6 w-[133px] h-[12px] bg-[#E5B300] rounded-lg'></div>

        </div>
<div className='flex'>
       <Stanford/>
       <Stallion/>
       <Covenant/>
</div>
<div className='w-full flex justify-center items-center'>
  <button className='hover:bg-[#E5B300] hover:text-white mt-10 font-[500]  text-[#E5B300]  uppercase bg-white border-[#E5B300] border-[1px] border-solid text-[12px] w-[107px] h-[38px]'>
    See all →
    </button>
    </div>
    </div>
  )
}

export default Univercities