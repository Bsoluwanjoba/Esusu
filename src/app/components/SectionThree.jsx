import Image from 'next/image'
import React from 'react'

export default function SectionThree() {
  return (
    <section className='max-w-[1040px] m-auto'>
            <h2 className='text-[40px] text-center font-bold'>How it works</h2>
            <p className='text-center text-[#555] text-[18px] leading-[28px]'>Start saving on the EsusuNest mobile app in four easy steps</p>

                    <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                        <div className="md:flex flex-wrap items-center gap-4">
                        <span className="">
                            <Image src="/Illustration (3).png" height={250} width={324} alt="image" />
                        </span>
                        <span className='max-w-[495px] max-h-[88px] justify-center items-center'>
                            <h3 className="font-bold text-[24px]">Create your account</h3>
                            <p className="text-[#555] text-[18px] leading-[28px]">Download the app and create your account by providing the requested information</p>
                        </span>
                        </div>
                        <Image src='/Vector 1.png' height={313.42} width={186.2} alt='pointer' className='text-[#39a] absolute right-20 top-[89em] md:block hidden'/>
                        <div className='mt-9 md:flex flex-wrap items-center gap-4'>
                                <spa className='max-w-[495px] max-h-[88px] justify-center items-center'>
                                <h3 className='font-bold text-[24px]'>Setup your account</h3>
                                <p className='text-[#555] text-[18px] leading-[28px]'>Complete your account setup to verify and secure your profile</p>
                                </spa>
                                <span><Image src='/Illustration.png' height={250} width={324} alt='image'/></span>
                        </div>
                        <Image src='/Vector 2.png' height={313.42} width={186.2} alt='pointer' className='text-[#39a] absolute left-8 top-[108em] md:block hidden'/>
                        <div className='mt-9 md:flex flex-wrap items-center gap-4'>
                                <span><Image src='/Illustration (1).png' height={250} width={324} alt='image'/></span>
                                <span className='max-w-[495px] max-h-[88px] justify-center items-center'>
                                <h3 className='font-bold text-[24px]'>Create or find contribution</h3>
                                <p className='text-[#555] text-[18px] leading-[28px]'>Create your own contribution or join an already existing one, either private or open</p>
                                </span>
                        </div>
                        <Image src='/Vector 1.png' height={313.42} width={186.2} alt='pointer' className='text-[#39a] absolute right-20 top-[125em] md:block hidden'/>

                        <div className='mt-7 md:flex flex-wrap gap-3 items-center '>
                                <span className='max-w-[495px] max-h-[88px] justify-center items-center'>
                                <h3 className='font-bold text-[24px]'>Start saving</h3>
                                <p className='text-[#555] text-[18px] leading-[28px]'>You can now start saving your money with your contribution group</p>
                                </span>
                                <span><Image src='/Illustration (2).png' height={250} width={324} alt='image'/></span>
                        </div>
                    </div>
    </section>
  )
}
