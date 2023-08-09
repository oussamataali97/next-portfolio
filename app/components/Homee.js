import React from 'react'
import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Home = () => {
  return (
    <>
    <div id='home'  className="containedr bg-gray-50 w-full px-6 py-10 md:py-0">
    <div className='relative text-black  max-w-5xl mx-auto z-50 lg:h-screen md:mt-2 flex flex-col md:flex-row justify-center md:justify-between items-center '>
      <div className="order-2 md:order-1  flex flex-col relative max-w-[700px] ">
        <div className="relative mt-6">
      <p className='text-4xl xs:text-5xl sm:text-6xl lg:text-6xl text-center md:text-left text-gray-800 md:leading-[70px] font-[900]'>Front-End React Developer</p>
      <Image src='/hand.png' width={60} height={60} alt='hand' className='w-10 absolute lg:bottom-0 lg:right-[290px]  bottom-0 right-[30px] ' />
        </div>
        <div className="text">


      <p className='my-8  max-w-[500px] text-lg title text-center md:text-left'>Hi, I'm Oussama Taali. A passionate Front-end React Developer based in Errachidia, Morocco. 📍</p>
      </div>
        <div className="text-4xl flex justify-center md:justify-start gap-3 py-8">
        <Link href="https://github.com/oussamataali97"> <AiFillGithub/></Link>
          <Link href="https://www.linkedin.com/in/oussama-taali-02149316a/"><AiFillLinkedin color='blue'/></Link>
        </div>
        </div>
        <div className="hero-img order-1 md:order-2"></div>

        <div className="lg:absolute lg:-bottom-9 order-3 flex-col md:flex-row flex items-center  ">
        <p className='lg:border-r-2 border-b-2 md:border-b-0  pr-5 font-[600] md:font-[800] text-lg '>Tech Stack</p>
        <ul className='flex md:space-x-10 justify-center items-center md:justify-start flex-wrap gap-5 mt-8 md:mt-0 md:ml-16'>
          <li  className='bg-white rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/js.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/react.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/css.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/html.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/saas.svg' width={40} height={40} alt='hand' /></li>
        </ul>
      </div>
      </div>

      </div>
</>



  )
}

export default Home