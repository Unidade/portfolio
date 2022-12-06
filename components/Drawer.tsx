import Link from 'next/link'
import Navbar from './Navbar'

export default function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex px-5 flex-col scroll-smooth'>
        <Navbar />
        {children}
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
    </div>
  )
}
