import Image from "next/image"
import { FaApple } from "react-icons/fa"

export default function SectionOne() {
  return (
    <div className='max-w-[1024px]'>
        <section className=' flex gap-20'>
            <div className="max-w-[514px] max-h-[120px] mt-10">
                <h2 className='font-bold text-[50px] leading-[60px]'>Bringing <i className='text-[#f70] font-medium'>esusu</i> closer to you</h2>
                <p className='mt-4 text-[#555] font-normal text-[18px] leading-[28px]'>We’re providing a digital platform for the traditional rotating savings and credit programme so you can easily get access and join groups from your mobile phone.</p>

                <div className="flex gap-4 mt-7">
                    <button className="bg-[#f70] p-2 flex rounded-md gap-2 pl-4 pr-4 leading-[20px]"><FaApple size={24} className="text-white"/><p className="text-[14px] text-white">Download on App Store</p></button>
                    <button className="bg-[#f70] p-2 flex rounded-md gap-2 pl-4 pr-4 leading-[20px]"><Image src='/logos_google-play-icon.png' height={24} width={24} alt="logo"/><p className="text-[14px] text-white">Download on Google Play</p></button>
                </div>
            </div>


            <div className='flex gap-4 -mb-36'>
                <Image src='/Mask group.png' height={460} width={340} alt="images"/>
                    <div className="space-y-4">
                    <Image src='/shot-two-young-black-females-looking-phone-together-feeling-excited-surprised.png' height={220} width={340} alt="images" className="rounded-3xl"/>
                    <Image src='/cheerful-businessman-taking-pictures-mobile-phone-posing-with-coffee-cup-camera-happy-freelancer-using-smartphone-take-photos-coffee-break-enjoying-modern-technology.png' height={220} width={340} alt="images" className="rounded-3xl max-w-[340px]"/>
                    </div>
            </div>
        </section>
    </div>
  )
}
