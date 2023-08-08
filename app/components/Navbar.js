import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div  className='flex  fixed z-[10000] top-0 left-0 right-0 justify-between items-center px-9 py-6 shadow-md bg-white font-bold'>
        <p className='text-xl'>Oussama.dev</p>
        <ul className='flex  items-center space-x-6'>
           <Link className='hover:text-blue-600' href='#home'> <li>Home</li></Link>
            <Link className='hover:text-blue-600' href='#about'><li>About</li></Link>
           <Link className='hover:text-blue-600' href='#projects'> <li>Projects</li></Link>
           <Link className='hover:text-blue-600' href='#contact'> <li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Navbar