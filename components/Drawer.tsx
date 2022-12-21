import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CommandLineIcon,
  PaperClipIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useDrawerContext } from 'context/drawerContext'

export default function Drawer() {
  const { showDrawer: open, setShowDrawer: setOpen } = useDrawerContext()

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto relative w-screen max-w-md'>
                  <div className='flex h-full flex-col  overflow-y-scroll bg-white py-6 shadow-xl'>
                    <div className='px-4 sm:px-6'>
                      <Dialog.Title className='text-lg  font-medium text-gray-900'>
                        Menu
                      </Dialog.Title>
                    </div>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                      <ul className='space-y-4 p-4 w-80 bg-base-100'>
                        <li>
                          <Link
                            className='flex gap-1 items-center'
                            onClick={() => setOpen(!open)}
                            href='#projetos'
                          >
                            <CommandLineIcon className='w-8 h-8' />
                            Projetos
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='flex gap-1 items-center'
                            onClick={() => setOpen(!open)}
                            href='#curriculo'
                          >
                            <PaperClipIcon className='w-8 h-8' />
                            Currículo
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='flex gap-1 items-center'
                            onClick={() => setOpen(!open)}
                            href='#contato'
                          >
                            <PhoneIcon className='w-8 h-8' /> Contato
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
