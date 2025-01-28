import React from 'react'
import { MdEmail } from 'react-icons/md';
import '../../App.css'
import photo from './../../assets/FAQ.png'
const Faq = () => {
  return (
    <div className=' w-full  max-sm:scale-90 flex  items-center justify-center'>
        <div className='mediafaq container  flex mt-16 gap-x-10 max-w-5xl '   >
            <img className='w-[512px] h-[340px]' src={photo}></img>
            <div>
                <h1 className='font-[500] text-[20px]'>We're here to help</h1>
                <p>Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions.</p>

                <div className='flex gap-x-5'>

                <button className='hover:bg-white hover:text-[#E5B300] mt-10 font-[500]  text-[white]  uppercase bg-[#E5B300] border-[#E5B300] border-[1px] border-solid text-[12px] w-[107px] h-[38px]'>
                Reaf Faqs
                </button>

               <button className= ' flex  items-center justify-center gap-x-1 hover:bg-white hover:text-[#E5B300] mt-10 font-[500]  text-[#E5B300]  uppercase bg-[white]  text-[12px] w-[117px] h-[38px]'>
               <span className='text-black'><MdEmail /></span> Ask a question
               </button>
  
             </div>
            </div>

  
          
        </div>
    </div>
  )
}

export default Faq