import React from 'react'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-neutral-600 text-white'>
        <div className="max-w-5xl mx-auto flex justify-between items-center py-10 ">
        <p className=' font-[700] text-xl '>Copyright © 2023. All rights are reserved</p>
            <div className="flex gap-4">
            <Link href="https://github.com/oussamataali97"> <AiFillGithub size={30}/></Link>
                     <Link href="https://www.linkedin.com/in/oussama-taali-02149316a/"><AiFillLinkedin size={30} /></Link>
            </div>

            </div>
    </div>
  )
}

export default Footer