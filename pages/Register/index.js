import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const router = useRouter()
  const handleSignUp = async () => {
    const uid = uuidv4();
    const formData = new FormData();
    formData.append('uid', uid)
    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('phoneNo', phoneNo);
    formData.append('profilePic', profilePic);
    try {
      const response = await axios.post('http://localhost:8000/RegisterUser', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          // 'Authorization': token,
        },
      });
      console.log(response)
      if (response.status == 401) {
        alert("Unauthorized Access");

      } else if (response.status != 200 && response.status != 201) {
        alert("Data Not Submitted");
        throw new Error(`Server error!`);
      }

      alert("User Added");
      router.push(`/Login`);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
  };

  return (
    <div className="bg-gray-400 flex items-center justify-center h-screen">
      <div>
        {/* Left Side card */}
        <form className=" bg-secondary shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[600px] ">
          <h1 className="block text-black text-lg font-bold mb-2">Register Yourself</h1>
          <div className='grid grid-cols-2 p-2'>


            <div className="mb-2 p-2">
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
            <div className="mb-2 p-2">
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
            <div className="mb-2 p-2">
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
            <div className="mb-2 p-2">
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
            <div className="mb-4 p-2">
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
