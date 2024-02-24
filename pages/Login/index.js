import React from 'react';
import { useRouter } from 'next/router';
function LoginForm() {

  const router = useRouter()
  const handleLogin = () =>{
    router.push('/ChatPage')
    }
  return (
    <div className="bg-gray-600 flex items-center justify-center h-screen">

      <div>
        {/* Left Side card */}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[400px]">
        <div className="mb-4">
            <h1 className="block text-black text-lg font-bold mb-2" htmlFor="username">
              Login To Your Account
            </h1>

          </div>
          <div className="mt-8 mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </div>
          <div className='mt-4'>
          <a className='text-sm'>New User? </a>
          <a className='text-sm' href='/Register'> Sign Up</a>
          </div>



        </form>
      </div>
      <div>
        {/* Right Side card */}
        {/* You can add content for the right side card here */}
      </div>
    </div>
  );
}

export default LoginForm;
