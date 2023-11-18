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
  const [activeDivs, setActiveDivs] = useState<{ [key: string]: boolean }>({});

  const selectEnv = (id: string) => {
    setActiveDivs(prevState => ({
        ...prevState,
        [id]: !prevState[id]
    }));
  };

  const showNextDiv = () => {
    setCurrentDiv((currentDiv) => (currentDiv < 4 ? currentDiv + 1 : currentDiv));
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
                            <p className={`text-sm ${currentDiv >= 2 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Coding environment</p>
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
                            <p className={`text-sm ${currentDiv >= 3 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Your first project</p>
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
                            <p className={`text-sm ${currentDiv >= 4 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Link accounts (optional)</p>
                        </div>
                    </div>
            </div>
        </nav>
        <div className='flex flex-col lg:flex-row h-screen'>
        <div className='flex flex-col flex-1 p-4 bg-light-blue'>
          <div className='h-3/4 w-full'>
            {/* Here is where the dynamic div for steps goes */}
            <div className={`flex flex-col items-center justify-center h-full ${currentDiv !== 1 && 'hidden'}`}>
                <h5 className='text-lg sm:text-3xl font-semibold mb-3 text-center lg:text-left'>Customize your profile to reflect you</h5>
                <p className='text-gray-500 text-center lg:text-left'>Personalize your nickname, photo, title, and status to showcase your identity.</p>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-row mt-7 items-center'>
                        <Image src="/images/avatar/default.png" alt='Avatar' width={75} height={75} />
                        <button className='btn bg-none text-xs border-gray-300 border-2 rounded-xl ml-6 h-2/3 px-4 font-medium'>Change picture</button>
                    </div>
                    <div className='h-2/3 w-full mt-5'>
                        <form className='flex flex-col sm:flex-row items-center justify-center'>
                            <div className='flex flex-col items-start justify-start sm:w-2/5 lg:w-1/4 sm:mr-4'>
                                <label className="block text-sm mb-2" htmlFor="nickname">
                                    Your nickname
                                </label>
                                <input className='appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id='nickname' type='text' placeholder='Marie Curie' />
                                <label className="block text-sm mb-2" htmlFor="title">
                                    Your title <span className='text-gray-500 text-xs hidden lg:block'>(Displayed below your name)</span>
                                </label>
                                <input className='appearance-none border rounded w-full py-2 px-3 mb-5 sm:mb-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id="title" type='text' placeholder='Student at ISAE-SUPAERO' />
                            </div>
                            <div className='flex flex-col items-start justify-start sm:w-2/5 lg:w-1/4'>
                                <label className="text-sm mb-2 hidden sm:block" htmlFor="language">
                                    Prefered language
                                </label>
                                <input className='hidden sm:block appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id="language" type='text' placeholder='French' />
                                <label className="block text-sm mb-2" htmlFor="birthdate">
                                    Birthdate <span className='text-gray-500 text-xs hidden lg:block'>(Only age will be displayed)</span>
                                </label>
                                <input className='mb-5 sm:mb-0 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id="birthdate" type='text' placeholder='dd/mm/yyyy' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center h-full ${currentDiv !== 2 && 'hidden'}`}>
                <h5 className='text-lg sm:text-3xl font-semibold mb-3 text-center lg:text-left'>Select your coding environment</h5>
                <p className='text-gray-500 text-center lg:text-left'>Pick the interface that best suits your programming style and needs.</p>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='w-full mt-5'>
                        {/* Listing with icon for tablet and desktop */}
                        <div className='hidden sm:flex flex-col sm:flex-row items-center justify-center'>
                            <div className='flex flex-col items-start justify-start'>
                                {/* Arduino */}
                                <div className={`flex flex-row border-2 cursor-pointer ${activeDivs["arduino"] ? 'border-primary' : 'border-gray-300 '} rounded-lg py-4 px-6 mb-5`} key={"arduino"} id='arduino' onClick={() => selectEnv("arduino")}>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-1/5 h-full flex items-start justify-start'>
                                            <div className='flex justify-center items-center border border-gray-300 rounded-full w-6 h-6'>
                                                <div className={`${activeDivs["arduino"] ? 'block' : 'hidden '} bg-primary rounded-full w-4 h-4`}></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <Image className="mb-3" src="/images/boards/arduino.png" alt='Arduino' width={150} height={150} />
                                            <p className='text-s text-gray-500'>Arduino</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ESP32 */}
                                <div className={`flex flex-row border-2 cursor-pointer ${activeDivs["esp32"] ? 'border-primary' : 'border-gray-300 '} rounded-lg py-4 px-6`} key={"esp32"} id="esp32" onClick={() => selectEnv("esp32")}>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-1/5 h-full flex items-start justify-start'>
                                            <div className='flex justify-center items-center border border-gray-300 rounded-full w-6 h-6'>
                                                <div className={`${activeDivs["esp32"] ? 'block' : 'hidden '} bg-primary rounded-full w-4 h-4`}></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <Image className="mb-3" src="/images/boards/esp32.png" alt='ESP32' width={150} height={150} />
                                            <p className='text-s text-gray-500'>ESP32</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start justify-start ml-5'>
                                {/* Raspberry Pi */}
                                <div className={`flex flex-row border-2 cursor-pointer ${activeDivs["raspberry"] ? 'border-primary' : 'border-gray-300 '} rounded-lg py-5 px-6 mb-5`} key={"raspberry"} id="raspberry" onClick={() => selectEnv("raspberry")}>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-1/5 h-full flex items-start justify-start'>
                                            <div className='flex justify-center items-center border border-gray-300 rounded-full w-6 h-6'>
                                                <div className={`${activeDivs["raspberry"] ? 'block' : 'hidden '} bg-primary rounded-full w-4 h-4`}></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <Image className="mb-3" src="/images/boards/raspberrypi.png" alt='Raspberry Pi' width={150} height={150} />
                                            <p className='text-s text-gray-500'>Raspberry Pi</p>
                                        </div>
                                    </div>
                                </div>
                                {/* ESP32 */}
                                <div className={`flex flex-row border-2 cursor-pointer ${activeDivs["other"] ? 'border-primary' : 'border-gray-300 '} rounded-lg py-4 px-6`} key={"other"} id="other" onClick={() => selectEnv("other")}>
                                    <div className='flex justify-center items-center'>
                                        <div className='w-1/5 h-full flex items-start justify-start'>
                                            <div className='flex justify-center items-center border border-gray-300 rounded-full w-6 h-6'>
                                                <div className={`${activeDivs["other"] ? 'block' : 'hidden '} bg-primary rounded-full w-4 h-4`}></div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-center'>
                                            <Image className="mb-3" src="/images/boards/other.png" alt='Other' width={150} height={150} />
                                            <p className='text-s text-gray-500'>Other</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Listing withour icon for mobile */}
                        <div className='sm:hidden flex flex-col items-center justify-center'>
                            <select id="environment" className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                                <option value="arduino">Arduino</option>
                                <option value="esp32">ESP32</option>
                                <option value="raspberry">Raspberry Pi</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center h-full ${currentDiv !== 3 && 'hidden'}`}>
                <h5 className='text-lg sm:text-3xl font-semibold mb-3 text-center lg:text-left'>Add your first project</h5>
                <p className='text-gray-500 text-center lg:text-left'>Name your project, describe its purpose, and upload your code files to begin.</p>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-row justify-center items-center mt-7 sm:w-4/5 lg:w-1/2'>
                        <div className='flex flex-col w-1/2'>
                            <label className="block text-sm mb-2" htmlFor="project_name">
                                Project name
                            </label>
                            <input className='appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id='project_name' type='text' placeholder='Little Cubsat with sensors' />
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className="block text-sm mb-2" htmlFor="project_creation">
                                Date of creation
                            </label>
                            <input className='appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id='project_creation' type='text' placeholder='mm/yyyy' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:w-4/5 lg:w-1/2 justify-start items-start'>
                        <label className="block text-sm mb-2" htmlFor="project_description">
                        What does this project do ? What is the goal ?
                        </label>
                        <textarea className='appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm' id='project_description' placeholder='This project...' />
                    </div>
                    <div className='flex flex-col w-1/2 justify-center items-center h-full'>
                        <p className='text-sm mb-3'>Project files</p>
                        <button className='btn bg-none text-xs border-gray-300 border-2 rounded-xl h-12 px-4 font-medium'>Upload files or folder</button>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center h-full ${currentDiv !== 4 && 'hidden'}`}>
                <h5 className='text-lg sm:text-3xl font-semibold mb-3 text-center lg:text-left'>Link your accounts</h5>
                <p className='text-gray-500 text-center lg:text-left'>Connect your GitHub, Discord, and other accounts for a seamless experience.</p>
                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='flex flex-col justify-center items-center mt-7 w-4/5'>
                    <button className='flex flex-row justify-center items-center bg-discord text-white sm:w-2/3 lg:w-1/3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className='mr-4'>
                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                        </svg>
                        Link Discord account
                    </button>
                    <button className='flex flex-row justify-center items-center bg-github text-white sm:w-2/3 lg:w-1/3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className='mr-4'>
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        Link Github account
                    </button>
                    <button className='flex flex-row justify-center items-center bg-youtube text-white sm:w-2/3 lg:w-1/3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className='mr-4'>
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                        Link YouTube account
                    </button>
                    </div>
                </div>
            </div>
          </div>
          <div className='flex h-2/5 sm:h-1/3 lg:h-1/4 w-full justify-center'>
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
                            <p className={`text-sm ${currentDiv >= 2 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Coding environment</p>
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
                            <p className={`text-sm ${currentDiv >= 3 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Your first project</p>
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
                            <p className={`text-sm ${currentDiv >= 4 ? 'text-primary' : 'text-gray-500'} font-semibold`}>Link accounts (optional)</p>
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
};