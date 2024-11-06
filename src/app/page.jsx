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

      <div className='md:pt-36 pt-16 md:ml-9 ml-3'>
      <SectionOne />
      </div>

      <div className='pt-28 m-auto'>
        <SectionTwo />
      </div>

      <div className='pt-[3rem] m-auto max-w-[1024px] p-3'>
        <SectionThree />
      </div>

      <div className='pt-[3rem] m-auto md:max-w-[1224px] max-w-[1004px] md:p-0 p-5'>
        <SectionFour />
      </div>

      <div className='pt-[4rem]'>
        <Footer />
      </div>


    </div>
  )
}
