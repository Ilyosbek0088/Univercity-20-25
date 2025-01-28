import React from 'react'
import Card from '../../components/ui/card'
import Card2 from '../../components/ui/cardv2'
import Card3 from '../../components/ui/cardv3'
import '../../App.css'

const Community = () => {
  return (
    <div className='max-sm:bg-black w-full max-sm:my-9  max-sm:py-48  flex items-center justify-center '>
    <div className='container  w-full sm:flex-col max-w-[1450px] flex justify-center items-center'>
    <div className='  max-sm:flex-col card-flex  com-img  w-full flex  items-center justify-center gap-x-5  bg-black '>
      <Card/>
      <Card2/>
      <Card3/>
    </div>
    </div>
    </div>
  )
}

export default Community