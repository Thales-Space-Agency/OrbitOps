import Image from 'next/image'

export default function Waitlist() {
  return (
    <main>
      <div className="flex h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
              <a href='/'>
                <Image className="mb-5" src="/images/logo.png" alt="Logo" width={70} height={70} />
              </a>
              <h1 className="text-4xl font-bold mb-5">Let’s recover your account</h1>
              <p className='mb-8'>Please fill the details of your account.</p>
              <form className='w-1/2'>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="token">
                    ID / Token
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="token" type="text" placeholder="tsa_user-456797898" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="email" type="email" placeholder="marie.curie@thalesspaceagency.com" />
                </div>
                <div className='text-center mb-5'>
                  <a href="email:contact@thalesspaceagency.com" className='underline font-medium w-full text-xs'>ID / Token lost ? Contact us</a>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Send password recovery
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/backgrounds/bg-4.png')" }}>
            </div>
          </div>
    </main>
  )
}
