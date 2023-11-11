import Image from 'next/image'

export default function Waitlist() {
  return (
    <main>
      <div className="flex h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
              <a href='/'>
                <Image className="mb-5" src="/images/logo.png" alt="Logo" width={70} height={70} />
              </a>
              <h1 className="text-4xl font-bold mb-5">Let's secure your account</h1>
              <p className='mb-8 text-center'>Please choose a secured password.<br></br>(10 characters min and 1 symbol)</p>
              <form className='w-1/2'>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="token">
                    ID / Token
                  </label>
                  <input className="disabled appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="token" type="text" value="tsa_user-456797898" disabled />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="password" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="re-password">
                    Repeat Password
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="re-password" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Set password and login
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/backgrounds/bg-3.png')" }}>
            </div>
          </div>
    </main>
  )
}
