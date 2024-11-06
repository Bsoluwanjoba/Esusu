import React from 'react'
import Header from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className=''>
      <Header />

      <div className='pt-36 ml-9'>
      <SectionOne />
      </div>

      <div className='pt-56'>
        <SectionTwo />
      </div>

      <div className='pt-[3rem]'>
        <SectionThree />
      </div>

      <div className='pt-[3rem] max-w-[1224px] m-auto'>
        <SectionFour />
      </div>

      <div className='pt-[4rem]'>
        <Footer />
      </div>


    </div>
  )
}
