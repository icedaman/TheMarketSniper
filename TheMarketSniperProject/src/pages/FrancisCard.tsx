import FrancisAvatar from '../assets/francisAvatar.jpg'

export default function FrancisCard() {
  return (
            <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-zinc-800 dark:border-green-700 md:max-w-sm rounded-xl transition duration-500 ease-in-out shadow-2xl hover:shadow-green-500 rounded-2xl transform hover:scale-125">
                <div className="pb-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex justify-center w-full">
                            <div className="relative">
                                <img src={FrancisAvatar} className="dark:shadow-xl border-white dark:border-zinc-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mt-20 text-center">
                        <h3 className="mb-1 text-2xl font-bold leading-normal  text-zinc-300">Francis Hunt</h3>
                        <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                            </svg>
                            <div className="text-sm font-bold tracking-wide text-zinc-300 font-mono text-xl">Trader / Technical Analyst</div>
                        </div>
                        <div className="w-full text-center">
                            <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                                <div className="flex space-x-2">
                                <a
                                        className="p-1 -m-1 text-zinc-400 hover:text-green-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://www.youtube.com/@TheMarketSniper1"
                                        rel="noopener"
                                        aria-label="Francis Hunt on Youtube"
                                        target="_blank"
                                    >
                                        <svg className="w-6 h-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140">
                                            <path
                                                d="M115 15H25A25 25 0 000 40v60a25 25 0 0025 25h90a25 25 0 0025-25V40a25 25 0 00-25-25zM95.71 76.25L63.58 94.1A7.15 7.15 0 0153 87.85v-35.7a7.15 7.15 0 0110.6-6.26l32.11 17.86a7.15 7.15 0 010 12.5z"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="p-1 -m-1 text-zinc-400 hover:text-green-500 focus:outline-none focus-visible:ring-2 ring-primary"
                                        href="https://twitter.com/themarketsniper" 
                                        rel="noopener"
                                        aria-label="Francis Hunt on Twitter"
                                        target="_blank"
                                    >
                                        <svg className="w-6 h-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 24 24">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mx-6 mt-6 text-center border-t border-zinc-200 dark:border-zinc-700/50">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-6">
                                <p className="mb-4 leading-relaxed text-zinc-300 font-semibold">
                                    Francis is an experienced trader with multiple decades of experience, that not only survived but thrived during multiple crashes, bear and bull cycles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                        <div className="absolute flex -space-x-12 rounded-b-2xl">
                            <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-green-400/90 group-hover:bg-green-600/90 z-10"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-green-300/90 group-hover:bg-green-500/90 z-20"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-green-200/90 group-hover:bg-green-400/90 z-30"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-green-100/90 group-hover:bg-green-300/90 z-40"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-green-50/90 group-hover:bg-green-200/90 z-50"></div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
