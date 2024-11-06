'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdCancel } from "react-icons/md"
export default function Header () {
  const [open, setOpen] = useState(false)

  function toggleBar (){
    setOpen(!open)
  }

  return (
    <div>
                    <div className="w-full flex justify-between bg-white shadow-xl items-center flex-wrap fixed z-[99] h-[80px]">

              {/* Logo */}
              <section className="md:p-3 p-1 z-[99] md:ml-12 ml-4">
              <Image src="/EN BLACK TEXT2 1.png" alt="esusu" width={70} height={70}  />
              </section>

              {/* Search bar */}
              <section className="p-3 md:flex hidden gap-16">
              <Link href='/'>About</Link>
              <Link href='/'>FAQs</Link>
              <Link href='/'>Contact</Link>
              </section>

              {/* Notifications, Messages, Profile */}
              <section className="p-2 gap-3 md:flex hidden mr-14 bg-[#f70] text-white rounded-md text-center max-w-[140px]">
              <button className="text-[12px] text-center pr-3 pl-3">Get Mobile App</button>
              </section>

               <RxHamburgerMenu size={25} className="md:hidden block text-black relative z-[99] right-[18em]" onClick={toggleBar}/>
               <MdCancel size={25} className="md:hidden block text-black relative z-[99] right-[18em]" onClick={toggleBar}/>

               {
            open ? (
                <div className='absolute z-[99] w-full h-screen bg-white flex flex-col justify-center items-center md:hidden'>
                       {/* Search bar */}
              <section className="p-3 md:hidden block gap-16">
              <Link href='/'>About</Link>
              <Link href='/'>FAQs</Link>
              <Link href='/'>Contact</Link>
              </section>

              {/* Notifications, Messages, Profile */}
              <section className="p-2 gap-3 md:hidden block mr-14 bg-[#f70] text-white rounded-md text-center max-w-[140px]">
              <button className="text-[12px] text-center pr-3 pl-3">Get Mobile App</button>
              </section>

                 
                </div>
            )
            : (
               ''
            )
        }
               </div>

               {/* Hamburger Menu */}
            
    </div>
  )
}
