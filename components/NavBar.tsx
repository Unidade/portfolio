'use client'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className='divide-y-2'>
      <div className='drawer-content  flex flex-col'>
        <div className='w-full navbar'>
          <div className='flex-1 font-bold text-2xl tracking-tighter'>
            Dario Rodrigues
          </div>
          <div className='flex-none lg:hidden'>
            <label htmlFor='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal'>
              <li>
                <Link href='#projetos'>Projetos</Link>
              </li>
              <li>
                <Link href='#curriculo'>Currículo</Link>
              </li>
              <li>
                <Link href='#contato'>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100'>
          <li>
            <Link href='#projetos'>Projetos</Link>
          </li>
          <li>
            <Link href='#curriculo'>Currículo</Link>
          </li>
          <li>
            <Link href='#contato'>Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
