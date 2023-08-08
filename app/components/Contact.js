import React from 'react'
import {FaMapLocationDot} from 'react-icons/fa6'
import {AiFillMail,AiFillPhone} from 'react-icons/ai'


const Contact = () => {
  return (
    <div id='contact'  data-aos="zoom-in-down" className='max-w-5xl mx-auto py-24'>
        <p className='bluetitle'> CONTACT</p>
        <p className="blacktitle">Don't be shy! Hit me up! 👇</p>
        <div className="flex justify-between items-center mt-14">
            <div className="flex items-center gap-3">
            <div className='bg-white shadow-lg
             rounded-full flex justify-center items-center w-24 h-24'><FaMapLocationDot size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl '>Location</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>Errachidia , Morocco</li>
                </ul>
            </div>
            <div className="flex items-center gap-3 ">
            <div className='bg-white shadow-lg
             rounded-full flex justify-center items-center w-24 h-24'><AiFillMail size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl '>Mail</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>oussamataali1997@gmail.com</li>
                </ul>
            </div>
            <div className="flex items-center gap-3 ">
            <div className='bg-white shadow-lg
             rounded-full flex justify-center items-center w-24 h-24'><AiFillPhone size={30} className='text-blue-600'/>     </div>
                <ul>
                    <li className='text-neutral-600 font-[700] text-xl '>Phone</li>
                    <li className='title text-lg text-gray-500 font-[500] cursor-pointer hover:text-blue-600'>+2126 53 51 50 92</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Contact