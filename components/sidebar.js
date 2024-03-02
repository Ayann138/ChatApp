import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import AttachUsers from './UserModal';
import { v4 as uuidv4 } from 'uuid';

function SideBar({ UserProfilePic, UserName,sender_guid, userChats, users }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // State variable to manage modal visibility

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleAddChat = async (receiver_guid) =>{
        const chat_guid = uuidv4();
      //  const receiver_guid = 
      try{
        let response = await fetch('http://localhost:8000/AddUserChat',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ chat_guid, sender_guid,receiver_guid }),
        });
        if(response.status == 200){
             const res = await response.json()
            alert(res)
        }
      } catch (error) {
        console.error('Error submitting form data:', error);
      }
    }
    return (
        <div className='w-[25%] h-screen overflow-scroll overflow-y-auto bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
                <div className='border border-primary p-[2px] rounded-full'>
                    <img src={`http://localhost:8000/uploads/${UserProfilePic}`} width={40} height={40} className="rounded-full" />
                </div>
                <div className='ml-4'>
                    <h3 className='text-xl font-semibold'>{UserName}</h3>
                    <p className='text-md font-light'>My Account</p>
                </div>
            </div>
            <hr />
            <div className='mx-14 mt-2'>
                <div className='text-primary text-lg'>Add Chat</div>
                <div className='text-primary text-lg' onClick={openModal}>Messages</div>
                {/* Button to open modal */}
                <button onClick={openModal}>Add Chat</button>
                <div>
                    {userChats.map((chat, index) => (
                        <div key={index} className='flex items-center py-4 border-b border-b-gray-100'>
                            <div className='cursor-pointer flex items-center'>
                                <div>
                                    <img src={chat.imageSrc} width={25} height={25} className="rounded-full" />
                                </div>
                                <div className='ml-4'>
                                    <h3 className='text-lg font-semibold'>{chat.receiver_name}</h3>
                                    <p className='text-sm font-light'>{chat.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal component */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center">
                    <div className="bg-primary p-6 rounded-lg">
                        <h2 className="text-lg font-semibold mb-4 text-[#ffff]">Users List</h2>
                        <ul>
                            {/* Render list of users here */}
                            {users.map((chat, index) => (
                                <li className='text-[#ffff] cursor-pointer' key={index} onClick={()=>handleAddChat(chat.uid)}>{chat.fullname}</li>
                            ))}
                        </ul>
                        <button className='text-[#ffff]' onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default SideBar;
