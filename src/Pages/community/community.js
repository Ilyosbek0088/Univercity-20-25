import React from 'react'
import Card from '../../components/ui/card'
import Card2 from '../../components/ui/cardv2'
import Card3 from '../../components/ui/cardv3'

const Community = () => {
  return (
    <div className='container w-full flex justify-center items-center'>
    <div className='com-img  w-full flex items-center justify-center gap-x-5  bg-black '>
      <Card/>
      <Card2/>
      <Card3/>
    </div>
    </div>
  )
}

export default Community