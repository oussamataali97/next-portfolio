import React from 'react'
import Image from 'next/image'
const Aboutme = () => {
  return (
    <div id='about' className='lg:max-w-5xl md:max-w-lg mx-auto mt-16 px-6 my-6 gap-16 content-center lg:h-screen grid grid-cols-1 lg:grid-cols-2  items-center'>
        <div className="textanim image-side relative">
        <Image src='/developer.png' width={100} height={100} alt='img' className=' absolute bottom-5 w-16 z-50 right-4' />

        <Image src='/hero.webp' width={1000} height={1000} alt='img' className=' rounded-3xl w-[28rem] h-[23rem] object-cover' />
            <span className='w-40 h-40 bg-white rounded-full flex justify-center items-center absolute -bottom-[40px] -right-[30px] '>
            <Image src='/textanimated.svg' width={30} height={30} alt='img' className=' w-full  ' />


            </span>
        </div>
        <div className="mb-10 text-center lg:text-left">
            <p className='font-[900] text-blue-600
            '>ABOUT ME</p>
            <p className='py-4 font-[900] text-[27px] text-neutral-800 '>A dedicated Front-end Developer based in Errachidia, Morocco 📍</p>
            <p className='text-gray-500 title text-md title mb-6 md:mb-0'>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React,Next, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in
                 collaborating with cross-functional teams to produce outstanding web applications.</p>
        </div>

    </div>
    )
}

export default Aboutme