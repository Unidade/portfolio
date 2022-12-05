'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  return (
    <header className='divide-y-2'>
      <nav className='flex justify-between items-center '>
        <div data-type='nav__right'>
          <h1 className='font-bold text-2xl tracking-tight'>Dario Rodrigues</h1>
        </div>
        <div data-type='nav__left' className={`mr-2 [display:inherit]`}>
          <div className={`space-y-2 inline-block z-20`}>
            <div className={`w-6 transition-all h-0.5 bg-gray-600`}></div>
            <div
              className={`w-6 h-0.5 transition-all duration-75 bg-gray-600 `}
            ></div>
            <div className={`w-6 transition-all h-0.5 bg-gray-600 `}></div>
          </div>
          <ul
            className={`flex gap-10 translate-y-[-12px] w-72 text-center invisible select-none z-10 bg-white h-screen absolute items-center transition-all flex-col justify-center`}
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
