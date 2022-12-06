import './globals.css'
import { Inter } from '@next/font/google'
import Drawer from '../components/Drawer'

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
    <html lang='en' className='max-w-[1366px]'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.variable} font-sans text-gray-800`}>
        <Drawer>{children}</Drawer>
      </body>
    </html>
  )
}
