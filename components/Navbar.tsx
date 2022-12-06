import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className='w-full navbar border-b-2 !p-0'>
        <div className='flex-1 text-4xl tracking-tighter font-bold'>
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
              />
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
      <p className='font-medium tracking-wider mt-1'>
        Eu sou um desenvolvedor focado no ecosistema Next/ReactJS
      </p>
    </>
  )
}
