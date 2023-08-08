import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oussama Taali | Front-end Developer',
  description: 'Generated by create next app',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <link rel="shortcut icon" href="/favicon.png" />


      <body className={inter.className}>{children}</body>
    </html>
  )
}
