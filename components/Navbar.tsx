import { useDrawerContext } from 'context/drawerContext'
import Link from 'next/link'

export default function Navbar() {
  const { showDrawer, setShowDrawer } = useDrawerContext()
  return (
    <>
      <div className='w-full flex py-2 items-center justify-between border-b-2'>
        <div className='flex-1 text-2xl md:text-4xl tracking-tighter font-bold'>
          Dario Rodrigues
        </div>
        <div className='flex-none lg:hidden'>
          <label
            onClick={() => setShowDrawer(!showDrawer)}
            className='flex items-center cursor-pointer'
          >
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
          <ul className='flex items-center justify-around gap-8'>
            <li>
              <Link
                className='hover:bg-gray-50 hover:text-gray-700 p-4'
                href='#projetos'
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-gray-50 hover:text-gray-700 p-4'
                href='#curriculo'
              >
                Currículo
              </Link>
            </li>
            <li>
              <Link
                className='hover:bg-gray-50 hover:text-gray-700 p-4'
                href='#contato'
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className='font-medium tracking-wider mt-1'>
        Eu sou um desenvolvedor focado no ecossistema Javascript/React/NextJS
      </p>
    </>
  )
}
