import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ChartBarSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Example() {
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <div className="w-full min-h-screen container mx-auto py-9 bg-black">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ChartBarSquareIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-1xl underline font-bold leading-6 text-gray-900">
                          SESSION 2 CRYPTO FINDS
                        </Dialog.Title>
                        <div className="mt-8">
                          <p className="text-sm text-gray-500 font-semibold">
                            Live Trading Day Session 2: Crypto Finds October 2023 6 October @ 13:30 - 15:00 UTC+0
                          </p>
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500 font-semibold">
                            Get the app now and be ready when your first meeting starts 
                            <Link to={'https://meet.goto.com/install'}>
                              <span className='text-green-600 font-semibold underline ml-1'>Here.</span>
                            </Link>
                          </p>
                        </div>
                        <div className="mt-6">
                          <p className="text-gray-500 font-bold">Oct 6, 2023, 2:30 – 4:00 PM (Europe/London) </p>
                          <p className="text-sm text-gray-500 mt-4">Please join my meeting from your computer, tablet or smartphone. </p>
                        </div>
                        <div className="mt-6">
                          <p className="text-sm text-gray-500 font-semibold">
                            *If you are not able to join please download and join via the GoToMeeting classic app  
                            <Link to={'https://global.gotomeeting.com/install?_ics=1659703153172&irclickid=undefined&_ga=2.154182463.640038393.1659701753-546854307.1627462240'}>
                              <span className='text-green-600 font-semibold underline ml-1'>Here.</span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Link to={"https://meet.goto.com/196854821"}>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Join 
                      </button>
                    </Link>
                    <Link to={"/live-sessions"}>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white-900 px-3 py-2 text-sm font-semibold text-red-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 hover:text-white sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Cancel 
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
