import React, { useState } from 'react'
import Link from 'next/link'
import {RiMenu3Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
  const [menu,setMenu]=useState(false)

  return (
    <div  className='flex  md:fixed z-[10000] top-0 left-0 right-0 justify-between items-center px-4 md:px-9  py-6 shadow-md bg-white font-bold'>
        <p className='text-xl'>Oussama.dev</p>
        <ul className='md:flex  items-center space-x-6 hidden'>
           <Link className='hover:text-blue-600' href='#home'> <li>Home</li></Link>
            <Link className='hover:text-blue-600' href='#about'><li>About</li></Link>
           <Link className='hover:text-blue-600' href='#projects'> <li>Projects</li></Link>
           <Link className='hover:text-blue-600' href='#contact'> <li>Contact</li></Link>
        </ul>
        <button className='block md:hidden' onClick={()=>setMenu(!menu)}> {menu ? <AiOutlineClose size={30}/> : <RiMenu3Fill size={30} />} </button>

    </div>
  )
}

export default Navbar