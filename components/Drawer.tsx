import DrawerSide from './DrawerSide'
import Navbar from './Navbar'

export default function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col scroll-smooth container '>
        <div className='mr-auto max-w-full bg-black'>
          <Navbar />
          <main className=''>{children}</main>
        </div>
      </div>
      <DrawerSide />
    </div>
  )
}
