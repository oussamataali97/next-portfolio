import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

 
  return (
    <div className='bg-neutral-600 text-white md:px-8 lg:px-2'>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center py-10 ">
        <p className=' font-[700] text:lg my-3 md:text-xl text-center '>Copyright © {year}. All rights are reserved</p>
            <div className="flex gap-4">
            <Link href="https://github.com/oussamataali97"> <AiFillGithub size={30}/></Link>
                     <Link href="https://www.linkedin.com/in/oussama-taali-02149316a/"><AiFillLinkedin size={30} /></Link>
            </div>

            </div>
    </div>
  )
}

export default Footer