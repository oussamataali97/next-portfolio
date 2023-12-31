import React, { useState } from 'react'
import Link from 'next/link'
import {RiMenu3Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [menu,setMenu]=useState(false)

  return (
    <>
    <div  className='flex nave  lg:fixed z-[10000] top-0 left-0 right-0 justify-between relative
     items-center px-4 md:px-9  py-6  bg-white font-bold'>
        <p className='text-xl'>Oussama.dev</p>
        <ul className='lg:flex  items-center space-x-6 hidden'>
           <Link className='hover:text-blue-600' href='#home'> <li>Home</li></Link>
            <Link className='hover:text-blue-600' href='#about'><li>About</li></Link>
           <Link className='hover:text-blue-600' href='#projects'> <li>Projects</li></Link>
           <Link className='hover:text-blue-600' href='#contact'> <li>Contact</li></Link>
        </ul>
        <button className=' lg:hidden z-40' onClick={()=>setMenu(!menu)}> {menu ? <AiOutlineClose size={30} className='fixed right-3 '/> : <RiMenu3Fill size={30} />} </button>

        {menu && (
        <ul data-aos="fade-left" className='fixed top-0 left-0 right-0 flex flex-col justify-center items-center text-xl font-[600] space-y-8 bg-white  h-screen'>
        <Link className='hover:text-blue-600' onClick={()=>setMenu(false)} href='#home'> <li>Home</li></Link>
         <Link className='hover:text-blue-600' onClick={()=>setMenu(false)} href='#about'><li>About</li></Link>
        <Link className='hover:text-blue-600' onClick={()=>setMenu(false)} href='#projects'> <li>Projects</li></Link>
        <Link className='hover:text-blue-600' onClick={()=>setMenu(false)} href='#contact'> <li>Contact</li></Link>
     </ul>
    )}

    </div>



    </>
  )
}

export default Navbar