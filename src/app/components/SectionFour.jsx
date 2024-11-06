import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
export default function SectionFour() {
  return (
    <section className=''>
        <div className='bg-[#ffe] rounded-[40px] m-auto max-w-[1352px] md:max-h-[360px] h-full md:flex block gap-8 items-center md:p-0 p-3'>
            <span className='flex gap-4 ml-9'>
            <Image src='/iPhone 12 Mockup Front View (1).png' height={200} width={296} alt='pointer' className='mt-11' />
            <Image src='/iPhone 12 Mockup Front View.png' height={312} width={296} alt='pointer'/>
                </span>

            <span className='max-w-[514px] max-h-[174px] items-center md:mt-0 mt-10'>
                <h2 className='md:text-[40px] text-[34px] font-bold leading-[50px]'>Get the mobile app</h2>
                <p className='md:w-[499px] w-[359px] text-[#555] md:text-[18px] text-[15px] leading-[28px] mt-3'>Download the EsusuNest mobile app and get started with your collective savings</p>

                <span className="md:flex block gap-4 mt-2">
                    <button className="bg-[#f70] md:p-2 p-3 flex rounded-md gap-2 leading-[20px] w-full text-center items-center"><FaApple size={24} className="text-white"/><p className="text-[14px] text-white">Download on App Store</p></button>
                    <button className="bg-[#f70] md:p-2 p-3 flex rounded-md gap-2 pl-4 pr-4 leading-[20px] w-full md:mt-0 mt-2"><Image src='/logos_google-play-icon.png' height={24} width={24} alt="logo"/><p className="text-[14px] text-white">Download on Google Play</p></button>
                </span>
            </span>

        </div>
    </section>
  )
}
