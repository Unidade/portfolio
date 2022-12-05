import './globals.css'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${inter.variable} font-sans overflow-x-hidden sm:px-6 py-2 text-gray-800 max-w-7xl`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
