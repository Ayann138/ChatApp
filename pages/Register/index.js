import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleSignUp = () => {
    const uid = uuidv4();
    const formData = new FormData();
    formData.append('uid' , uid)
    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('phoneNo', phoneNo);
    formData.append('profilePic', profilePic);

    axios.post('http://localhost:8000/RegisterUser', formData)
      .then(response => {

        console.log('Signup successful:', response.data);
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  return (
    <div className="bg-secondary flex items-center justify-center h-screen">
      <div>
        {/* Left Side card */}
        <form className="bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[400px]">
          <div className="mb-2">
            <h1 className="block text-black text-lg font-bold mb-2">Register Yourself</h1>
            <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="phoneNo">
              Phone No.
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNo"
              type="text"
              placeholder="Enter Your Phone Number"
              value={phoneNo}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="profilePic">
              Profile Picture
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="profilePic"
              name="profilePic"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
          <div className='mt-4'>
            <span className='text-sm'>Already User? </span>
            <a className='text-sm' href='/Login'> Login</a>
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

export default SignupForm;
