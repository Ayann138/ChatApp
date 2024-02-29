import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()
  const handleLogin = async () => {
    if (!email) {
      alert("Please Enter Email")
      return;
    }
    if (!password) {
      alert("Please Enter Password")
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/Login' ,{
        method: 'POST', 
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await response.json()
      console.log(res)
      if(response.status == 200){
          Cookies.set('FullName', res.user.fullname);
          Cookies.set('ProfilePic', res.user.profilepic);
          Cookies.set('User', JSON.stringify(res.user));
          Cookies.set('Token', res.token);

          router.push('/ChatPage')
      }else if(response.status == 400 || response.status == 404){
        alert(res.Status)
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
