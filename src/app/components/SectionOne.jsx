import Image from "next/image"
import { FaApple } from "react-icons/fa"

export default function SectionOne() {
  return (
    <div className=''>
        <section className='md:flex block gap-20'>
            <div className="max-w-[514px] max-h-[120px] mt-10">
                <h2 className='font-bold md:text-[50px] text-[37px] leading-[60px]'>Bringing <i className='text-[#f70] font-medium'>esusu</i> closer to you</h2>
                <p className='mt-4 text-[#555] font-normal text-[18px] leading-[28px]'>We’re providing a digital platform for the traditional rotating savings and credit programme so you can easily get access and join groups from your mobile phone.</p>

                <div className="md:flex block gap-4 mt-7 md:space-y-0 space-y-3 md:mr-0 mr-2">
                    <button className="bg-[#f70] flex rounded-md gap-2 leading-[20px] md:max-w-[214px] w-full md:p-2 p-3 items-center"><FaApple size={24} className="text-white text-center"/><p className="text-[14px] text-white text-center items-center">Download on App Store</p></button>
                    <button className="bg-[#f70]  md:p-2 p-3 flex rounded-md gap-2 leading-[20px] md:max-w-[270px] w-full items-center"><Image src='/logos_google-play-icon.png' height={24} width={24} alt="logo"/><p className="text-[14px] text-white">Download on Google Play</p></button>
                </div>
            </div>


            <div className='flex gap-2 md:mt-0 mt-[19em]'>
                <Image src='/Mask group.png' height={460} width={340} alt="images" className="md:h-[460px] h-[320px] md:w-[340px] w-[200px]"/>
                    <div className="space-y-4 ">
                    <Image src='/shot-two-young-black-females-looking-phone-together-feeling-excited-surprised.png' height={220} width={340} alt="images" className="rounded-2xl md:h-[220px] h-[150px] md:w-[340px] w-[159px]" />
                    <Image src='/cheerful-businessman-taking-pictures-mobile-phone-posing-with-coffee-cup-camera-happy-freelancer-using-smartphone-take-photos-coffee-break-enjoying-modern-technology.png' height={260} width={440} alt="images" className="rounded-2xl md:h-[220px] h-[150px] md:w-[340px] w-[159px]" />
                   
                    </div>
            </div>
        </section>
    </div>
  )
}
