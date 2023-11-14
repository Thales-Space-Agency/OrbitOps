'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image'

function useWindowHeight() {
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
        setHeight(window.innerHeight);

        const handleResize = () => setHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return height;
}

export default function Onboard() {
  
  const [currentDiv, setCurrentDiv] = useState(1);
  const windowHeight = useWindowHeight();

  const showNextDiv = () => {
    setCurrentDiv(currentDiv < 4 ? currentDiv + 1 : currentDiv);
  };

  const showPreviousDiv = () => {
    setCurrentDiv(currentDiv > 1 ? currentDiv - 1 : currentDiv);
  }

  return (
    <main>
        <nav className="flex items-center justify-center text-center lg:justify-start w-full p-4 border-b flex-col lg:flex-row">
            <Image src="/images/logo.png" alt="Logo" className="lg:ml-10" width={50} height={50} />
            <h1 className='font-bold'>OrbitOps</h1>
            {/* Horizontal progress bar for tablets*/}
            <div className='flex-row flex lg:hidden w-full'>
                    <div className="flex-col items-center p-4 hidden sm:flex">
                        <div className="flex items-center text-center">
                            <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">1</div>
                            <div className="relative flex-auto">
                                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-blue-500"></div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-semibold">Profile customization</p>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-center justify-center h-10 mt-5 p-1 w-full">
                        <div className="w-full bg-gray-300 rounded flex flex-col justify-center" style={{ height: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 2 && 'hidden'}`} style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col items-center p-4 hidden sm:flex">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 2 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>2</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500 font-semibold">Coding environment</p>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-center justify-center h-10 mt-5 w-full">
                        <div className="w-full bg-gray-300 rounded flex flex-col justify-center" style={{ height: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 3 && 'hidden'}`} style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col items-center p-4 hidden sm:flex">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 3 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>3</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500 font-semibold">Your first project</p>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-center justify-center h-10 mt-5 w-full">
                        <div className="w-full bg-gray-300 rounded flex flex-col justify-center" style={{ height: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 4 && 'hidden'}`}  style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex-col items-center p-4 hidden sm:flex">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 4 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>4</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-500 font-semibold">Link accounts (optional)</p>
                        </div>
                    </div>
            </div>
        </nav>
        <div className='flex flex-col lg:flex-row h-screen'>
        <div className='flex flex-col flex-1 p-4 bg-light-blue'>
          <div className='h-3/4 w-full'></div>
          <div className='flex sm:h-1/3 lg:h-1/4 w-full justify-center'>
            <div className='flex flex-col items-center justify-start w-full h-full'>
                <button className='bg-primary text-white w-2/3 sm:w-1/3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={showNextDiv}>Continue</button>
                <a className={`text-gray-500 mt-2 cursor-pointer ${currentDiv < 2 && 'hidden'}`} onClick={showPreviousDiv}>Back to previous step</a>
            </div>
          </div>
        </div>
            <div className='hidden w-1/3 border-l lg:flex lg:flex-col'>
                {/* Vertical progress bar */}
                <div className='h-3/5'>
                    <div className="flex flex-row items-center p-4">
                        <div className="flex items-center text-center">
                            <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center">1</div>
                            <div className="relative flex-auto">
                                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1 bg-blue-500"></div>
                            </div>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm font-semibold">Profile customization</p>
                            <p className="text-xs text-gray-500">Nickname, profile picture, title...</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start h-10 pl-8">
                        <div className="h-full bg-gray-300 rounded flex flex-col justify-end" style={{ width: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 2 && 'hidden'}`} style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center p-4">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 2 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>2</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm text-gray-500 font-semibold">Coding environment</p>
                            <p className="text-xs text-gray-500">Arduino, ESP32, Raspberry...</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start h-10 pl-8">
                        <div className="h-full bg-gray-300 rounded flex flex-col justify-end" style={{ width: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 3 && 'hidden'}`} style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center p-4">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 3 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>3</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm text-gray-500 font-semibold">Your first project</p>
                            <p className="text-xs text-gray-500">Name, description, files...</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-start justify-start h-10 pl-8">
                        <div className="h-full bg-gray-300 rounded flex flex-col justify-end" style={{ width: '5px' }}>
                            <div className={`bg-primary w-full text-xs leading-none py-1 text-center text-gray-800 rounded ${currentDiv < 4 && 'hidden'}`} style={{ height: '100%' }}>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center p-4">
                        <div className="flex items-center text-center">
                            <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${currentDiv >= 4 ? 'border-primary' : 'border-gray-300 text-gray-500'}`}>4</div>
                            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                        </div>
                        <div className="ml-5">
                            <p className="text-sm text-gray-500 font-semibold">Link accounts (optional)</p>
                            <p className="text-xs text-gray-500">Github, Discord, Youtube...</p>
                        </div>
                    </div>
                </div>
                {/* Help section */}

                {windowHeight > 660 && (
                    <div className='h-2/5 p-4'>
                        <p className='font-medium text-lg mb-4'>Having trouble ?</p>
                        <p className='text-sm text-gray-500 mb-7'>Feel free to contact us and we will always<br></br>help you through the process.</p>
                        <button className="border font-medium text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Contact us
                        </button>
                    </div>
                )}

            </div>

        </div>

    </main>
  )
}
