// import { Fragment } from 'react'
// import {
//   BriefcaseIcon,
//   CalendarIcon,
//   CheckIcon,
//   ChevronDownIcon,
//   CurrencyDollarIcon,
//   LinkIcon,
//   MapPinIcon,
//   PencilIcon,
// } from '@heroicons/react/20/solid'
// import { Menu, Transition } from '@headlessui/react'

const people = [
  {
    name: '1 October',
    email: 'Jason',
    role: 'Lieutenant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paxlibrorum.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fforex-currency-trading-charts.jpg&f=1&nofb=1&ipt=69b4bc8bafb73bf1971e1bdfaefab8be69f4ba5ae7a7dafc3da1d1109b0b94b1&ipo=images',
    lastSeen: 'XAU, XAG, DXY',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: '10 October',
    email: 'Oliver',
    role: 'Lieutenant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paxlibrorum.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fforex-currency-trading-charts.jpg&f=1&nofb=1&ipt=69b4bc8bafb73bf1971e1bdfaefab8be69f4ba5ae7a7dafc3da1d1109b0b94b1&ipo=images',
    lastSeen: 'RES, VNQ',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: '15 October',
    email: 'Dewall',
    role: 'Lieutenant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paxlibrorum.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fforex-currency-trading-charts.jpg&f=1&nofb=1&ipt=69b4bc8bafb73bf1971e1bdfaefab8be69f4ba5ae7a7dafc3da1d1109b0b94b1&ipo=images',
    lastSeen: 'TSL, XAU, XAG',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: '21 October',
    email: 'Jason',
    role: 'Lieutenant',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.paxlibrorum.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fforex-currency-trading-charts.jpg&f=1&nofb=1&ipt=69b4bc8bafb73bf1971e1bdfaefab8be69f4ba5ae7a7dafc3da1d1109b0b94b1&ipo=images',
    lastSeen: 'XRP, XLM, XAU, XAG',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function StreamArchives() {
  return (
    <div className="w-full min-h-screen container mx-auto py-9 mt-12 bg-black">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-green-500 sm:truncate sm:text-3xl sm:tracking-tight">
            Stream Archives
          </h1>
        </div>
        <h4 className="text-xl font-semibold leading-6 text-white">October</h4>
      </div>
      
      <ul role="list" className="divide-y divide-gray-100 mt-12">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-white">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Symbols covered: <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
