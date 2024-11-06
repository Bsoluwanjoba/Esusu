import Image from 'next/image'
import { FaApple, FaFacebookSquare, FaInstagram } from "react-icons/fa"
import { BsTwitterX, BsLinkedin } from "react-icons/bs"
import Link from 'next/link'


export default function Footer() {
  return (
    <section>
        <div className='bg-black md:max-h-[256px] h-full md:flex flex-wrap justify-between md:p-14 p-9'>
            <div>
             <Image src='/EN WHITE TEXT2 1.png' height={91} width={208} alt="logo"/>
                <span className='flex gap-2 mt-5'>
                <FaApple size={22} className="text-black rounded-full bg-white p-1"/>
                <Image src='/logos_google-play-icon.png' height={22} width={22} alt="logo" className=' rounded-full bg-white p-1'/>
                </span>
            </div>


            <div className='flex gap-9 md:mr-20 md:mt-0 mt-8'>
                <span className='text-white space-y-2 md:mr-16 mr-8'>
                    <h2 className='font-bold text-[18px] leading-[28px] flex-col'>Company</h2>
                    <p className='text-[14px] text-[#fff]'>About</p>
                    <p className='text-[14px] text-[#fff]'>Contact</p>
                    <p className='text-[14px] text-[#fff]'>Terms of service</p>
                    <p className='text-[14px] text-[#fff]'>Privacy policy</p>
                </span>

                <span className='text-white space-y-2'>
                    <h2 className='font-bold text-[18px] leading-[28px]'>Contact</h2>
                    <p className='text-[14px] text-[#fff]'>email@email.com</p>
                    <p className='text-[14px] text-[#fff]'>company address</p>

                    <span className='flex gap-4'>
                    <BsTwitterX size={24} className='text-white'/>
                    <BsLinkedin size={24} className='text-white'/>
                    <FaFacebookSquare size={24} className='text-white'/>
                    <FaInstagram size={24} className='text-white'/>
                    </span>
                </span>
            </div>
        </div>

    </section>
  )
}
