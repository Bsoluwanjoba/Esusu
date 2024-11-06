import Image from 'next/image'
import React from 'react'

export default function SectionTwo() {
  return (
    <section className='bg-[#cee] max-w-full'>
        <div className='md:max-h-[450px] h-full w-full md:flex flex-wrap p-2 gap-24 md:mr-0 mr-5'>
            <div className='md:mt-16 mt-5 md:ml-8 ml-5'>
            <h2 className='font-bold md:text-[35px] text-[30px] leading-[50px]'>Rotating savings groups</h2>
            <p className='mt-4 text-[#555] font-normal text-[18px] leading-[28px] max-w-[514px] max-h-[56px]'>Collectively save money with friends, family members and other people, and get payouts on a regular basis.</p>

            <button className="bg-[#f70] md:p-1 p-3 rounded-md gap-2 leading-[20px] md:mt-8 mt-9 md:w-[190px] w-full text-[14px]"><p className="text-[14px] text-white">Learn More</p></button>
            </div>



            <div className='space-y-8 mt-5 pb-4'>
                <div  className='flex md:gap-9 gap-3 md:ml-20 ml-5'>
                <Image src='/young-emotional-african-american-man-woman-bright-casual-clothes-yellow-space-beautiful-couple.png' height={168} width={235} alt='image' className="md:h-[168px] h-[100px] md:w-[235px] w-[150px] md:rounded-[2.7em] rounded-3xl"/>
                <Image src='/group-cheerful-friends-with-facemasks-having-drink-using-their-phones-park.png' height={168} width={235} alt='image' className="md:h-[168px] h-[100px] md:w-[235px] w-[150px] md:rounded-[2.7em] rounded-3xl"/>
                </div>


                <div className='flex md:gap-9 gap-4 md:mr-8 mr-0 md:ml-0 ml-4'>
                <Image src='/side-view-friends-with-smartphone.png' height={168} width={235} alt='image' className="md:h-[168px] h-[100px] md:w-[235px] w-[150px] md:rounded-[2.7em] rounded-3xl"/>
                <Image src='/Mask group (1).png' height={168} width={235} alt='image' className="md:h-[168px] h-[100px] md:w-[235px] w-[150px] md:rounded-[2.7em] rounded-3xl"/>
                </div>
                
                
            </div>
        </div>
    </section>
  )
}
