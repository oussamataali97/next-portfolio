import React from 'react'
import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Home = () => {
  return (
    <>
    <div id='home'  className="containedr bg-gray-50 w-full px-6 py-10 lg:py-0">
    <div className='relative text-black  max-w-5xl mx-auto z-50 lg:h-screen md:mt-2 flex flex-col lg:flex-row justify-center lg:justify-between items-center '>
      <div className="order-2 lg:order-1  flex flex-col relative max-w-[700px] ">
        <div className="relative mt-6 md:mb-4 lg:mb-0 ">
      <p className='text-4xl xs:text-5xl sm:text-6xl lg:text-6xl text-center lg:text-left text-gray-800 md:leading-[70px] font-[900]'>Front-End React Developer</p>
      <Image src='/hand.png' width={60} height={60} alt='hand' className='w-10 md:w-16 absolute lg:bottom-0 lg:right-[290px]  bottom-0 right-[30px]  md:bottom-2 md:right-[120px]' />
        </div>
        <div className="text">


      <p className='my-8 md:my-4 text-gray-500  max-w-[500px] mx-auto lg:mx-0 text-lg title text-center lg:text-left'>Hi, I'm Oussama Taali. A passionate Front-end React Developer based in Tanger, Morocco. 📍</p>
      </div>
        <div className="text-4xl flex justify-center lg:justify-start gap-3 py-8 md:py-5">
        <Link href="https://github.com/oussamataali97"> <AiFillGithub/></Link>
          <Link href="https://www.linkedin.com/in/oussama-taali-02149316a/"><AiFillLinkedin color='blue'/></Link>
        </div>
        </div>
        <div className="hero-img order-1 lg:order-2"></div>

        <div className="lg:absolute lg:-bottom-9 order-3 flex-col lg:flex-row flex items-center mt-14 ">
        <p className='lg:border-r-2 border-b-2 lg:border-b-0  md:pr-5 font-[600] md:font-[800] text-lg '>Tech Stack</p>
        <ul className='flex md:space-x-3 lg:space-x-6 justify-center items-center md:justify-start flex-wrap gap-5 mt-8 md:mt-6 lg:mt-0 lg:ml-16'>
          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/js.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/react.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/css.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/next.svg' width={50} height={50} alt='hand' /></li>

          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/html.svg' width={40} height={40} alt='hand' /></li>
          <li  className='bg-white boxicon rounded-full flex justify-center items-center w-20 h-20'>      <Image src='/saas.svg' width={40} height={40} alt='hand' /></li>
        </ul>
      </div>
      </div>

      </div>
</>



  )
}

export default Home