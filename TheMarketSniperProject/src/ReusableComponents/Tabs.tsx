import { useState } from 'react'
import { Tab } from '@headlessui/react'
import StateOfMarketLogo from '../assets/state-of-market.png'
import OptEntryLogo from '../assets/optimum-entry.png'
import MinLossLogo from '../assets/min-stop-loss.png'
import TakeProfitLogo from '../assets/take-profit.png'
import MaxRRRLogo from '../assets/max-rrr.png'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const [categories] = useState({
    'Discover the Hunt Volatility Funnel (HVF) Method': [
      {
        id: 1,
        description: 'The Hunt Volatility Funnel (HVF) Method is a unique trading methodology that puts you in front of major expansive moves in the markets. It is a systemized approach that answers the key question – “What is the next most profitable trade?',
      },
      {
        id: 2,
        description: 'With this answer in hand, you are positioned to reap the maximum profit in the shortest period of time. This single trading methodology is surprisingly simple, quick to adopt, and has given rise to our growing community of successful HVF traders that you are welcome to join.',
      },
    ],
    'Why The Hunt Volatility Funnel Method?': [
      {
        id: 1,
        description: 'The Hunt Volatility Funnel Method is superior to other trading methodologies in that it focuses on identifying key breakout trading opportunities, placing the trader in an immediate and often substantial positive position with considerably favorable reward to risk ratios throughout the trade.',
      },
      {
        id: 2,
        description: 'Combined with the benefit of having all key levels for the trade pre-determined including entry, take-profit,  and stop-loss, this trading methodology is fully comprehensive and unique in providing a level of clarity and autonomy – and freedom to live one’s life – simply unmatched by any other trading strategy.',
      },
    ],
    'Mindset': [
      {
        id: 1,
        description: 'Because the HVF Method provides a fully comprehensive framework for trading, our students benefit from peace of mind and confidence throughout each of their trades. Though often overlooked by others, developing a mindset that allows a sense of control and the ability to process information and make better decisions clearly, is pivotal. In fact it is essential to the psyche of being a successful trader.',
      },
      {
        id: 2,
        description: 'Our traders quickly learn to master their emotions and not fall into the trap of common mental challenges such as “Fear of Missing Out”, “Fear of Acknowledging Loss” and “The Compulsion To Trade”. This higher level of emotional control gives our traders the freedom and clarity of mind needed to make decisions that result in fewer mistakes and higher profits.',
      },
      {
        id: 3,
        description: 'The Hunt Volatility Funnel Method equips our traders with the knowledge and ability to assess and manage risk. You will have the insight and tools you need to identify specific trade situations where the probability of a favorable outcome is high and it is completely justified to “pig out” by taking on much larger positions to maximize your potential gains.',
      },
    ],
    'Market': [
      {
        id: 1,
        description: 'Something very unique about the Hunt Volatility Funnel trading methodology is that it works equally well on all financial markets including forex, equities, and commodities as well as for cryptocurrencies.',
      },
      {
        id: 2,
        description: 'Though the HVF method can be applied on all time-frames, it works best over the medium to long term (with the exception of cryptocurrencies where substantial price movements often occur in a question of hours or just a few days. Our community members successfully trade cryptocurrencies utilizing the HVF trading methodology, the time frame is just much shorter.',
      },
    ],
  })

  return (
    <div className="w-full py-16 px-96">
      <h5 className='pb-16 pt-10 text-4xl text-semibold overflow text-green-800 drop-shadow-lg shadow-black w-full text-center'>
        The Hunt Volatility Funnel (HVF)
      </h5>
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-green-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-bold leading-5 p-2',
                  'ring-green-300/60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-green-300 text-zinc-500 shadow ring-green-300/60 ring-2'
                    : 'text-green-800 hover:bg-green-300/[0.12] hover:text-green-500'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((tabs, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-zinc-300 p-3',
                'ring-green-300/60 ring-offset-2 ring-offset-green-400 focus:outline-none ring-2'
              )}
            >
              <ul className="p-3">
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className="relative rounded-md p-3 hover:bg-zinc-400"
                  >
                    <h3 className="text-sm font-medium leading-5 text-zinc-900">
                      {tab.description}
                    </h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <div>
        <h5 className='pb-16 pt-10 text-xl text-semibold overflow text-green-800 drop-shadow-lg shadow-black w-full text-center'>
          With the HVF Method know these parameters before even entering a trade:
        </h5>
        <div className="grid grid-cols-5 gap-6  mx-40">
          <img src={StateOfMarketLogo} />
          <img src={OptEntryLogo} />
          <img src={MinLossLogo} />
          <img src={TakeProfitLogo} />
          <img src={MaxRRRLogo} />
        </div>
      </div>
    </div>
  )
}
