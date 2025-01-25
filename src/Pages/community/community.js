import React from 'react'
import Card from '../../components/ui/card'
import Card2 from '../../components/ui/cardv2'
import Card3 from '../../components/ui/cardv3'

const Community = () => {
  return (
    <div className='w-full flex items-center justify-center '>
    <div className='container w-full max-w-[1450px] flex justify-center items-center'>
    <div className='com-img  w-full flex items-center justify-center gap-x-5  bg-black '>
      <Card/>
      <Card2/>
      <Card3/>
    </div>
    </div>
    </div>
  )
}

export default Community