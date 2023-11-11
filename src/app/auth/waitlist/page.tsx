import Image from 'next/image'

export default function Waitlist() {
  return (
    <main>
      <div className="flex h-screen">
            <div className="w-full lg:w-1/2 flex items-center justify-center flex-col">
              <a href='/'>
                <Image className="mb-5" src="/images/logo.png" alt="Logo" width={70} height={70} />
              </a>
              <h1 className="text-4xl font-bold mb-5">Happy to meet you</h1>
              <p className='mb-8'>Please enter your details and wait for an invitation.</p>
              <form className='w-1/2'>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" id="email" type="email" placeholder="marie.curie@tsa.com" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="status">
                    Your actual status
                  </label>
                  <select id="status" className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm">
                    <option value="student">Student</option>
                    <option value="professor">Professor</option>
                    <option value="worker">Worker</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm mb-2" htmlFor="reason">
                    Why do you want to join us ?
                  </label>
                  <textarea id="reason" placeholder='To share my project and help others.' className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm" />
                </div>
                <div className='text-center mb-5'>
                  <a href="/" className='underline font-medium w-full text-xs'>Already have an account ? Sign in</a>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-primary text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Join waitlist
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/images/backgrounds/bg-2.png')" }}>
            </div>
          </div>
    </main>
  )
}
