"use client"
import Image from 'next/image'
import Navbar from './components/Navbar'
import Homee from './components/Homee'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react'
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    AOS.init()
}, [])
  return (
      <div className="main">
            <Head>
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>
          	<Navbar/>
            <div className="">
            <Homee/>
            <Aboutme/>
            <Projects/>
            <Contact/>
            <Footer/>

            </div>
      </div>
  )
}
