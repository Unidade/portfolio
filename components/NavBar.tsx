'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    throw new Error('Sentry Frontend Error')
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <header className='divide-y-2'>
      <nav className='flex justify-between items-center '>
        <div data-type='nav__right'>
          <h1 className='font-bold text-2xl tracking-tight'>Dario Rodrigues</h1>
        </div>
        <div
          data-type='nav__left'
          className={`mr-2 ${isDrawerOpen ? 'self-center ' : ''}`}
        >
          <div className={`space-y-2 inline-block`} onClick={handleClick}>
            <div
              className={`w-6 transition-all h-0.5 bg-gray-600 ${
                isDrawerOpen ? 'rotate-45 translate-y-3' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 transition-all duration-75 bg-gray-600 ${
                isDrawerOpen ? 'invisible' : ''
              }`}
            ></div>
            <div
              className={`w-6 transition-all h-0.5 bg-gray-600 ${
                isDrawerOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </div>

          <ul
            className={`flex gap-6 z-1 h-screen absolute w-max items-center transition-all flex-col justify-center ${
              isDrawerOpen
                ? '-translate-x-full visible opacity-1'
                : '-translate-y-full translate-x-full hidden invisible opacity-0'
            }`}
          >
            <li className='hover:text-gray-500'>
              <Link href='#projetos'>Projetos</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='#'>Currículo</Link>
            </li>
            <li className='hover:text-gray-500'>
              <Link href='#'>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
      <p className='font-medium mt-1'>
        Eu sou um desenvolvedor web focado no ecossistema React/NextJS
      </p>
    </header>
  )
}
