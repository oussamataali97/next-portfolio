import React from 'react'
import {FaMapLocationDot} from 'react-icons/fa6'
import {AiFillMail,AiFillPhone} from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='contact'   className='max-w-5xl mx-auto px-6 py-24'>
        <p className='bluetitle text-center md:text-left'> CONTACT</p>
        <p className="blacktitle text-center md:text-left">Don't be shy! Hit me up! 👇</p>
        <div className="flex flex-col md:flex-wrap lg:flex-nowrap md:flex-row justify-between md:items-center space-y-16 md:space-y-0 mt-14">
            <div className="flex flex-col text-center md:text-left  md:flex-row items-center gap-3">
            <div className='bg-white boxicon
             rounded-full flex justify-center items-center w-24 h-24'><FaMapLocationDot size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl py-2 md:py-0 '>Location</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>Tanger , Morocco</li>
                </ul>
            </div>
            <div className="flex  flex-col  md:flex-row text-center md:text-left items-center gap-3 ">
            <div className='bg-white boxicon
             rounded-full flex justify-center items-center w-24 h-24'><AiFillMail size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl py-2 md:py-0 '>Mail</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>oussamataali1997@gmail.com</li>
                </ul>
            </div>
            <div className="flex flex-col  md:flex-row text-center md:text-left items-center gap-3 ">
            <div className='bg-white boxicon
             rounded-full flex justify-center items-center w-24 h-24'><AiFillPhone size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl py-2 md:py-0 '>Phone</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>+2126 53 51 50 92</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Contact