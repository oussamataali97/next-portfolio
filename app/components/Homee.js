import React from 'react'
import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Home = () => {
  return (
    <>
    <div id='home'  className="containedr bg-gray-50 w-full ">
    <div className='relative text-black  max-w-5xl mx-auto z-50 h-screen mt-2 flex justify-between items-center '>
      <div className="left flex flex-col  relative max-w-[700px] ">
        <div className="relative">
      <p className='text-6xl text-gray-800 leading-[70px] font-[900]'>Front-End React Developer</p>
      <Image src='/hand.png' width={60} height={60} alt='hand' className='absolute bottom-1 right-[290px] ' />
        </div>
        <div className="text">


      <p className='my-8  max-w-[500px] text-lg title'>Hi, I'm Oussama Taali. A passionate Front-end React Developer based in Errachidia, Morocco. 📍</p>
      </div>
        <div className="text-4xl flex gap-3">
        <Link href="https://github.com/oussamataali97"> <AiFillGithub/></Link>
          <Link href="https://www.linkedin.com/in/oussama-taali-02149316a/"><AiFillLinkedin color='blue'/></Link>
        </div>
        </div>
        <div className="hero-img"></div>
        <div className="tecstack absolute flex items-center  -bottom-8">
        <p className='border-r-2 pr-5 font-[800] text-lg '>Tech Stack</p>
        <ul className='flex space-x-10 ml-16'>
          <li data-aos="fade-right" className='bg-white rounded-full flex justify-center items-center w-16 h-16'>      <Image src='/js.svg' width={30} height={30} alt='hand' /></li>
          <li data-aos="fade-right" className='bg-white rounded-full flex justify-center items-center w-16 h-16'>      <Image src='/react.svg' width={30} height={30} alt='hand' /></li>
          <li data-aos="fade-right" className='bg-white rounded-full flex justify-center items-center w-16 h-16'>      <Image src='/css.svg' width={30} height={30} alt='hand' /></li>
          <li data-aos="fade-right" className='bg-white rounded-full flex justify-center items-center w-16 h-16'>      <Image src='/html.svg' width={30} height={30} alt='hand' /></li>
          <li data-aos="fade-right" className='bg-white rounded-full flex justify-center items-center w-16 h-16'>      <Image src='/saas.svg' width={30} height={30} alt='hand' /></li>
        </ul>
      </div>
      </div>

      </div>
</>



  )
}

export default Home