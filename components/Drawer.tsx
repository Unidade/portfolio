import DrawerSide from './DrawerSide'
import Navbar from './Navbar'

export default function Drawer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='drawer drawer-end'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex px-5 flex-col scroll-smooth'>
          <Navbar />
          {children}
        </div>
      </div>
      <DrawerSide />
    </>
  )
}
