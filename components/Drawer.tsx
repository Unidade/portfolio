import Link from 'next/link'

export default function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className='drawer drawer-end !h-auto '>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <div className='w-full navbar  border-b-2 !p-0 !min-h-0'>
          <div className='flex-1 px-2 mx-2 text-2xl tracking-tighter font-bold'>
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
          <div className='flex-none hidden lg:block '>
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
        <p className='ml-4 font-medium tracking-tight mt-2'>
          Eu sou um desenvolvedor web focado no ecossistema React/NextJS
        </p>
        {children}
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100'>
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}