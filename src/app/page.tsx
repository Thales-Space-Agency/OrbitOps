import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="flex h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
              <a href='/'>
                <Image className="mb-5" src="/images/logo.png" alt="Logo" width={70} height={70} />
              </a>
              <h1 className="text-4xl font-bold mb-5">Welcome back</h1>
              <p className='mb-8'>Please enter your details.</p>
              <form className="w-1/2">
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="token">
                    ID / Token
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="token" type="text" placeholder="tsa_user-456797898" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="password">
                    Password
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline text-sm" id="password" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
                </div>
                <div className='flex items-center mb-5'>
                  <div className="w-1/2 text-right">
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-900">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="w-1/2 text-right">
                    <a className="block text-xs underline text-gray-900 font-medium" href="auth/password-lost">Forgot password?</a>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/backgrounds/bg-1.png')" }}>
            </div>
          </div>
    </main>
  )
}
