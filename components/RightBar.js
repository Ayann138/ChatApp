import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import AttachUsers from './UserModal';
import { v4 as uuidv4 } from 'uuid';
import img1 from '../public/2.jpeg'
import GroupModal from './GroupModal';
function RightBar({ UserProfilePic, UserName, sender_guid, userChats, users, handleGroupChatClick, fetchUserChats }) {
    const [isModalOpen, setIsModalOpen] = useState(false); // State variable to manage modal visibility
    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        fetchUserChats()
    };
    const [user, setUser] = useState(JSON.parse(Cookies.get('User')))
    const [groupChats, setGroupChats] = useState([])

    useEffect(() => {
        const fetchUserChats = async () => {
            try {
                const response = await fetch(`http://localhost:8000/GetGroups/${user.uid}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    const userChats = await response.json();
                    console.log("UserChats:", userChats);
                    setGroupChats(userChats)
                } else {
                    console.error('Error fetching user chats:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching user chats:', error);
            }
        };

        if (user && user.uid) {
            fetchUserChats();
        }
    }, [user]);
    const handleAddChat = async (receiver_guid) => {
        const chat_guid = uuidv4();
        //  const receiver_guid = 
        try {
            let response = await fetch('http://localhost:8000/AddUserChat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chat_guid, sender_guid, receiver_guid }),
            });

            if (response.ok) {
                const res = await response.text();
                alert(res);
            } else {
                const errorMessage = await response.text();
                throw new Error(`HTTP Error: ${response.status} - ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    }


    return (
        <div className=' h-screen overflow-scroll overflow-y-auto bg-secondary'>
            <div className='flex items-center my-8 mx-14'>
                <div className='border border-primary p-[2px] rounded-full'>
                    {/* <img src={`http://localhost:8000/uploads/${UserProfilePic}`} width={40} height={40} className="rounded-full" /> */}
                    {/* <img src='1.jpeg' width={40} height={40} className="rounded-full" /> */}

                </div>
                <div className='ml-4'>
                    <h3 className='text-xl font-semibold'>Group Chats</h3>
                    {/* <p className='text-md font-light'>Group Chats</p> */}
                </div>
            </div>
            <hr />
            <div className='mx-14 mt-2'>
                <div className='text-primary text-lg' onClick={openModal}>Messages</div>
                {/* Button to open modal */}
                <button onClick={openModal}>Create New Group</button>
                <div>
                    {groupChats.length > 0 ? groupChats.map((chat, index) => (
                        <div key={index} className='flex items-center py-4 border-b border-b-gray-100'>
                            <div className='cursor-pointer flex items-center'>
                                <div>
                                    <img src='3.jpeg' width={25} height={25} className="rounded-full" />
                                </div>
                                <div className='ml-4' onClick={() => { handleGroupChatClick(chat) }}>
                                    <h3 className='text-lg font-semibold'>{chat.chats[0].groupname}</h3>
                                </div>
                            </div>
                        </div>
                    )) : <div><h3 className='text-lg font-semibold'>No chats</h3></div>}

                </div>
            </div>

            <GroupModal
                isModalOpen={isModalOpen}
                users={users}
                handleAddChat={handleAddChat}
                closeModal={closeModal}
            />

        </div>
    );
}

export default RightBar;
