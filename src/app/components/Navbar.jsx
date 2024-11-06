'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
export default function Header () {
  const [logout, setLogout] = useState(false)

  function toggleBar (){
    setLogout(!logout)
  }

  return (
    <div>
                    <div className="w-full flex justify-between bg-white shadow-xl items-center flex-wrap fixed z-[99] h-[80px]">

              {/* Logo */}
              <section className="p-3 z-[99] ml-12">
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
               </div>
            
    </div>
  )
}
