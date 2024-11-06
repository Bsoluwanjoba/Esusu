import Image from 'next/image'
import React from 'react'

export default function SectionTwo() {
  return (
    <section className='bg-[#cee] max-w-full'>
        <div className='max-h-[450px] w-full md:flex flex-wrap p-2 gap-24'>
            <div className='mt-16 ml-8'>
            <h2 className='font-bold text-[35px] leading-[50px]'>Rotating savings groups</h2>
            <p className='mt-4 text-[#555] font-normal text-[18px] leading-[28px] max-w-[514px] max-h-[56px]'>Collectively save money with friends, family members and other people, and get payouts on a regular basis.</p>

            <button className="bg-[#f70] p-1 rounded-md gap-2 pl-4 pr-4 leading-[20px] mt-8 w-[190px] h-[28px] text-[14px]"><p className="text-[14px] text-white">Learn More</p></button>
            </div>



            <div className='space-y-8 mt-5 pb-4'>
                <div  className='flex gap-9 ml-20'>
                <Image src='/young-emotional-african-american-man-woman-bright-casual-clothes-yellow-space-beautiful-couple.png' height={168} width={235} alt='image' className='rounded-[2.7em]'/>
                <Image src='/group-cheerful-friends-with-facemasks-having-drink-using-their-phones-park.png' height={168} width={235} alt='image' className='rounded-[2.7em]'/>
                </div>


                <div className='flex gap-9 mr-8'>
                <Image src='/side-view-friends-with-smartphone.png' height={168} width={235} alt='image' className='rounded-[2.7em]'/>
                <Image src='/Mask group (1).png' height={168} width={235} alt='image' className='rounded-[2.7em]'/>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}
