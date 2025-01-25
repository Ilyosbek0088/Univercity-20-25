import React from 'react'

import Stallion from '../../components/ui/Stallion'
import Covenant from '../../components/ui/Covenant'
import Designer from '../../components/ui/designerCourse'
import Science from '../../components/ui/scienceCourse'
import Business from '../../components/ui/businessCourse'

const Courses = () => {
  return (
    <div className=' container w-full mt-10'>
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-[#36384E] font-[500] text-[20px] '>
        Most popular courses
        </h1>

       <div className='mt-6 w-[133px] h-[12px] bg-[#E5B300] rounded-lg'></div>

    </div>
<div className='flex'>
   <Designer/>
   <Science/>
   <Business/>
</div>
<div className='w-full flex justify-center items-center'>
<button className='hover:bg-[#E5B300] hover:text-white mt-10 font-[500]  text-[#E5B300]  uppercase bg-white border-[#E5B300] border-[1px] border-solid text-[12px] w-[107px] h-[38px]'>
See all →
</button>
</div>
<div className='w-full bg-[#E5B300] h-[2px] mt-10'></div>
</div>
  )
}

export default Courses