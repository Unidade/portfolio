import Link from 'next/link'

export default function DrawerSide() {
  return (
    <div className='drawer-side'>
      <label htmlFor='my-drawer-3' className='drawer-overlay' />
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
  )
}
