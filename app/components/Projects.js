import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiLinkExternal} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'


const Projects = () => {
  return (
    <div id='projects' className="bg-gray-100 py-16 px-6 md:py-32">
  <div className='max-w-5xl mx-auto'>
      <p className='bluetitle'>Portfolio</p>
      <p className='blacktitle mb-12'>Each project is a unique piece of development 🧩</p>

      <div className="grid grid-cols-1 gap-16">

      <div className="box flex flex-col  md:gap-[6rem] rounded-2xl justify-between  md:flex-row  md:h-[25rem]   p-[1rem] bg-white ">
      <div className="w-full md:w-[53rem]  shadow-lg overflow-hidden h-[16rem] md:h-auto  rounded-2xl">
      <Link href="/" className='  '><Image src="/screen1.png"  className='imgpro w-full h-auto object-cover '  height={1366} width={2000} alt='projectbanner' /></Link>

      </div>
        <div className="w-[44rem] py-10 md:py-0  text-center flex flex-col items-center self-center">
        <p className='text-xl font-[900] text-neutral-900 mb-2 uppercase'>Versus Immobilier</p>
        <p className='text-neutral-500 font-[600] max-w-[300px] '>Are you looking for real estate in Morocco? Do not search anymore ! Welcome to Snapimmo, the reference real estate platform dedicated to the Moroccan market. </p>
          <div className="flex gap-4 items-center my-4">
            <p className='font-bold p-3 shadow-md'>React</p>
            <p className='font-bold p-3 shadow-md'>Tailwind</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="https://github.com/oussamataali97/immobilier"><p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>  Code <AiFillGithub size={27}/></p></Link>
            <Link href="https://immobilier.vercel.app/" target='_blank'><p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>Demo <BiLinkExternal size={27}/>  </p></Link>
          </div>
        </div>
      </div>

      <div className="box flex flex-col  md:gap-[6rem] rounded-2xl justify-between  md:flex-row  md:h-[25rem]   p-[1rem] bg-white ">
      <div className="w-full md:w-[53rem]  shadow-lg overflow-hidden h-[16rem] md:h-auto  rounded-2xl">
      <Link href="/" className='  '><Image src="/hoobank.png"  className='imgpro w-full h-auto object-cover '  height={1366} width={2000} alt='projectbanner' /></Link>

      </div>
      <div className="w-[44rem] py-10 md:py-0  text-center flex flex-col items-center self-center">
        <p className='text-xl font-[900] text-neutral-900 mb-2 uppercase'>Hoobank</p>
        <p className='text-neutral-500 font-[600] max-w-[300px] '>
Hoobank: A ReactJS and Tailwind CSS-powered landing page that redefines modern online banking with its seamless interface and contemporary design.</p>
          <div className="flex gap-4 items-center my-4">
            <p className='font-bold p-3 shadow-md'>React</p>
            <p className='font-bold p-3 shadow-md'>Tailwind</p>
          </div>
          <div className="flex gap-4 items-center">
           <Link href="https://github.com/oussamataali97/startup-agency-Nextjs"> <p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>  Code <AiFillGithub size={27}/></p></Link>
           <Link href="https://startup-agency-nextjs-five.vercel.app/" target='_blank'> <p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>Demo <BiLinkExternal size={27}/>  </p></Link>
          </div>
        </div>
      </div>

      <div className="box flex flex-col  md:gap-[6rem] rounded-2xl justify-between  md:flex-row  md:h-[25rem]   p-[1rem] bg-white ">
      <div className="w-full md:w-[53rem]  shadow-lg overflow-hidden h-[16rem] md:h-auto  rounded-2xl">
      <Link href="/" className='  '><Image src="/agency.png"  className='imgpro w-full h-auto object-cover '  height={1366} width={2000} alt='projectbanner' /></Link>

      </div>
      <div className="w-[44rem] py-10 md:py-0  text-center flex flex-col items-center self-center">
        <p className='text-xl font-[900] text-neutral-900 mb-2 uppercase'>STARTUP AGENCY</p>
        <p className='text-neutral-500 font-[600] max-w-[300px] '>

        Startup agency: Next.js, AOS, and Tailwind CSS combine for a captivating startup agency landing page, blending innovation and style seamlessly.</p>
          <div className="flex gap-4 items-center my-4">
            <p className='font-bold p-3 shadow-md'>Nextjs</p>
            <p className='font-bold p-3 shadow-md'>Tailwind</p>
          </div>
          <div className="flex gap-4 items-center">
           <Link href="https://github.com/oussamataali97/hoobank"> <p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>  Code <AiFillGithub size={27}/></p></Link>
           <Link href="http://hoobank-three-olive.vercel.app/" target='_blank'> <p className='font-bold p-3 hover:text-blue-600 cursor-pointer flex gap-1 items-center'>Demo <BiLinkExternal size={27}/>  </p></Link>
          </div>
        </div>
      </div>

      </div>




    </div>


    </div>

  )
}

export default Projects